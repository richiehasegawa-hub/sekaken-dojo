// adaptive.js — 適応型学習エンジン
'use strict';

const adaptive = {
  // 問題プールから優先度付きで次の問題を選択
  selectNext(pool, excludeIds = [], mode = 'adaptive') {
    const available = pool.filter(q => !excludeIds.includes(q.id));
    if (available.length === 0) return null;

    if (mode === 'random') {
      return available[Math.floor(Math.random() * available.length)];
    }

    // 適応型：習熟度・苦手フラグに基づく優先度計算
    const scored = available.map(q => {
      const rec = storage.getQRecord(q.id);
      let priority = 50; // ベースライン

      if (rec.weak_flag) priority += 40;          // 苦手フラグ最優先
      if (rec.attempts === 0) priority += 20;      // 未出題を優先
      if (rec.mastery <= 2) priority += 30;        // 習熟度低い問題
      else if (rec.mastery <= 5) priority += 10;
      else if (rec.mastered) priority -= 30;       // 習熟済みは後回し

      // 最後に解いた日が古いほど優先
      if (rec.last_attempt) {
        const days = Math.floor(
          (Date.now() - new Date(rec.last_attempt)) / 86400000
        );
        priority += Math.min(days * 2, 20);
      }

      // ランダム性を少し加える（上位固定を避ける）
      priority += Math.random() * 10;
      return { q, priority };
    });

    scored.sort((a, b) => b.priority - a.priority);
    // 上位3問からランダム選択（完全決定論を避ける）
    const top = scored.slice(0, Math.min(3, scored.length));
    return top[Math.floor(Math.random() * top.length)].q;
  },

  // カテゴリ内の類似問題を取得
  getSimilar(pool, currentQ, excludeIds = []) {
    const candidates = pool.filter(q =>
      q.id !== currentQ.id &&
      !excludeIds.includes(q.id) &&
      (q.subcategory === currentQ.subcategory || q.category === currentQ.category)
    );
    if (candidates.length === 0) return this.selectNext(pool, excludeIds);
    // 未解答または習熟度低い順に返す
    const rec = (q) => storage.getQRecord(q.id);
    candidates.sort((a, b) => (rec(a).mastery || 0) - (rec(b).mastery || 0));
    return candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];
  },

  // 模擬テスト用：カテゴリ比率を守ったランダム50問
  buildMockSet(pool) {
    const ratios = { basics: 0.20, japan: 0.40, nature: 0.20, culture: 0.20 };
    const total = 50;
    const result = [];
    for (const [cat, ratio] of Object.entries(ratios)) {
      const n = Math.round(total * ratio);
      const catPool = pool.filter(q => q.category === cat);
      const shuffled = [...catPool].sort(() => Math.random() - 0.5);
      result.push(...shuffled.slice(0, Math.min(n, shuffled.length)));
    }
    // 足りない場合は残りから補充
    if (result.length < total) {
      const usedIds = new Set(result.map(q => q.id));
      const rest = pool.filter(q => !usedIds.has(q.id))
        .sort(() => Math.random() - 0.5);
      result.push(...rest.slice(0, total - result.length));
    }
    return result.slice(0, total).sort(() => Math.random() - 0.5);
  },

  // 合格可能性判定
  judge(score) {
    if (score >= 80) return { grade: '◎', label: '合格確実圏', color: 'green',  bg: '#d1fae5', border: '#059669' };
    if (score >= 70) return { grade: '○', label: '合格圏内',   color: 'blue',   bg: '#dbeafe', border: '#2563eb' };
    if (score >= 60) return { grade: '△', label: 'ボーダー',   color: 'yellow', bg: '#fef9c3', border: '#ca8a04' };
    return           { grade: '✕', label: '要強化',     color: 'red',    bg: '#fee2e2', border: '#dc2626' };
  },

  // カテゴリ別正答率を計算（模擬テスト答案から）
  calcCategoryScores(answers, questions) {
    const cats = { basics:{t:0,c:0}, japan:{t:0,c:0}, nature:{t:0,c:0}, culture:{t:0,c:0} };
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
