# Accordion

見出しを押すと中身が開く、縦のリストです。よくある質問に使います。

<ComponentPreview name="accordion-demo" align="start" :min-height="320">

<<< @/demos/accordion-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Accordion } from '@under18dev/ui'

<Accordion
  items={[
    { summary: '質問', content: '答え' },
  ]}
/>
```

`<details>` と `<summary>` で組んでいるので、JS が読み込まれる前でも開閉できます。

## 例

### 1つだけ開く

`name` を渡すと、1つ開いたときにほかが閉じます。`defaultOpen` を付けた項目は最初から開いています。`name` はブラウザの機能を使うので、対応していないブラウザでは複数開けます。

<ComponentPreview name="accordion-exclusive" align="start" :min-height="280">

<<< @/demos/accordion-exclusive.tsx

</ComponentPreview>

### リンクを含める

`content` には要素を渡せます。

<ComponentPreview name="accordion-rich" align="start" :min-height="200">

<<< @/demos/accordion-rich.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['items', 'AccordionItem[]', '—', '項目の配列（必須）'],
  ['name', 'string', '—', '同じ name の項目は1つだけ開く'],
  ['className', 'string', '—', '追加のクラス'],
]" />

### AccordionItem

<PropsTable :rows="[
  ['summary', 'ReactNode', '—', '見出し（必須）'],
  ['content', 'ReactNode', '—', '開いたときの中身（必須）'],
  ['defaultOpen', 'boolean', '—', '最初から開いておく'],
]" />

## アクセシビリティ

- Tab で見出しに移り、Enter か Space で開閉します。
- 開閉の状態はブラウザがスクリーンリーダーに伝えます。
- 右端の ＋ / − は飾りで、読み上げません。
