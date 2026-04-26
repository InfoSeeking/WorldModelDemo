/* ── WorldModelDemo — app.js ── */
const DATA_PATH = './data/clips.json';

// ─────────────────────────────────────────
//  Shared helpers
// ─────────────────────────────────────────
async function loadClips() {
  const res = await fetch(DATA_PATH);
  if (!res.ok) throw new Error('Failed to load clips.json');
  return res.json();
}

// ─────────────────────────────────────────
//  INDEX PAGE  (clip picker)
// ─────────────────────────────────────────
async function initIndex() {
  const grid = document.getElementById('clips-grid');
  const countEl = document.getElementById('clip-count');
  if (!grid) return;

  try {
    const clips = await loadClips();
    if (countEl) countEl.textContent = clips.length;

    grid.innerHTML = '';
    clips.forEach(clip => {
      const card = document.createElement('a');
      card.className = 'clip-card';
      card.href = `results.html?id=${clip.id}`;
      card.setAttribute('aria-label', `View clip: ${clip.title}`);

      card.innerHTML = `
        <div class="clip-thumb">
          <img
            class="clip-thumb-img"
            src="${clip.thumbnail}"
            alt="${clip.title}"
            loading="lazy"
          />
          <div class="clip-thumb-overlay">
            <div class="play-icon">▶</div>
          </div>
        </div>
        <div class="clip-body">
          <h3>${clip.title}</h3>
          <p>${clip.description}</p>
          <div class="clip-models">
            <span class="model-pill pill-llm">${clip.outputs.llm.model}</span>
            <span class="model-pill pill-vision">${clip.outputs.vision.model}</span>
            <span class="model-pill pill-world">${clip.outputs.world_model.model}</span>
          </div>
        </div>
        <span class="clip-arrow">↗</span>
      `;

      grid.appendChild(card);
    });
  } catch (err) {
    grid.innerHTML = `<p style="color:var(--red);padding:24px;">Error loading clips: ${err.message}</p>`;
  }
}

// ─────────────────────────────────────────
//  RESULTS PAGE
// ─────────────────────────────────────────
async function initResults() {
  const params = new URLSearchParams(window.location.search);
  const clipId = params.get('id');
  if (!clipId) { window.location.href = './index.html'; return; }

  let clips, clip;
  try {
    clips = await loadClips();
    clip = clips.find(c => c.id === clipId);
    if (!clip) throw new Error('Clip not found');
  } catch (err) {
    document.body.innerHTML = `<p style="padding:40px;color:var(--red);">Error: ${err.message}</p>`;
    return;
  }

  // ── Populate meta ──
  document.getElementById('clip-title').textContent = clip.title;
  document.getElementById('clip-description').textContent = clip.description;
  document.title = `${clip.title} — WorldModelDemo`;

  // ── Video / pause logic ──
  const video = document.getElementById('clip-video');
  const overlay = document.getElementById('pause-overlay');
  const revealBtn = document.getElementById('reveal-btn');
  const predArea = document.getElementById('user-prediction');
  let paused = false;
  const updateRevealBtnState = () => {
    if (!revealBtn) return;
    const hasPrediction = !!predArea?.value.trim();
    revealBtn.disabled = !(paused && hasPrediction);
  };

  updateRevealBtnState();

  if (video && clip.video) {
    video.src = clip.video;

    video.addEventListener('timeupdate', () => {
      if (!paused && video.currentTime >= clip.pause_at) {
        video.pause();
        paused = true;
        overlay?.classList.add('visible');
        updateRevealBtnState();
      }
    });
  }

  predArea?.addEventListener('input', updateRevealBtnState);


  // ── Reveal results ──
  revealBtn?.addEventListener('click', () => {
    const userText = predArea?.value.trim() || '(no prediction entered)';
    renderResults(clip, userText);
    revealBtn.style.display = 'none';
  });
}

function renderResults(clip, userPrediction) {
  const panel = document.getElementById('results-panel');
  if (!panel) return;

  panel.innerHTML = `
    ${resultCard('card-user', '🧠', 'Your Prediction', 'You', userPrediction, '', null)}
    ${resultCard('card-truth', '✅', 'Ground Truth', 'Actual Outcome', clip.ground_truth, '', null)}
    ${resultCard(
    'card-llm', '🤖', 'LLM Output',
    clip.outputs.llm.model,
    clip.outputs.llm.prediction
  )}
    ${resultCard(
    'card-vision', '👁️', 'Vision Model Output',
    clip.outputs.vision.model,
    clip.outputs.vision.prediction
  )}
    ${resultCard(
    'card-world', '🌐', 'World Model Result',
    clip.outputs.world_model.model,
    clip.outputs.world_model.prediction
  )}
    <div class="analysis-card">
      <h4>🔬 Analysis & Comparison</h4>
      <p>${clip.analysis}</p>
    </div>
  `;

  panel.classList.add('visible');
}

function resultCard(cardClass, icon, label, modelName, prediction) {
  return `
    <div class="result-card ${cardClass}">
      <div class="result-card-header">
        <div class="result-icon">${icon}</div>
        <h4>${label}</h4>
        <span class="model-name" style="color:var(--text-secondary);background:var(--bg-surface);border:1px solid var(--border)">${modelName}</span>
      </div>
      <div class="result-card-body">
        <p class="result-prediction">${prediction}</p>
      </div>
    </div>`;
}

// ─────────────────────────────────────────
//  Route
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (page === 'index') initIndex();
  if (page === 'results') initResults();
});
