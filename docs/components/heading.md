# Heading

見出しです。文書の階層（`level`）と見た目の大きさ（`size`）を分けて指定します。

<ComponentPreview name="heading-demo" align="start" :minHeight="160">

<<< @/demos/heading-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Heading } from '@under18dev/ui'

<Heading level={2}>好きなことに、年齢はいらない。</Heading>
```

## 例

### 大きさ

`size` を省くと、`level` と同じ大きさになります。`display-xl` と `display-l` はヒーローなど大きく見せる1か所に使います。どの大きさも、画面幅に合わせて3段階で変わります。

<ComponentPreview name="heading-sizes" align="start">

<<< @/demos/heading-sizes.tsx

</ComponentPreview>

### 階層と大きさを分ける

見た目を小さくしたいからといって、`h2` の次に `h4` を使うことはしません。階層は `level` で正しく付け、大きさは `size` で変えます。

<ComponentPreview name="heading-level-size" align="start">

<<< @/demos/heading-level-size.tsx

</ComponentPreview>

### 色

`tone` で文字の濃さを変えます。ほとんどの見出しは既定の `primary` のままです。

<ComponentPreview name="heading-tones" align="start">

<<< @/demos/heading-tones.tsx

</ComponentPreview>

### 字間を詰める

`tight` は字間を -0.025em にします。大きな英字の見出しだけに使い、日本語には使いません。

<ComponentPreview name="heading-tight" align="start">

<<< @/demos/heading-tight.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['level', '1 | 2 | 3 | 4', '—', '見出しの階層。必須'],
  ['size', `'display-xl' | 'display-l' | 'h1' | 'h2' | 'h3' | 'h4'`, 'level と同じ', '見た目の大きさ'],
  ['tone', `'primary' | 'secondary' | 'muted'`, `'primary'`, '文字の色'],
  ['tight', 'boolean', 'false', '字間を詰める。大きな英字の見出しだけに使う'],
]" />

そのほかの属性（`id`、`className`、`style` など）は、そのまま `<h1>`〜`<h4>` に渡します。

## アクセシビリティ

- 1ページに `h1` は1つにして、階層を飛ばさずに並べます。
- 文字は画像にせず、利用者が文字を大きくしたときにも追従します。
