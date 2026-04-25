// adaptive2.js — 2級用適応型学習エンジン v2.0
// 改善点:
//   1. SM-2風の間隔反復アルゴリズム（習熟度に応じた指数的復習間隔）
//   2. 難易度適応（easy→medium→hard の段階的進行）
//   3. 難易度加重マスタリースコア（難問の正解は高く評価）
//   4. 模試の難易度バランス制御（実試験比率 + 弱点カテゴリ補正）
//   5. 弱点集中セット生成
//   6. 学習推薦・次の一手コメント生成
'use strict';

const adaptive2 = {

  // ─────────────────────────────────────────────
  // 1. 間隔反復: 習熟度→推奨復習間隔（日数）
  //    mastery 0-2: 1日, 3-4: 2日, 5-6: 4日, 7-8: 8日, 9-10: 16日
  // ─────────────────────────────────────────────
  _reviewInterval(mastery) {
    if (mastery <= 2) return 1;
    if (mastery <= 4) return 2;
    if (mastery <= 6) return 4;
    if (mastery <= 8) return 8;
    return 16;
  },

  // ─────────────────────────────────────────────
  // 2. 1問の優先度スコア計算
  //    高いほど「今すぐ出題すべき」
  // ─────────────────────────────────────────────
  _calcPriority(q, rec, userLevel) {
    let p = 50;

    // --- 習熟度ペナルティ/ボーナス ---
    const mastery = rec.mastery ?? 0;
    if (mastery === 0)           p += 25;  // 未学習は最優先
    else if (mastery <= 2)       p += 20;
    else if (mastery <= 4)       p += 10;
    else if (mastery <= 6)       p +=  0;
    else if (mastery <= 8)       p -= 15;
    else                         p -= 30;  // 完全習得は後回し

    // --- 弱点フラグ ---
    if (rec.weak_flag)           p += 35;

    // --- 連続誤答ペナルティ（recent wrong streak）---
    const wrongStreak = rec.wrong_streak ?? 0;
    if (wrongStreak >= 3)        p += 20;
    else if (wrongStreak >= 1)   p += 10;

    // --- 難易度 × ユーザーレベル適合度 ---
    //   userLevel: 1=初心者, 2=中級, 3=上級
    const diff = q.difficulty ?? 2;
    const diffGap = Math.abs(diff - userLevel);
    if (diffGap === 0)           p += 15;  // ちょうど合っている
    else if (diffGap === 1)      p +=  5;
    else                         p -= 10;  // 難易度差が大きい問題は後回し

    // --- 間隔反復: 復習期日を過ぎているか ---
    if (rec.last_attempt) {
      const daysSince = Math.floor((Date.now() - new Date(rec.last_attempt)) / 86400000);
      const interval  = this._reviewInterval(mastery);
      if (daysSince >= interval * 2) p += 25;      // 大幅超過
      else if (daysSince >= interval) p += 15;     // 超過
      else p -= Math.round((interval - daysSince) / interval * 20); // まだ早い
    }

    // --- ランダム揺らぎ（同点問題に多様性）---
    p += Math.random() * 8 - 4;

    return p;
  },

  // ─────────────────────────────────────────────
  // 3. ユーザーレベル診断（1=初心者/2=中級/3=上級）
  // ─────────────────────────────────────────────
  getUserLevel() {
    const acc = storage2.getOverallAccuracy();
    const total = storage2.getTotalQuestions();
    if (total < 20 || acc < 50) return 1;
    if (acc < 70)                return 2;
    return 3;
  },

  // ─────────────────────────────────────────────
  // 4. 次の問題を選ぶ（メイン出題ロジック）
  // ─────────────────────────────────────────────
  selectNext(pool, excludeIds = [], mode = 'adaptive') {
    const available = pool.filter(q => !excludeIds.includes(q.id));
    if (available.length === 0) return null;

    if (mode === 'random') {
      return available[Math.floor(Math.random() * available.length)];
    }

    if (mode === 'weak') {
      // 弱点モード: weak_flag または mastery < 4 の問題を優先
      const weak = available.filter(q => {
        const r = storage2.getQRecord(q.id);
        return r.weak_flag || (r.mastery ?? 0) < 4;
      });
      const target = weak.length > 0 ? weak : available;
      return target[Math.floor(Math.random() * Math.min(5, target.length))];
    }

    // adaptiveモード: 優先度スコアで選択
    const userLevel = this.getUserLevel();
    const scored = available.map(q => ({
      q,
      priority: this._calcPriority(q, storage2.getQRecord(q.id), userLevel)
    }));
    scored.sort((a, b) => b.priority - a.priority);

    // 上位5件からランダムに1件（完全な最大値固定を避ける）
    const topN = scored.slice(0, Math.min(5, scored.length));
    return topN[Math.floor(Math.random() * topN.length)].q;
  },

  // ─────────────────────────────────────────────
  // 5. 類似問題を選ぶ（解説後の関連出題用）
  // ─────────────────────────────────────────────
  getSimilar(pool, currentQ, excludeIds = []) {
    const candidates = pool.filter(q =>
      q.id !== currentQ.id &&
      !excludeIds.includes(q.id) &&
      (q.subcategory === currentQ.subcategory || q.category === currentQ.category)
    );
    if (candidates.length === 0) return this.selectNext(pool, excludeIds);

    // 難易度が近い問題を優先
    const diff = currentQ.difficulty ?? 2;
    candidates.sort((a, b) => {
      const da = Math.abs((a.difficulty ?? 2) - diff);
      const db = Math.abs((b.difficulty ?? 2) - diff);
      if (da !== db) return da - db;
      return (storage2.getQRecord(a.id).mastery ?? 0) - (storage2.getQRecord(b.id).mastery ?? 0);
    });
    return candidates[Math.floor(Math.random() * Math.min(3, candidates.length))];
  },

  // ─────────────────────────────────────────────
  // 6. 模擬試験セット生成（60問）
  //    カテゴリ比率: basics20% / japan25% / nature10% / culture35% / other10%
  //    難易度比率:   easy15% / medium60% / hard25%
  //    弱点カテゴリは+1〜2問上乗せ
  // ─────────────────────────────────────────────
  buildMockSet(pool) {
    const TOTAL = 60;
    const catRatios = { basics: 0.20, japan: 0.25, nature: 0.10, culture: 0.35, other: 0.10 };
    const diffTargets = { 1: 0.15, 2: 0.60, 3: 0.25 }; // easy/medium/hard比率

    // 弱点カテゴリを判定してボーナス問題数を付与
    const catAcc = storage2.getCategoryAccuracy();
    const bonusMap = {};
    for (const [cat, acc] of Object.entries(catAcc)) {
      if (acc < 50 && acc > 0) bonusMap[cat] = 2;  // 正答率50%未満は+2問
      else if (acc < 65 && acc > 0) bonusMap[cat] = 1; // 65%未満は+1問
    }

    const result = [];
    const usedIds = new Set();

    for (const [cat, ratio] of Object.entries(catRatios)) {
      const baseCount = Math.round(TOTAL * ratio);
      const bonus = bonusMap[cat] ?? 0;
      const targetCount = Math.min(baseCount + bonus, baseCount + 2);

      const catPool = pool.filter(q => q.category === cat);

      // 難易度バランスを保ちながら選ぶ
      const selected = this._selectWithDiffBalance(catPool, targetCount, diffTargets, usedIds);
      selected.forEach(q => { result.push(q); usedIds.add(q.id); });
    }

    // 不足分を補充（ボーナスで超過した場合は削減）
    if (result.length < TOTAL) {
      const rest = pool
        .filter(q => !usedIds.has(q.id))
        .sort(() => Math.random() - 0.5);
      result.push(...rest.slice(0, TOTAL - result.length));
    }

    return result.slice(0, TOTAL).sort(() => Math.random() - 0.5);
  },

  // buildMockSet ヘルパー: 難易度バランスを考慮した選択
  _selectWithDiffBalance(catPool, n, diffTargets, usedIds) {
    const available = catPool.filter(q => !usedIds.has(q.id));
    if (available.length === 0) return [];

    // 難易度別に分ける
    const byDiff = { 1: [], 2: [], 3: [] };
    available.forEach(q => {
      const d = q.difficulty ?? 2;
      if (byDiff[d]) byDiff[d].push(q);
    });

    // 各難易度から必要数を算出
    const result = [];
    for (const [diff, ratio] of Object.entries(diffTargets)) {
      const want = Math.round(n * ratio);
      const pool = byDiff[diff].sort(() => Math.random() - 0.5);
      result.push(...pool.slice(0, Math.min(want, pool.length)));
    }

    // 不足分はランダムで補完
    if (result.length < n) {
      const usedInResult = new Set(result.map(q => q.id));
      const extra = available
        .filter(q => !usedInResult.has(q.id))
        .sort(() => Math.random() - 0.5);
      result.push(...extra.slice(0, n - result.length));
    }

    return result.slice(0, n);
  },

  // ─────────────────────────────────────────────
  // 7. 弱点集中練習セット（n問）
  // ─────────────────────────────────────────────
  buildWeakFocusSet(pool, n = 20) {
    const scored = pool.map(q => {
      const r = storage2.getQRecord(q.id);
      // 弱点スコア: 高いほど優先して出題
      let score = 0;
      if (r.weak_flag)            score += 50;
      if ((r.mastery ?? 0) < 3)  score += 30;
      if ((r.wrong_streak ?? 0) >= 2) score += 20;
      score -= (r.mastery ?? 0) * 5;
      score += Math.random() * 10; // 多様性
      return { q, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, n).map(s => s.q).sort(() => Math.random() - 0.5);
  },

  // ─────────────────────────────────────────────
  // 8. 難易度プロファイル診断
  //    各難易度での正答率を返す
  // ─────────────────────────────────────────────
  getDifficultyProfile(pool) {
    const profile = { 1: { total: 0, correct: 0 }, 2: { total: 0, correct: 0 }, 3: { total: 0, correct: 0 } };
    pool.forEach(q => {
      const r = storage2.getQRecord(q.id);
      if (r.attempts === 0) return;
      const d = q.difficulty ?? 2;
      if (!profile[d]) return;
      profile[d].total += r.attempts;
      profile[d].correct += r.correct;
    });
    const result = {};
    for (const [d, s] of Object.entries(profile)) {
      result[d] = s.total > 0 ? Math.round(s.correct / s.total * 100) : null;
    }
    return result; // { 1: 85, 2: 60, 3: 40 } のような形
  },

  // ─────────────────────────────────────────────
  // 9. 学習推薦コメント生成
  // ─────────────────────────────────────────────
  getStudyRecommendation(pool) {
    const total = storage2.getTotalQuestions();
    const acc   = storage2.getOverallAccuracy();
    const weak  = storage2.getWeakCount();
    const mastered = storage2.getMasteredCount();
    const catAcc   = storage2.getCategoryAccuracy();
    const diffProf = this.getDifficultyProfile(pool);

    // 最も苦手なカテゴリ
    const catLabels = { basics: '基礎知識', japan: '日本の遺産', nature: '自然遺産', culture: '文化遺産', other: 'その他' };
    const worstCat = Object.entries(catAcc)
      .filter(([, v]) => v > 0)
      .sort((a, b) => a[1] - b[1])[0];

    const tips = [];

    if (total < 30) {
      tips.push('まずはランダム出題で全体像を把握しましょう。');
    } else if (weak >= 10) {
      tips.push(`弱点問題が${weak}問あります。「弱点集中」モードで重点的に取り組みましょう。`);
    } else if (acc < 60) {
      tips.push('全体の正答率が60%未満です。基礎知識と日本の遺産から確実に固めましょう。');
    } else if (acc >= 80 && diffProf[3] !== null && diffProf[3] < 60) {
      tips.push('全体の成績は良好ですが、難問（difficulty=3）の正答率が低いです。難問を重点的に練習しましょう。');
    } else if (acc >= 70) {
      tips.push('好調です！模擬試験で本番形式の練習をしてみましょう。');
    }

    if (worstCat) {
      const [cat, catAccVal] = worstCat;
      if (catAccVal < 65) {
        tips.push(`${catLabels[cat]}の正答率が${catAccVal}%と低めです。カテゴリ絞り込みで集中練習を。`);
      }
    }

    if (mastered > 0) {
      tips.push(`習得済み${mastered}問。引き続き定期的な復習で記憶を定着させましょう。`);
    }

    return {
      level: this.getUserLevel(),
      overallAccuracy: acc,
      totalAnswered: total,
      weakCount: weak,
      masteredCount: mastered,
      worstCategory: worstCat ? worstCat[0] : null,
      worstCategoryAcc: worstCat ? worstCat[1] : null,
      difficultyProfile: diffProf,
      tips
    };
  },

  // ─────────────────────────────────────────────
  // 10. 回答後のマスタリー更新（難易度加重）
  //     storage2.updateAfterAnswer を補完する形で呼ぶ
  // ─────────────────────────────────────────────
  calcMasteryDelta(difficulty, isCorrect) {
    // 正解時: 難問ほど大きく上がる
    // 誤答時: 易問ほど大きく下がる（易しい問題を間違えた = 基礎不足）
    if (isCorrect) {
      return difficulty === 3 ? +3 : difficulty === 2 ? +2 : +1;
    } else {
      return difficulty === 1 ? -4 : difficulty === 2 ? -3 : -2;
    }
  },

  // ─────────────────────────────────────────────
  // 11. 判定・スコア評価（変更なし）
  // ─────────────────────────────────────────────
  judge(score) {
    if (score >= 70) return { grade: '◎', label: '合格確実圏', color: 'green',  bg: '#d1fae5', border: '#059669' };
    if (score >= 60) return { grade: '○', label: '合格圏内',   color: 'blue',   bg: '#dbeafe', border: '#2563eb' };
    if (score >= 50) return { grade: '△', label: 'ボーダー',   color: 'yellow', bg: '#fef9c3', border: '#ca8a04' };
    return                  { grade: '✕', label: '要強化',     color: 'red',    bg: '#fee2e2', border: '#dc2626' };
  },

  // ─────────────────────────────────────────────
  // 12. カテゴリ別スコア集計（変更なし）
  // ─────────────────────────────────────────────
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
