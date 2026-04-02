// app2.js — 2級用グローバル初期化・共通ユーティリティ
'use strict';

let QUESTIONS2 = [];

async function loadData2() {
  if (typeof QUESTIONS_DATA2 !== 'undefined' && QUESTIONS_DATA2.length > 0) {
    QUESTIONS2 = QUESTIONS_DATA2;
  }
  if (QUESTIONS2.length === 0) {
    try {
      const res = await fetch('data/questions_grade2.json');
      QUESTIONS2 = await res.json();
    } catch(e) {
      console.warn('2級問題データ読み込み失敗。data/questions_data2.js を確認してください。', e);
    }
  }
}

const CATEGORIES2 = {
  basics:  { label: '基礎知識',       color: '#2E75B6', icon: '📚' },
  japan:   { label: '日本の世界遺産', color: '#E74C3C', icon: '🏯' },
  nature:  { label: '世界の自然遺産', color: '#27AE60', icon: '🌿' },
  culture: { label: '世界の文化遺産', color: '#F39C12', icon: '🏛️' },
  other:   { label: 'その他',         color: '#8E44AD', icon: '🌐' }
};

const CAT_NAMES2 = {
  basics:  '基礎知識',
  japan:   '日本の世界遺産',
  nature:  '世界の自然遺産',
  culture: '世界の文化遺産',
  other:   'その他'
};

function qs2(key) {
  return new URLSearchParams(location.search).get(key);
}

function formatTime2(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function escHtml2(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function setActiveNav2() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('nav-active');
  });
}

function navHTML2() {
  return `
  <nav style="background:#7c3aed; padding:0.6rem 1rem; position:sticky; top:0; z-index:100; box-shadow:0 2px 6px rgba(0,0,0,0.3);">
    <div style="max-width:900px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.4rem;">
      <div style="display:flex;align-items:center;gap:0.8rem;">
        <a href="index.html" style="color:#FFD700; font-weight:bold; font-size:1.1rem; text-decoration:none;">🏛️ せかけん道場</a>
        <span style="background:#fef3c7;color:#7c3aed;font-size:0.75rem;font-weight:bold;padding:0.15rem 0.5rem;border-radius:999px;">2級</span>
      </div>
      <div style="display:flex; gap:0.3rem; flex-wrap:wrap;">
        <a href="index.html" class="nav-link" style="color:#e9d5ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">📊 ダッシュボード</a>
        <a href="quiz2.html" class="nav-link" style="color:#e9d5ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">📝 問題演習</a>
        <a href="mock2.html" class="nav-link" style="color:#e9d5ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">⏱️ 模擬テスト</a>
        <a href="weakness2.html" class="nav-link" style="color:#e9d5ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">🎯 苦手克服</a>
      </div>
    </div>
  </nav>`;
}

function injectNav2(id = 'nav-placeholder') {
  const el = document.getElementById(id);
  if (el) { el.innerHTML = navHTML2(); setActiveNav2(); }
}

const navStyle2 = document.createElement('style');
navStyle2.textContent = `.nav-active { background: rgba(255,255,255,0.2) !important; color:#fff !important; font-weight:bold; }
.nav-link:hover { background: rgba(255,255,255,0.15) !important; }`;
document.head.appendChild(navStyle2);
