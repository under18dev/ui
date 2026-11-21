# テーマとダークモード

テーマは「自動（システム設定に合わせる）・ライト・ダーク」の 3 つです。最初は自動で、OS の設定に従います。

## しくみ

1. `ThemeScript` が、ページの最初の描画より前に `localStorage` の `u18.theme` を読み、`<html>` に `data-theme="light"` か `data-theme="dark"` を付けます。
2. CSS のトークンは `data-theme` に合わせて切り替わります。JS が動かない環境では、OS の設定（`prefers-color-scheme`）に従います。
3. `ThemeProvider` が選択を保持し、自動のときだけ OS の設定変更に追従します。ほかのタブで変えたときも揃えます。
4. `ThemeControl`（`SiteHeader` に含まれる）で切り替えると、選んだ値を保存します。

保存値が壊れていたり、ストレージが使えなかったりするときは、エラーを出さずに自動として扱います。

## ThemeScript

`<head>` の中、CSS より前に置きます。動きを減らす設定でなければ、`<html>` に `data-motion` も付けます。スクロールで表示する演出（[Reveal](/components/reveal)）は、これがあるときだけ動きます。

```tsx
<ThemeScript heroMotion />
```

| Prop | 型 | 既定値 | 説明 |
|---|---|---|---|
| `heroMotion` | `boolean` | `false` | トップのヒーローの登場演出を、セッションの最初の 1 回だけ再生する |
| `nonce` | `string` | — | CSP の nonce |

React の外（Astro や素の HTML）で使う場合は、`themeScriptSource()` が返す文字列を `<script>` に入れます。

```astro
---
import { themeScriptSource } from '@under18dev/ui'
---
<script is:inline set:html={themeScriptSource()} />
```

## useTheme

現在の選択と、実際に表示しているテーマを読み取り、切り替えることができます。

```tsx
import { useTheme } from '@under18dev/ui'

function Example() {
  const { choice, resolved, setChoice } = useTheme()
  // choice: 'system' | 'light' | 'dark'、resolved: 'light' | 'dark'
  return <button onClick={() => setChoice('dark')}>ダークにする（今は {resolved}）</button>
}
```

## 反転した面

`Section` の `tone="inverse"` や [Statement](/components/statement) は、`.u18-inverse` クラスでトークンごと反転します。ライトでは黒い面、ダークでは白い面になります。中に置いた部品は、ふだんどおりのトークンのまま正しい色になります。

## このサイトでの扱い

このドキュメントでは、右上のテーマの切り替えと、ライブラリの `data-theme` を同期しています。プレビューの中の [ThemeControl](/components/theme-control) で切り替えても、サイト全体のテーマが変わります。
