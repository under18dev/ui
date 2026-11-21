# Section

ページの1章です。背景は画面の端まで敷き、中身は [Container](/components/container) の幅に収めます。上下には画面幅に合わせて 72〜144px の余白が付きます。

<ComponentPreview name="section-demo" align="full" :minHeight="320">

<<< @/demos/section-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Section, SectionHeading } from '@under18dev/ui'

<Section aria-labelledby="activities-heading">
  <SectionHeading id="activities-heading" eyebrow="Activities" title="活動" />
</Section>
```

## 例

### 背景

`tone` で背景を選びます。ふだんは `canvas`（ページと同じ背景）で、前後の章と分けたいところだけ `section` にします。

`inverse` はライトでは黒、ダークでは白の面になります。強く伝えたい1か所だけに使います。中に置いた部品の色は自動で入れ替わります。

<ComponentPreview name="section-tones" align="full" :minHeight="480">

<<< @/demos/section-tones.tsx

</ComponentPreview>

### 区切り線

同じ背景の章が続くときは、`bordered` で上に 1px の線を入れます。

<ComponentPreview name="section-bordered" align="full" :minHeight="480">

<<< @/demos/section-bordered.tsx

</ComponentPreview>

### 余白と幅

`spacing={false}` で上下の余白をなくします。`contained={false}` にすると中身を Container で包まず、画面の端まで使えます。どちらも、中身の側で幅や余白を決める部品を入れるときに使います。

```tsx
<Section contained={false}>
  {/* 画面の端まで広げる中身 */}
</Section>
```

## Props

<PropsTable :rows="[
  ['tone', `'canvas' | 'section' | 'inverse'`, `'canvas'`, '背景'],
  ['bordered', 'boolean', 'false', '上に 1px の区切り線を入れる'],
  ['spacing', 'boolean', 'true', '上下に余白（72〜144px）を付ける'],
  ['contained', 'boolean', 'true', '中身を Container で包む'],
  ['as', 'ElementType', `'section'`, '描く要素'],
]" />

そのほかの属性（`id`、`aria-labelledby` など）は、そのまま描いた要素に渡します。

## アクセシビリティ

- `<section>` は名前があるときだけランドマークになります。見出しの `id` を `aria-labelledby` に渡すか、見出しがない章では `aria-label` を付けます。
- `inverse` の面でも、文字と背景のコントラストは通常の面と同じ基準を満たします。
