# @under18dev/ui

Under18 Developers のデザインシステム（`design.md` U18-DESIGN-001 と DECISION-001〜008）に沿った React コンポーネントです。部品を組み合わせるだけで、under18.dev と同じ見た目・動き・アクセシビリティのサイトを作れます。

- 色は白・黒・グレーの無彩色だけ。ライト / ダーク / システム設定の3つのテーマに対応します
- CSS は素の CSS（Tailwind 不要）。クラス名はすべて `u18-` で始まります
- 依存は React だけ（React 18 以上）。サーバーでの描画（Next.js・Astro など）にも対応します

## インストール

```sh
bun add @under18dev/ui
```

React 18 以上が必要です。ライセンスは Apache-2.0 です。

## 使い方

```tsx
// アプリの入口で、CSS を一度だけ読み込む
import '@under18dev/ui/styles.css' // 別のリセットを使うなら tokens.css と components.css だけ
import { ThemeScript, ThemeProvider, SiteHeader, Hero, Button, SiteFooter } from '@under18dev/ui'
```

フォントは Inter と Noto Sans JP です。読み込みは利用する側で行います（例: `@fontsource-variable/inter`・`@fontsource-variable/noto-sans-jp`）。

### テーマ

1. `<head>` の中、CSS より前に `<ThemeScript />` を置きます。最初の描画より前にテーマが決まるので、白黒のちらつきが出ません。React の外で使うときは、`themeScriptSource()` の文字列を `<script>` に入れます
2. ページ全体を `<ThemeProvider>` で包みます。`ThemeControl`（`SiteHeader` に含まれる）で切り替えた値は `localStorage` の `u18.theme` に保存されます

```tsx
<html lang="ja">
  <head>
    <meta name="theme-color" content="#fafafa" />
    <ThemeScript heroMotion />
  </head>
  <body>
    <ThemeProvider>…</ThemeProvider>
  </body>
</html>
```

### 内部リンク

Next.js の `Link` などを使うときは、`LinkProvider` に渡します。`Button`・`TextLink`・`SiteHeader` などの内部リンクが、すべてそのコンポーネントで描かれます。`http(s)://` のリンクは自動で新しいタブで開き、「（新しいタブで開く）」を読み上げます。

```tsx
<LinkProvider component={NextLink}>…</LinkProvider>
```

## コンポーネント

| 分類 | コンポーネント | 用途 |
|---|---|---|
| テーマ | `ThemeScript` `ThemeProvider` `useTheme` `ThemeControl` | テーマの確定・保存・切替 |
| レイアウト | `Container` `Section` | 1200px の箱、全幅の背景と章の余白（`tone`: canvas / section / inverse） |
| 文字 | `Heading` `Text` `Eyebrow` `SectionHeading` `Prose` | 見出し（階層と大きさを別に指定）、本文、英字ラベル、Markdown の本文 |
| 操作 | `Button` `ButtonGroup` `TextLink` `Arrow` | pill 形のボタン（primary / secondary）、下線のリンク |
| データ | `RowList` `Row` `EventRow` `Card` `LinkCard` `CardGrid` `Badge` `InfoList` `EmptyState` | 罫線のリスト、イベントの行、紙のカード、状態のラベル、「項目：値」、データがないとき |
| 開閉 | `Accordion` `Tabs` `Dialog` | よくある質問（JS なしで動く）、pill 形のタブ、モーダル / スマホのシート |
| ページ | `SiteHeader` `SiteFooter` `SkipLink` `Hero` `Muted` `PageHero` `Split` `Statement` `CallToAction` `Reveal` | トップの S01〜S08 と下層ページの冒頭、スクロール表示 |

使い分けの原則（design.md）:

- 主要なボタン（`variant="primary"`）は、1つの画面に1つまで
- カードは、イベントなど実際の異なるデータを並べるときだけ。読めるなら `RowList` を使う
- `Statement`（反転した大きな文字）は、ページに1か所だけ
- 番号（`Row` の `index`）は、意味のある順番があるときだけ
- 日付・件数・実績は、公開済みの情報だけを載せる。データがないときは `EmptyState`

全ページの組み立て例は `demo/src/App.tsx` にあります。

## ドキュメント

`docs/` は VitePress のドキュメントサイトです。コンポーネントごとに、動くプレビューとコード、Props、アクセシビリティの注意をまとめています。プレビューは `docs/demos/` の React コンポーネントを、そのまま描いています。

```sh
bun run docs:dev     # 手元で開く
bun run docs:build   # docs/.vitepress/dist に書き出す
bun run test:docs    # 全ページを、ライトとダークで検査する（エラー・プレビューの表示・axe）
```

Cloudflare Pages では、このリポジトリを Git 連携でつなぎ、次のように設定します。

| 項目 | 値 |
|---|---|
| ビルドコマンド | `bun run docs:build` |
| 出力ディレクトリ | `docs/.vitepress/dist` |
| ルートディレクトリ | （空欄） |

## 開発

```sh
bun install
bun run dev        # 見本サイト（demo/）を開く
bun run typecheck
bun run build      # dist/ に JS・型・CSS を出力
bun run test       # Chrome・WebKit・Firefox で、テーマ・キーボード操作・axe・320px を検査
```

## 公開

GitHub Actions（`.github/workflows/publish.yml`）で npm に公開します。`package.json` のバージョンを上げてコミットし、同じ名前のタグを push すると、型チェック・ビルド・テストを通してから公開します。

```sh
npm version patch   # package.json を 0.1.1 にし、v0.1.1 のタグを付ける
git push --follow-tags
```

npm のトークンは使わず、trusted publishing（OIDC）で公開します。最初の一度だけ、このワークフローを Trusted Publisher として登録してください（2 段階認証が要ります）。

```sh
npm trust github @under18dev/ui --file publish.yml --repo under18dev/ui --allow-publish --registry=https://registry.npmjs.org
npm trust list @under18dev/ui --registry=https://registry.npmjs.org   # 登録できたか確かめる
```

npmjs.com の `@under18dev/ui` の Settings からも、同じ設定ができます。

同じワークフローで、GitHub Packages（`npm.pkg.github.com`）にも公開します。こちらは Actions の `GITHUB_TOKEN` で公開するので、設定は要りません。Actions の画面から Publish を手動で実行すると、GitHub Packages にだけ今のバージョンを公開します。

手元から公開するときは `npm publish` です。公開の前に `prepublishOnly` でビルドと型チェックが走ります。公開先は `publishConfig` で npm 本体（registry.npmjs.org）に固定しています。

## ライセンス

[Apache-2.0](./LICENSE)
