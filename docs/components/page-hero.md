# PageHero

下層ページの冒頭に置く、英字のラベル・見出し・リード文のまとまりです。`/events/` や `/about/` の最初に使います。

<ComponentPreview name="page-hero-demo" align="start">

<<< @/demos/page-hero-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { PageHero, Section } from '@under18dev/ui'

<Section>
  <PageHero eyebrow="Events" title="イベント">
    <p>LT会や交流会など、Under18 Developersが開催・共催したイベントです。</p>
  </PageHero>
</Section>
```

PageHero は余白を持たないので、`Section` の中に置きます。

## 例

### 段落を分ける

リード文は `children` に段落ごとの `<p>` で渡します。段落の間は 16px 空きます。

<ComponentPreview name="page-hero-paragraphs" align="start">

<<< @/demos/page-hero-paragraphs.tsx

</ComponentPreview>

### ボタンを置く

`actions` に渡した Button をリード文の下に並べます。

<ComponentPreview name="page-hero-actions" align="start">

<<< @/demos/page-hero-actions.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', 'ページの見出し（h1）'],
  ['eyebrow', 'string', '—', '見出しの上の英字ラベル（Events など）'],
  ['children', 'ReactNode', '—', 'リード文。段落を複数渡してもよい'],
  ['actions', 'ReactNode', '—', 'リード文の下に並べる Button'],
]" />

## アクセシビリティ

- 見出しは `<h1>` です。1つのページに1つだけ置きます。
- リード文は1行の長さを読みやすい幅に抑えます。
