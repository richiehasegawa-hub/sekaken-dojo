// storage2.js — 2級学習データ管理モジュール
'use strict';

const STORAGE_KEY2 = 'sekaken_learning_data_grade2';

function initData2() {
  return {
    user_id: 'richie', grade: 2,
    last_study: null, total_study_minutes: 0,
    study_start_date: new Date().toISOString(),
    sessions: [],
    question_records: {},
    category_stats: {
      basics:  { total: 0, correct: 0 },
      japan:   { total: 0, correct: 0 },
      nature:  { total: 0, correct: 0 },
      culture: { total: 0, correct: 0 },
      other:   { total: 0, correct: 0 }
    },
    mock_test_results: [],
    current_session_start: null
  };
}

const storage2 = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY2);
      if (!raw) return initData2();
      const d = JSON.parse(raw);
      if (!d.category_stats) d.category_stats = initData2().category_stats;
      if (!d.category_stats.other) d.category_stats.other = { total: 0, correct: 0 };
      if (!d.sessions) d.sessions = [];
      if (!d.mock_test_results) d.mock_test_results = [];
      return d;
    } catch(e) { return initData2(); }
  },
  save(data) {
    try { localStorage.setItem(STORAGE_KEY2, JSON.stringify(data)); }
    catch(e) { console.error('保存エラー:', e); }
  },

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
    if (!d.category_stats[category]) d.category_stats[category] = { total: 0, correct: 0 };
    d.category_stats[category].total++;
    if (isCorrect) d.category_stats[category].correct++;
    this.save(d);
  },

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
  getMasteredCount() {
    const d = this.load();
    return Object.values(d.question_records).filter(r => r.mastered).length;
  },
  getWeakCount() {
    const d = this.load();
    return Object.values(d.question_records).filter(r => r.weak_flag).length;
  },
  exportJSON() {
    const blob = new Blob([localStorage.getItem(STORAGE_KEY2) || '{}'],
      { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `sekaken2_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
  },
  reset() {
    if (confirm('2級の学習データをすべてリセットしますか？\nこの操作は取り消せません。')) {
      localStorage.removeItem(STORAGE_KEY2);
      location.href = 'index.html';
    }
  }
};
