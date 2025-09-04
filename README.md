# 導入
1. degitでテンプレートを取得
```
npm install -g degit
npx degit manntera/gas-dev-starter
```
2. 依存をインストール
```
npm install
```
3. 初期設定（Script ID / .env 生成）
```
npm run init-gas
```
   - `.clasp.json` と `.env` を対話で作成します。
   - 例として `.env.example` / `.clasp.json.example` を同梱しています。
4. Google アカウントでログイン
```
npm run login
```
5. デプロイ（本番ビルド + push）
```
npm run deploy
```
6. プロジェクトを開く
```
npm run open
```

# 構成メモ
- `dist/` は Git 管理外（ビルド生成物）。`src/appsscript.json` をビルド時に `dist/` へコピーします。
- `.env` の値はビルド時にコードへ埋め込まれます。機密は `PropertiesService` 等の利用を推奨。
- `export const main = () => { ... }` のように関数を export すると、gas-webpack-plugin が自動でグローバル公開します。

# スクリプト
- `npm run build` : 開発ビルド（ソースマップあり）
- `npm run build:prod` : 本番ビルド（最小化）
- `npm run deploy` : 本番ビルド → `clasp push`
- `npm run typecheck` : TypeScript 型チェックのみ
- `npm run lint` : ESLint 実行（Flat Config）

# 互換性メモ
- TypeScript は 5.9 系を採用し、ESLint は Flat Config（v9）で設定しています。
