// storage.js — localStorage管理モジュール
'use strict';

const STORAGE_KEY = 'sekaken_learning_data';

function initData() {
  return {
    user_id: 'richie', grade: 3,
    last_study: null, total_study_minutes: 0,
    study_start_date: new Date().toISOString(),
    sessions: [],
    question_records: {},
    category_stats: {
      basics:  { total: 0, correct: 0 },
      japan:   { total: 0, correct: 0 },
      nature:  { total: 0, correct: 0 },
      culture: { total: 0, correct: 0 }
    },
    mock_test_results: [],
    current_session_start: null
  };
}

const storage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return initData();
      const d = JSON.parse(raw);
      // 旧データとの互換性確保
      if (!d.category_stats) d.category_stats = initData().category_stats;
      if (!d.sessions) d.sessions = [];
      if (!d.mock_test_results) d.mock_test_results = [];
      return d;
    } catch(e) { return initData(); }
  },
  save(data) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
    catch(e) { console.error('保存エラー:', e); }
  },

  // ── 問題記録 ──
  getQRecord(id) {
    const d = this.load();
    return d.question_records[id] || {
      attempts: 0, correct: 0, mastery: 0,
      weak_flag: false, mastered: false,
      last_attempt: null, wrong_count: 0
    };
  },
  saveQRecord(id, rec) {
    const d = this.load();
    d.question_records[id] = rec;
    this.save(d);
  },
  updateAfterAnswer(id, category, isCorrect) {
    const d = this.load();
    // 問題記録更新
    const rec = d.question_records[id] || {
      attempts: 0, correct: 0, mastery: 0,
      weak_flag: false, mastered: false,
      last_attempt: null, wrong_count: 0
    };
    rec.attempts++;
    rec.last_attempt = new Date().toISOString().slice(0, 10);
    if (isCorrect) {
      rec.correct++;
      rec.mastery = Math.min(10, (rec.mastery || 0) + 2);
      if (rec.mastery >= 8) rec.mastered = true;
      if (rec.wrong_count >= 1) rec.wrong_count = Math.max(0, rec.wrong_count - 1);
    } else {
      rec.mastery = Math.max(0, (rec.mastery || 0) - 3);
      rec.wrong_count = (rec.wrong_count || 0) + 1;
      rec.mastered = false;
      if (rec.wrong_count >= 2) rec.weak_flag = true;
    }
    d.question_records[id] = rec;
    // カテゴリ統計更新
    if (!d.category_stats[category]) d.category_stats[category] = { total: 0, correct: 0 };
    d.category_stats[category].total++;
    if (isCorrect) d.category_stats[category].correct++;
    this.save(d);
  },

  // ── セッション ──
  startSession() {
    const d = this.load();
    d.current_session_start = Date.now();
    this.save(d);
  },
  endSession(qCount, correctCount) {
    const d = this.load();
    const mins = d.current_session_start
      ? Math.round((Date.now() - d.current_session_start) / 60000) : 0;
    d.sessions.push({
      date: new Date().toISOString().slice(0, 10),
      duration_minutes: Math.max(1, mins),
      questions_answered: qCount,
      correct: correctCount
    });
    d.total_study_minutes = (d.total_study_minutes || 0) + Math.max(1, mins);
    d.last_study = new Date().toISOString().slice(0, 10);
    d.current_session_start = null;
    this.save(d);
  },
  addMockResult(result) {
    const d = this.load();
    d.mock_test_results.push(result);
    d.last_study = new Date().toISOString().slice(0, 10);
    this.save(d);
  },

  // ── 集計ヘルパー ──
  getCategoryAccuracy() {
    const d = this.load();
    const r = {};
    for (const [cat, s] of Object.entries(d.category_stats)) {
      r[cat] = s.total > 0 ? Math.round(s.correct / s.total * 100) : 0;
    }
    return r;
  },
  getOverallAccuracy() {
    const d = this.load();
    let t = 0, c = 0;
    for (const s of Object.values(d.category_stats)) { t += s.total; c += s.correct; }
    return t > 0 ? Math.round(c / t * 100) : 0;
  },
  getTotalQuestions() {
    const d = this.load();
    let t = 0;
    for (const s of Object.values(d.category_stats)) t += s.total;
    return t;
  },
  getWeakQuestions(limit = 10) {
    const d = this.load();
    return Object.entries(d.question_records)
      .filter(([, r]) => r.weak_flag || r.mastery < 3)
      .sort((a, b) => (a[1].mastery || 0) - (b[1].mastery || 0))
      .slice(0, limit).map(([id]) => id);
  },
  getLastMockScore() {
    const d = this.load();
    const r = d.mock_test_results;
    return r.length > 0 ? r[r.length - 1] : null;
  },
  getMockHistory(n = 10) {
    const d = this.load();
    return d.mock_test_results.slice(-n);
  },
  getDailyStudy(days = 30) {
    const d = this.load();
    const map = {};
    d.sessions.forEach(s => {
      map[s.date] = (map[s.date] || 0) + (s.questions_answered || 0);
    });
    return map;
  },
  getMasteredCount() {
    const d = this.load();
    return Object.values(d.question_records).filter(r => r.mastered).length;
  },
  getWeakCount() {
    const d = this.load();
    return Object.values(d.question_records).filter(r => r.weak_flag).length;
  },

  // ── ユーティリティ ──
  exportJSON() {
    const blob = new Blob([localStorage.getItem(STORAGE_KEY) || '{}'],
      { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `sekaken_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
  },
  reset() {
    if (confirm('学習データをすべてリセットしますか？\nこの操作は取り消せません。')) {
      localStorage.removeItem(STORAGE_KEY);
      location.href = 'index.html';
    }
  }
};
