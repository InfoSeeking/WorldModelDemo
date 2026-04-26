/* ── WorldModelDemo — app.js ── */
const DATA_PATH = './data/clips.json';
const USER_PREDICTION_FALLBACK = '(no prediction entered)';

let clipsCache = null;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ─────────────────────────────────────────
//  Shared helpers
// ─────────────────────────────────────────
async function loadClips() {
  if (clipsCache) {
    return clipsCache;
  }

  const res = await fetch(DATA_PATH);
  if (!res.ok) {
    throw new Error('Failed to load clips.json');
  }

  clipsCache = await res.json();
  return clipsCache;
}

// ─────────────────────────────────────────
//  INDEX PAGE (clip picker)
// ─────────────────────────────────────────
async function initIndex() {
  const grid = document.getElementById('clips-grid');
  const countEl = document.getElementById('clip-count');
  if (!grid) {
    return;
  }

  try {
    const clips = await loadClips();
    if (countEl) {
      countEl.textContent = clips.length;
    }

    grid.innerHTML = '';
    clips.forEach((clip) => {
      const card = document.createElement('a');
      card.className = 'clip-card';
      card.href = `results.html?id=${encodeURIComponent(clip.id)}`;
      card.setAttribute('aria-label', `View clip: ${clip.title}`);

      card.innerHTML = `
        <div class="clip-thumb">
          <img
            class="clip-thumb-img"
            src="${escapeHtml(clip.thumbnail)}"
            alt="${escapeHtml(clip.title)}"
            loading="lazy"
          />
          <div class="clip-thumb-overlay">
            <div class="play-icon">▶</div>
          </div>
        </div>
        <div class="clip-body">
          <h3>${escapeHtml(clip.title)}</h3>
          <p>${escapeHtml(clip.description)}</p>
          <div class="clip-models">
            <span class="model-pill pill-llm">${escapeHtml(clip.outputs.llm.model)}</span>
            <span class="model-pill pill-vision">${escapeHtml(clip.outputs.vision.model)}</span>
            <span class="model-pill pill-world">${escapeHtml(clip.outputs.world_model.model)}</span>
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

function resultCard(cardClass, icon, label, modelName, prediction) {
  return `
    <div class="result-card ${cardClass}">
      <div class="result-card-header">
        <div class="result-icon">${icon}</div>
        <h4>${escapeHtml(label)}</h4>
        <span class="model-name" style="color:var(--text-secondary);background:var(--bg-surface);border:1px solid var(--border)">${escapeHtml(modelName)}</span>
      </div>
      <div class="result-card-body">
        <p class="result-prediction">${escapeHtml(prediction)}</p>
      </div>
    </div>`;
}

function renderResults(clip, userPrediction) {
  const panel = document.getElementById('results-panel');
  if (!panel) {
    return;
  }

  panel.innerHTML = `
    ${resultCard('card-user', '🧠', 'Your Prediction', 'You', userPrediction || USER_PREDICTION_FALLBACK)}
    ${resultCard('card-truth', '✅', 'Ground Truth', 'Actual Outcome', clip.ground_truth)}
    ${resultCard('card-llm', '🤖', 'LLM Output', clip.outputs.llm.model, clip.outputs.llm.prediction)}
    ${resultCard('card-vision', '👁️', 'Vision Model Output', clip.outputs.vision.model, clip.outputs.vision.prediction)}
    ${resultCard('card-world', '🌐', 'World Model Result', clip.outputs.world_model.model, clip.outputs.world_model.prediction)}
    <div class="analysis-card">
      <h4>🔬 Analysis & Comparison</h4>
      <p>${escapeHtml(clip.analysis)}</p>
    </div>
  `;

  panel.classList.add('visible');
}

function renderPageError(message) {
  document.body.innerHTML = `<p style="padding:40px;color:var(--red);">Error: ${escapeHtml(message)}</p>`;
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
  const video = document.getElementById('clip-video');
  const overlay = document.getElementById('pause-overlay');
  const revealBtn = document.getElementById('reveal-btn');
  const predArea = document.getElementById('user-prediction');

  if (!clipTitle || !clipDescription || !video || !revealBtn || !predArea) {
    renderPageError('Required page elements are missing');
    return;
  }

  clipTitle.textContent = clip.title;
  clipDescription.textContent = clip.description;
  document.title = `${clip.title} — WorldModelDemo`;

  let hasPausedAtGate = false;
  let hasSubmittedPrediction = false;
  let hasResultsRevealed = false;
  let submittedPrediction = '';

  const updateRevealBtnState = () => {
    const hasPrediction = predArea.value.trim().length > 0;
    revealBtn.disabled = hasSubmittedPrediction || !(hasPausedAtGate && hasPrediction);
  };

  const revealAfterPlayback = () => {
    if (!hasSubmittedPrediction || hasResultsRevealed) {
      return;
    }

    hasResultsRevealed = true;
    renderResults(clip, submittedPrediction);
    revealBtn.style.display = 'none';

    const resultsPanel = document.getElementById('results-panel');
    resultsPanel?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  video.src = clip.video;

  // Pause exactly once when the clip reaches the prediction gate.
  video.addEventListener('timeupdate', () => {
    if (hasPausedAtGate || typeof clip.pause_at !== 'number') {
      return;
    }

    if (video.currentTime >= clip.pause_at) {
      video.pause();
      hasPausedAtGate = true;
      overlay?.classList.add('visible');
      updateRevealBtnState();
    }
  });

  // Prevent skipping the prediction gate by pressing play before submission.
  video.addEventListener('play', () => {
    if (hasPausedAtGate && !hasSubmittedPrediction) {
      video.pause();
    }
  });

  video.addEventListener('ended', revealAfterPlayback);
  predArea.addEventListener('input', updateRevealBtnState);
  updateRevealBtnState();

  revealBtn.addEventListener('click', () => {
    const userText = predArea.value.trim();
    if (!hasPausedAtGate || userText.length === 0 || hasSubmittedPrediction) {
      updateRevealBtnState();
      return;
    }

    hasSubmittedPrediction = true;
    submittedPrediction = userText;

    predArea.disabled = true;
    revealBtn.disabled = true;
    overlay?.classList.remove('visible');

    void video.play();
  });
}

// ─────────────────────────────────────────
//  Route
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'index') {
    void initIndex();
  }
  if (page === 'results') {
    void initResults();
  }
});
