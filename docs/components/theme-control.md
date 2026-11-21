# ThemeControl

テーマを「自動・ライト・ダーク」から選ぶボタンです。押すとメニューが開きます。ボタンには今の設定を文字で表示します。

<ComponentPreview name="theme-control-demo" :minHeight="360">

<<< @/demos/theme-control-demo.tsx

</ComponentPreview>

## 使い方

[SiteHeader](/components/site-header) には最初から入っています（`themeControl={false}` で外せます）。単独で使うのは、ヘッダーの外に置くときです。

```tsx
import { ThemeControl } from '@under18dev/ui'

<ThemeControl />
```

使うには、`<head>` に `ThemeScript` を置き、ページ全体を `ThemeProvider` で包んでおく必要があります。`ThemeScript` が最初の描画より前にテーマを決め、`ThemeProvider` が選んだ値を保持します。

```tsx
import { ThemeScript, ThemeProvider } from '@under18dev/ui'

<html lang="ja">
  <head>
    <ThemeScript />
  </head>
  <body>
    <ThemeProvider>{children}</ThemeProvider>
  </body>
</html>
```

選んだ値は `localStorage` の `u18.theme` に保存します。「自動」のときだけ OS の設定に従います。くわしくは [テーマとダークモード](/guide/theming) を見てください。

## キーボード操作

| キー | 動き |
|---|---|
| Enter / Space | メニューを開く。開くと、選択中の項目にフォーカスが移る |
| ↓ / ↑ | 次・前の項目に移る。端まで行くと反対側に戻る |
| Home / End | 最初・最後の項目に移る |
| Enter / Space（項目の上） | その項目を選んでメニューを閉じる |
| Escape | 選ばずにメニューを閉じる |
| Tab | メニューを閉じて、次の要素に移る |

## Props

<PropsTable :rows="[
  ['className', 'string', '—', '外側の要素に付けるクラス'],
]" />

## アクセシビリティ

- ボタンは「テーマ: 自動（変更する）」のように、今の設定を含めて読み上げます。アイコンだけには頼りません。
- メニューは `role="menu"`、各項目は `menuitemradio` で、選択中の項目を `aria-checked` で伝えます。見た目では ✓ と太字で示します。
- 項目を選ぶか Escape で閉じると、フォーカスはボタンに戻ります。メニューの外を押したときは、フォーカスを動かさずに閉じます。
- 動きを減らす設定では、色をすぐに切り替えます。
