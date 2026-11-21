# Prose

Markdown から変換した HTML のように、クラスを付けられない本文の見た目を整えます。見出し・リスト・表・コード・引用を、トークンの色で描きます。

<ComponentPreview name="prose-demo" align="start">

<<< @/demos/prose-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Prose } from '@under18dev/ui'

<Prose dangerouslySetInnerHTML={{ __html: html }} />
```

`html` には、自分たちで書いた Markdown を変換したものなど、信頼できる内容だけを渡します。外から受け取った文字列をそのまま入れてはいけません。

## 例

### 表

イベントの開催概要のような、項目と内容の組を並べるのに使います。

<ComponentPreview name="prose-table" align="start">

<<< @/demos/prose-table.tsx

</ComponentPreview>

### コードと引用

`code` は等幅の文字で、`pre` は横にスクロールする箱で描きます。

<ComponentPreview name="prose-code" align="start">

<<< @/demos/prose-code.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['children', 'ReactNode', '—', '本文'],
  ['className', 'string', '—', '外側の要素に付けるクラス'],
]" />

`<div>` として描き、`dangerouslySetInnerHTML` などそのほかの属性はそのまま渡します。横幅は 42em までです。

## アクセシビリティ

- 本文の中のリンクには下線を付け、色だけに頼らずにリンクだと分かるようにします。
- 見出しの階層は中身の HTML のとおりになります。ページの `h1` の下に置くなら、Markdown 側の見出しは `##` から始めます。
