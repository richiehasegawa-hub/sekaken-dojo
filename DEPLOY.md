# せかけん道場 — GitHub Pages デプロイ手順

このファイルの手順に従ってサイトを公開してください。**所要時間：約10分**

---

## ① 前提確認（ターミナルで実行）

```bash
git --version   # git がインストールされているか確認
gh --version    # GitHub CLI（なければ後述の方法で対応）
```

GitHub CLI がない場合 → https://cli.github.com/ からインストール、または手順②Bを参照

---

## ② GitHubリポジトリの作成

### A. GitHub CLI がある場合（推奨）

```bash
# sekaken-dojo フォルダに移動
cd ~/Desktop/Cowork/Projects/世界遺産検定/sekaken-dojo

# git 初期化
git init
git branch -M main
git add .
git commit -m "せかけん道場 v1.0 — 世界遺産検定3級対策サイト初期リリース"

# GitHub にリポジトリ作成してプッシュ（パブリック）
gh repo create sekaken-dojo --public --source=. --remote=origin --push

# GitHub Pages を有効化
gh api repos/{owner}/sekaken-dojo/pages \
  --method POST \
  --field source='{"branch":"main","path":"/"}' 2>/dev/null || true
```

### B. GitHub CLI なし（ブラウザ＋ターミナル）

1. https://github.com/new でリポジトリ作成
   - Repository name: `sekaken-dojo`
   - Visibility: **Public**
   - 「Create repository」をクリック

2. ターミナルで実行（`<your-username>` を自分のGitHubユーザー名に変更）:
   ```bash
   cd ~/Desktop/Cowork/Projects/世界遺産検定/sekaken-dojo
   git init
   git branch -M main
   git add .
   git commit -m "せかけん道場 v1.0 初期リリース"
   git remote add origin https://github.com/<your-username>/sekaken-dojo.git
   git push -u origin main
   ```

3. GitHubのリポジトリページで:
   - **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - **Save** をクリック

---

## ③ 公開URL確認

デプロイ完了後（通常1〜2分）、以下のURLでアクセスできます：

```
https://<your-username>.github.io/sekaken-dojo/
```

---

## ④ 問題データ更新時の手順

問題を追加・修正した後は以下を実行：

```bash
cd ~/Desktop/Cowork/Projects/世界遺産検定/sekaken-dojo
git add .
git commit -m "問題データ更新"
git push
```

GitHub Pages は自動的に再デプロイされます（約1分）。

---

## ⑤ トラブルシューティング

| 症状 | 対処 |
|------|------|
| ページが表示されない | 5分待ってからリロード |
| 404エラー | Settings→Pages でブランチ設定を確認 |
| データが読み込まれない | data/questions_data.js が存在するか確認 |
| git push でエラー | `git remote -v` でURLを確認 |
