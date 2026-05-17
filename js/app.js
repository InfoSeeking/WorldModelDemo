/* ── WorldModelDemo — app.js ── */

const USER_PREDICTION_FALLBACK = '(no prediction entered)';
const QUESTION_FALLBACK = 'Question coming soon.';
const OPTIONS_FALLBACK = 'Answer options will be added with the official MMToM-QA question.';
const GROUND_TRUTH_FALLBACK = 'Ground truth coming soon.';
const MODEL_RESULT_FALLBACK = 'Model result coming soon.';
const LLM_INPUT_FALLBACK = 'Text input will be added after extracting the official MMToM-QA description.';
const ANALYSIS_FALLBACK = 'Analysis coming soon.';
const PRE_PAUSE_INSTRUCTION = 'Watch the full clip first. The MMToM-QA question will appear after the video ends. You can reveal results at any time.';
const BENCHMARK_CONTEXT_FALLBACK = 'Benchmark context is unavailable for this test.';

let clipsCache = null;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeString(value) {
  return typeof value === 'string' ? value : '';
}

function hasText(value) {
  return safeString(value).trim().length > 0;
}

function fallbackText(value, fallback) {
  return hasText(value) ? safeString(value).trim() : fallback;
}

function compactText(value) {
  return safeString(value).replace(/\s+/g, ' ').trim();
}

function truncateText(value, maxChars) {
  const compact = compactText(value);
  if (!compact) {
    return '';
  }
  if (compact.length <= maxChars) {
    return compact;
  }
  return `${compact.slice(0, maxChars).trimEnd()}...`;
}

function getOptions(clip) {
  const options = clip?.options ?? {};
  return {
    a: safeString(options.a),
    b: safeString(options.b)
  };
}

function getPauseTime(clip) {
  if (typeof clip.pauseTime === 'number') {
    return clip.pauseTime;
  }
  if (typeof clip.pause_at === 'number') {
    return clip.pause_at;
  }
  return null;
}

function getVideoSrc(clip) {
  return safeString(clip.videoSrc || clip.video);
}

function getModelBlock(clip, key, fallbackLabel) {
  const model = clip?.modelResults?.[key] ?? {};
  return {
    label: fallbackText(model.label, fallbackLabel),
    answer: safeString(model.answer),
    reasoning: safeString(model.reasoning)
  };
}

function getGroundTruth(clip) {
  const directTruth = safeString(clip.ground_truth);
  if (hasText(directTruth)) {
    return directTruth.trim();
  }

  const answer = safeString(clip.correctAnswer).trim().toLowerCase();
  if (!answer) {
    return GROUND_TRUTH_FALLBACK;
  }

  const options = getOptions(clip);
  const optionText = answer === 'a' ? options.a : answer === 'b' ? options.b : '';
  if (hasText(optionText)) {
    return `${answer.toUpperCase()}: ${optionText.trim()}`;
  }
  return answer.toUpperCase();
}

function getModelResultHtml(cardClass, icon, heading, modelLabel, answer, reasoning) {
  const finalAnswer = fallbackText(answer, MODEL_RESULT_FALLBACK);
  const finalReasoning = safeString(reasoning).trim();
  const reasoningHtml = hasText(finalReasoning)
    ? `<p class="result-reasoning">${escapeHtml(finalReasoning)}</p>`
    : '';

  return `
    <div class="result-card ${cardClass}">
      <div class="result-card-header">
        <div class="result-icon">${icon}</div>
        <h4>${escapeHtml(heading)}</h4>
        <span class="model-name" style="color:var(--text-secondary);background:var(--bg-surface);border:1px solid var(--border)">${escapeHtml(modelLabel)}</span>
      </div>
      <div class="result-card-body">
        <p class="result-prediction">${escapeHtml(finalAnswer)}</p>
        ${reasoningHtml}
      </div>
    </div>
  `;
}

function getBenchmarkContext(clip) {
  const source = safeString(clip?.textInputForLLM);
  if (!hasText(source)) {
    return null;
  }

  const sceneMatch = source.match(/What's inside the apartment:\s*([\s\S]*?)\s*Actions taken by/i);
  const actionsMatch = source.match(/Actions taken by\s*([^:]+):\s*([\s\S]*?)\s*Question:/i);

  const actor = compactText(actionsMatch?.[1] || 'the person');
  const sceneFull = compactText(sceneMatch?.[1] || '');
  const actionsFull = compactText(actionsMatch?.[2] || '');
  const sceneShort = truncateText(sceneFull, 360);
  const actionsShort = truncateText(actionsFull, 260);

  if (!sceneFull && !actionsFull) {
    return null;
  }

  return {
    actor,
    sceneShort,
    actionsShort,
    sceneFull,
    actionsFull
  };
}

// ─────────────────────────────────────────
//  Shared helpers
// ─────────────────────────────────────────
async function loadClips() {
  if (clipsCache) {
    return clipsCache;
  }

  const mmtomClips = window.mmtomClips;
  if (!Array.isArray(mmtomClips)) {
    throw new Error('mmtomClips is not a valid array');
  }

  clipsCache = mmtomClips;
  return clipsCache;
}

function renderQuestion(clip, onSubmitPrediction) {
  const questionSection = document.getElementById('question-section');
  if (!questionSection) {
    return { lock: () => {} };
  }

  const question = fallbackText(clip.question, QUESTION_FALLBACK);
  const options = getOptions(clip);
  const hasA = hasText(options.a);
  const hasB = hasText(options.b);
  const hasOptions = hasA || hasB;
  const benchmarkContext = getBenchmarkContext(clip);
  const contextHtml = benchmarkContext
    ? `
      <div class="context-card">
        <h4>Benchmark Context</h4>
        <p class="context-note">Use this context with the video before choosing A/B.</p>
        ${
          hasText(benchmarkContext.sceneShort)
            ? `<p class="context-line"><strong>Scene setup:</strong> ${escapeHtml(benchmarkContext.sceneShort)}</p>`
            : ''
        }
        ${
          hasText(benchmarkContext.actionsShort)
            ? `<p class="context-line"><strong>Observed actions (${escapeHtml(benchmarkContext.actor)}):</strong> ${escapeHtml(benchmarkContext.actionsShort)}</p>`
            : ''
        }
        <details class="context-details">
          <summary>Show full benchmark context</summary>
          ${
            hasText(benchmarkContext.sceneFull)
              ? `<p class="context-line"><strong>Scene setup:</strong> ${escapeHtml(benchmarkContext.sceneFull)}</p>`
              : ''
          }
          ${
            hasText(benchmarkContext.actionsFull)
              ? `<p class="context-line"><strong>Observed actions (${escapeHtml(benchmarkContext.actor)}):</strong> ${escapeHtml(benchmarkContext.actionsFull)}</p>`
              : ''
          }
        </details>
      </div>
    `
    : `
      <div class="context-card">
        <h4>Benchmark Context</h4>
        <p class="context-note">${escapeHtml(BENCHMARK_CONTEXT_FALLBACK)}</p>
      </div>
    `;

  questionSection.innerHTML = `
    <h3>MMToM-QA Question</h3>
    ${contextHtml}
    <p class="question-text">${escapeHtml(question)}</p>
    ${
      hasOptions
        ? `
      <div class="mcq-form" data-mode="choice">
        <div class="option-grid mcq-option-grid" role="radiogroup" aria-label="MMToM answer options">
          ${
            hasA
              ? `
            <label class="mcq-option-row" data-option="a">
              <input class="mcq-radio" type="radio" name="prediction-choice" value="a" />
              <span class="mcq-option-copy"><strong>A.</strong> ${escapeHtml(options.a)}</span>
            </label>
          `
              : ''
          }
          ${
            hasB
              ? `
            <label class="mcq-option-row" data-option="b">
              <input class="mcq-radio" type="radio" name="prediction-choice" value="b" />
              <span class="mcq-option-copy"><strong>B.</strong> ${escapeHtml(options.b)}</span>
            </label>
          `
              : ''
          }
        </div>
        <button class="reveal-btn mcq-submit-btn" type="button" data-role="question-submit" disabled>Submit</button>
      </div>
    `
        : `
      <div class="mcq-form" data-mode="fallback">
        <p class="placeholder-text">${escapeHtml(OPTIONS_FALLBACK)}</p>
        <p class="prediction-label">Enter your prediction manually for this test.</p>
        <textarea
          class="prediction-textarea mcq-fallback-textarea"
          data-role="fallback-prediction"
          placeholder="Type your answer or prediction…"
          aria-label="Your prediction"
        ></textarea>
        <button class="reveal-btn mcq-submit-btn" type="button" data-role="question-submit" disabled>Submit</button>
      </div>
    `
    }
  `;

  const submitBtn = questionSection.querySelector('[data-role="question-submit"]');
  const fallbackInput = questionSection.querySelector('[data-role="fallback-prediction"]');
  const radioNodes = Array.from(questionSection.querySelectorAll('.mcq-radio'));
  const optionRows = Array.from(questionSection.querySelectorAll('.mcq-option-row'));
  const setLocked = () => {
    if (submitBtn) {
      submitBtn.disabled = true;
    }
    if (fallbackInput instanceof HTMLTextAreaElement) {
      fallbackInput.disabled = true;
    }
    radioNodes.forEach((radio) => {
      radio.disabled = true;
    });
  };

  if (!submitBtn) {
    return { lock: setLocked };
  }

  const updateChoiceStyles = () => {
    optionRows.forEach((row) => {
      const option = row.getAttribute('data-option') || '';
      const isChecked = Boolean(questionSection.querySelector(`.mcq-radio[value="${option}"]:checked`));
      row.classList.toggle('is-selected', isChecked);
    });
  };

  const updateSubmitState = () => {
    if (fallbackInput instanceof HTMLTextAreaElement) {
      submitBtn.disabled = fallbackInput.value.trim().length === 0;
      return;
    }
    const hasSelection = radioNodes.some((radio) => radio.checked);
    submitBtn.disabled = !hasSelection;
    updateChoiceStyles();
  };

  radioNodes.forEach((radio) => {
    radio.addEventListener('change', updateSubmitState);
  });
  if (fallbackInput instanceof HTMLTextAreaElement) {
    fallbackInput.addEventListener('input', updateSubmitState);
  }
  updateSubmitState();

  submitBtn.addEventListener('click', () => {
    if (submitBtn.disabled) {
      return;
    }

    let predictionText = '';
    if (fallbackInput instanceof HTMLTextAreaElement) {
      predictionText = fallbackInput.value.trim();
    } else {
      const selected = questionSection.querySelector('.mcq-radio:checked');
      if (!(selected instanceof HTMLInputElement)) {
        return;
      }
      const option = selected.value.toLowerCase();
      const optionText = option === 'a' ? options.a : options.b;
      predictionText = `${option.toUpperCase()} - ${optionText}`;
    }

    if (!hasText(predictionText)) {
      return;
    }

    onSubmitPrediction?.(predictionText, { lock: setLocked });
  });

  return { lock: setLocked };
}

function renderResults(clip, userPrediction) {
  const panel = document.getElementById('results-panel');
  if (!panel) {
    return;
  }

  const llm = getModelBlock(clip, 'llm', 'Text-only LLM');
  const vlm = getModelBlock(clip, 'vlm', 'Video-language model');
  const world = getModelBlock(clip, 'worldModel', 'World Model');
  const llmModelName = 'Claude 4.5 Haiku';
  const vlmModelName = 'Amazon Nova Pro';
  const worldModelName = 'VJEPA2';
  const analysis = fallbackText(clip.analysis, ANALYSIS_FALLBACK);
  const llmInput = fallbackText(clip.textInputForLLM, LLM_INPUT_FALLBACK);
  const userPredictionCard = hasText(userPrediction)
    ? getModelResultHtml('card-user', '🧠', 'Your Prediction', 'You', userPrediction, '')
    : '';

  panel.innerHTML = `
    <div class="analysis-card llm-input-card">
      <h4>Text input given to the LLM</h4>
      <p>${escapeHtml(llmInput)}</p>
    </div>
    ${userPredictionCard}
    ${getModelResultHtml('card-truth', '✅', 'Ground Truth', 'MMToM-QA Official Answer', getGroundTruth(clip), '')}
    ${getModelResultHtml('card-llm', '🤖', 'LLM', llmModelName, llm.answer, llm.reasoning)}
    ${getModelResultHtml('card-vision', '👁️', 'Vision Model', vlmModelName, vlm.answer, vlm.reasoning)}
    ${getModelResultHtml('card-world', '🌐', 'World Model', worldModelName, world.answer, world.reasoning)}
    <div class="analysis-card">
      <h4>🔬 Analysis & Comparison</h4>
      <p>${escapeHtml(analysis)}</p>
    </div>
  `;

  panel.classList.add('visible');
}

function renderPageError(message) {
  document.body.innerHTML = `<p style="padding:40px;color:var(--red);">Error: ${escapeHtml(message)}</p>`;
}

function stableHash(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function getDeterministicMixedClips(clips) {
  const seed = 'mmtom-demo-mix-v1';
  return [...clips].sort((a, b) => {
    const keyA = stableHash(
      `${seed}|${safeString(a.id)}|${safeString(a.expectedTilt)}|${String(a.episode ?? '')}|${safeString(a.title)}`
    );
    const keyB = stableHash(
      `${seed}|${safeString(b.id)}|${safeString(b.expectedTilt)}|${String(b.episode ?? '')}|${safeString(b.title)}`
    );

    if (keyA !== keyB) {
      return keyA - keyB;
    }

    return safeString(a.id).localeCompare(safeString(b.id));
  });
}

// ─────────────────────────────────────────
//  INDEX PAGE (clip picker)
// ─────────────────────────────────────────
async function initIndex() {
  const grid = document.getElementById('clips-grid');
  if (!grid) {
    return;
  }

  try {
    const clips = await loadClips();
    const orderedClips = getDeterministicMixedClips(clips);

    grid.innerHTML = '';

    orderedClips.forEach((clip) => {
      const llmLabel = 'Claude 4.5 Haiku';
      const vlmLabel = 'Amazon Nova Pro';
      const worldLabel = 'VJEPA2';

      const thumbHtml = hasText(clip.thumbnail)
        ? `
        <img
          class="clip-thumb-img"
          src="${escapeHtml(clip.thumbnail)}"
          alt="${escapeHtml(clip.title)}"
          loading="lazy"
        />
      `
        : `<div class="clip-thumb-fallback">MMToM-QA ${escapeHtml(clip.id)}</div>`;

      const card = document.createElement('a');
      card.className = 'clip-card';
      card.href = `results.html?id=${encodeURIComponent(clip.id)}`;
      card.setAttribute('aria-label', `View clip: ${clip.title}`);

      card.innerHTML = `
        <div class="clip-thumb">
          ${thumbHtml}
          <div class="clip-thumb-overlay">
            <div class="play-icon">▶</div>
          </div>
        </div>
        <div class="clip-body">
          <h3>${escapeHtml(clip.title)}</h3>
          <p>${escapeHtml(fallbackText(clip.description, 'MMToM-QA Theory of Mind test case.'))}</p>
          <div class="clip-models">
            <span class="model-pill pill-llm">${escapeHtml(llmLabel)}</span>
            <span class="model-pill pill-vision">${escapeHtml(vlmLabel)}</span>
            <span class="model-pill pill-world">${escapeHtml(worldLabel)}</span>
          </div>
        </div>
        <span class="clip-arrow">↗</span>
      `;

      grid.appendChild(card);
    });
  } catch (err) {
    grid.innerHTML = `<p style="color:var(--red);padding:24px;">Error loading clips: ${escapeHtml(err.message)}</p>`;
  }
}

// ─────────────────────────────────────────
//  RESULTS PAGE
// ─────────────────────────────────────────
async function initResults() {
  const params = new URLSearchParams(window.location.search);
  const clipId = params.get('id');
  if (!clipId) {
    window.location.href = './index.html';
    return;
  }

  let clip;
  try {
    const clips = await loadClips();
    clip = clips.find((candidate) => candidate.id === clipId);
    if (!clip) {
      throw new Error('Clip not found');
    }
  } catch (err) {
    renderPageError(err.message);
    return;
  }

  const clipTitle = document.getElementById('clip-title');
  const clipDescription = document.getElementById('clip-description');
  const videoContainer = document.getElementById('video-container');
  const video = document.getElementById('clip-video');
  const overlay = document.getElementById('pause-overlay');
  const questionSection = document.getElementById('question-section');
  let questionControls = null;

  if (!clipTitle || !clipDescription || !videoContainer || !video || !questionSection) {
    renderPageError('Required page elements are missing');
    return;
  }

  clipTitle.textContent = fallbackText(clip.title, 'MMToM-QA Clip');
  clipDescription.textContent = fallbackText(
    clip.description,
    "This demo compares how humans and AI models reason about people's beliefs, goals, and intentions from short video scenes."
  );
  document.title = `${clip.title} — WorldModelDemo`;

  let hasSubmittedPrediction = false;
  let hasResultsRevealed = false;
  let hasQuestionUiRevealed = false;
  let submittedPrediction = '';

  const revealResultsNow = (predictionText = submittedPrediction) => {
    if (hasResultsRevealed) {
      return;
    }

    hasResultsRevealed = true;
    renderResults(clip, predictionText);
    questionControls?.lock?.();

    const resultsPanel = document.getElementById('results-panel');
    resultsPanel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showQuestionUi = () => {
    if (hasQuestionUiRevealed || hasResultsRevealed) {
      return;
    }

    hasQuestionUiRevealed = true;
    questionSection.hidden = false;
    questionControls = renderQuestion(clip, (predictionText, controls) => {
      if (hasSubmittedPrediction || !hasText(predictionText)) {
        return;
      }

      hasSubmittedPrediction = true;
      submittedPrediction = predictionText;
      controls?.lock?.();
      revealResultsNow(submittedPrediction);
    });
  };

  // Keep the user focused on watching the clip first.
  questionSection.hidden = false;
  questionSection.innerHTML = `
    <h3>Watch Full Clip</h3>
    <p class="placeholder-text">${escapeHtml(PRE_PAUSE_INSTRUCTION)}</p>
    <button class="reveal-btn" type="button" data-role="early-reveal">Reveal Results Now</button>
  `;
  const earlyRevealButton = questionSection.querySelector('[data-role="early-reveal"]');
  earlyRevealButton?.addEventListener('click', () => {
    video.pause();
    revealResultsNow();
  });

  video.src = getVideoSrc(clip);

  overlay?.classList.remove('visible');
  video.addEventListener('ended', () => {
    if (hasResultsRevealed) {
      return;
    }
    showQuestionUi();
    questionSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// ─────────────────────────────────────────
//  Route
// ─────────────────────────────────────────
(function () {
  const page = document.body.dataset.page;
  if (page === 'index') {
    void initIndex();
  }
  if (page === 'results') {
    void initResults();
  }
})();
