// adaptive2.js — 2級用適応型学習エンジン
'use strict';

const adaptive2 = {
  selectNext(pool, excludeIds = [], mode = 'adaptive') {
    const available = pool.filter(q => !excludeIds.includes(q.id));
    if (available.length === 0) return null;

    if (mode === 'random') {
      return available[Math.floor(Math.random() * available.length)];
    }

    const scored = available.map(q => {
      const rec = storage2.getQRecord(q.id);
      let priority = 50;
      if (rec.weak_flag) priority += 40;
      if (rec.attempts === 0) priority += 20;
      if (rec.mastery <= 2) priority += 30;
      else if (rec.mastery <= 5) priority += 10;
      else if (rec.mastered) priority -= 30;
      if (rec.last_attempt) {
        const days = Math.floor((Date.now() - new Date(rec.last_attempt)) / 86400000);
        priority += Math.min(days * 2, 20);
      }
      priority += Math.random() * 10;
      return { q, priority };
    });

    scored.sort((a, b) => b.priority - a.priority);
    const top = scored.slice(0, Math.min(3, scored.length));
    return top[Math.floor(Math.random() * top.length)].q;
  },

  getSimilar(pool, currentQ, excludeIds = []) {
    const candidates = pool.filter(q =>
      q.id !== currentQ.id &&
      !excludeIds.includes(q.id) &&
      (q.subcategory === currentQ.subcategory || q.category === currentQ.category)
    );
    if (candidates.length === 0) return this.selectNext(pool, excludeIds);
    const rec = (q) => storage2.getQRecord(q.id);
    candidates.sort((a, b) => (rec(a).mastery || 0) - (rec(b).mastery || 0));
    return candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];
  },

  // 2級: 60問、基礎20%・日本25%・自然10%・文化35%・その他10%
  buildMockSet(pool) {
    const ratios = { basics: 0.20, japan: 0.25, nature: 0.10, culture: 0.35, other: 0.10 };
    const total = 60;
    const result = [];
    for (const [cat, ratio] of Object.entries(ratios)) {
      const n = Math.round(total * ratio);
      const catPool = pool.filter(q => q.category === cat);
      const shuffled = [...catPool].sort(() => Math.random() - 0.5);
      result.push(...shuffled.slice(0, Math.min(n, shuffled.length)));
    }
    if (result.length < total) {
      const usedIds = new Set(result.map(q => q.id));
      const rest = pool.filter(q => !usedIds.has(q.id)).sort(() => Math.random() - 0.5);
      result.push(...rest.slice(0, total - result.length));
    }
    return result.slice(0, total).sort(() => Math.random() - 0.5);
  },

  judge(score) {
    if (score >= 70) return { grade: '◎', label: '合格確実圏', color: 'green',  bg: '#d1fae5', border: '#059669' };
    if (score >= 60) return { grade: '○', label: '合格圏内',   color: 'blue',   bg: '#dbeafe', border: '#2563eb' };
    if (score >= 50) return { grade: '△', label: 'ボーダー',   color: 'yellow', bg: '#fef9c3', border: '#ca8a04' };
    return           { grade: '✕', label: '要強化',     color: 'red',    bg: '#fee2e2', border: '#dc2626' };
  },

  calcCategoryScores(answers, questions) {
    const cats = { basics:{t:0,c:0}, japan:{t:0,c:0}, nature:{t:0,c:0}, culture:{t:0,c:0}, other:{t:0,c:0} };
    answers.forEach((ans, i) => {
      const q = questions[i];
      if (!q) return;
      if (!cats[q.category]) cats[q.category] = { t:0, c:0 };
      cats[q.category].t++;
      if (ans === q.correct) cats[q.category].c++;
    });
    const result = {};
    for (const [k, v] of Object.entries(cats)) {
      result[k] = v.t > 0 ? Math.round(v.c / v.t * 100) : 0;
    }
    return result;
  }
};
