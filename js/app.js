// app.js — グローバル初期化・共通ユーティリティ
'use strict';

// ── グローバル問題データ ──
// data/questions_data.js と data/heritage_data.js が先に読み込まれている前提
// （file:// プロトコルでも fetch なしで動作）
let QUESTIONS = [];
let HERITAGE  = [];

async function loadData() {
  // スクリプトタグで読み込み済みのグローバル変数を使用
  if (typeof QUESTIONS_DATA !== 'undefined' && QUESTIONS_DATA.length > 0) {
    QUESTIONS = QUESTIONS_DATA;
  }
  if (typeof HERITAGE_DATA !== 'undefined' && HERITAGE_DATA.length > 0) {
    HERITAGE = HERITAGE_DATA;
  }
  // フォールバック: fetch（ローカルサーバー経由の場合）
  if (QUESTIONS.length === 0) {
    try {
      const [qRes, hRes] = await Promise.all([
        fetch('data/questions_grade3.json'),
        fetch('data/heritage_japan.json')
      ]);
      QUESTIONS = await qRes.json();
      HERITAGE  = await hRes.json();
    } catch(e) {
      console.warn('fetchも失敗。data/questions_data.js が読み込まれているか確認してください。', e);
    }
  }
}

// ── カテゴリ定義 ──
const CATEGORIES = {
  basics:  { label: '基礎知識',   color: '#2E75B6', icon: '📚' },
  japan:   { label: '日本の遺産', color: '#E74C3C', icon: '🏯' },
  nature:  { label: '自然遺産',   color: '#27AE60', icon: '🌿' },
  culture: { label: '文化遺産',   color: '#F39C12', icon: '🏛️' }
};

const CAT_NAMES = {
  basics: '基礎知識', japan: '日本の遺産',
  nature: '世界の自然遺産', culture: '世界の文化遺産'
};

// ── ユーティリティ ──
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function qs(key) {
  return new URLSearchParams(location.search).get(key);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── アクティブナビ ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  $$('.nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('nav-active');
    }
  });
}

// ── 共通ナビゲーションHTML ──
function navHTML() {
  return `
  <nav style="background:#1A5A8D; padding:0.6rem 1rem; position:sticky; top:0; z-index:100; box-shadow:0 2px 6px rgba(0,0,0,0.3);">
    <div style="max-width:900px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:0.4rem;">
      <a href="index.html" style="color:#FFD700; font-weight:bold; font-size:1.1rem; text-decoration:none;">🏛️ せかけん道場</a>
      <div style="display:flex; gap:0.3rem; flex-wrap:wrap;">
        <a href="index.html" class="nav-link" style="color:#cce4ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">📊 ダッシュボード</a>
        <a href="quiz.html" class="nav-link" style="color:#cce4ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">📝 問題演習</a>
        <a href="mock.html" class="nav-link" style="color:#cce4ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">⏱️ 模擬テスト</a>
        <a href="weakness.html" class="nav-link" style="color:#cce4ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">🎯 苦手克服</a>
        <a href="heritage.html" class="nav-link" style="color:#cce4ff; padding:0.3rem 0.6rem; border-radius:4px; font-size:0.85rem; text-decoration:none;">🗾 遺産一覧</a>
      </div>
    </div>
  </nav>`;
}

function injectNav(id = 'nav-placeholder') {
  const el = document.getElementById(id);
  if (el) { el.innerHTML = navHTML(); setActiveNav(); }
}

// スタイル: アクティブナビ
const navStyle = document.createElement('style');
navStyle.textContent = `.nav-active { background: rgba(255,255,255,0.2) !important; color:#fff !important; font-weight:bold; }
.nav-link:hover { background: rgba(255,255,255,0.15) !important; }`;
document.head.appendChild(navStyle);
