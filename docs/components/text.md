# Text

本文の文字です。リード文・本文・補足の3種類があります。見出しの上に置く英字の小さなラベル `Eyebrow` も、このページで説明します。

<ComponentPreview name="text-demo" align="start" :minHeight="200">

<<< @/demos/text-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Text, Eyebrow } from '@under18dev/ui'

<Text variant="lead">作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。</Text>
```

## 例

### 種類

`lead` は章の見出しのすぐ下に置く1〜2文、`body` は本文、`small` は会場や日時などの補足に使います。

<ComponentPreview name="text-variants" align="start" :minHeight="240">

<<< @/demos/text-variants.tsx

</ComponentPreview>

### 色

本文の既定は `secondary` で、見出しより少し薄くなります。`muted` は補足用です。

<ComponentPreview name="text-tones" align="start" :minHeight="200">

<<< @/demos/text-tones.tsx

</ComponentPreview>

### 可読幅

`measure` を付けると、横幅を 42em までに抑えます。イベントの説明のように長い文章は、1行が長くなりすぎないようにこれを付けます。

<ComponentPreview name="text-measure" align="start" :minHeight="200">

<<< @/demos/text-measure.tsx

</ComponentPreview>

### Eyebrow

見出しの上に置く、英字の小さなラベルです。字間を広げて大文字で表示するので、日本語には使いません。章の見出しに付けるなら、`eyebrow` を持つ [SectionHeading](/components/section-heading) を使うほうが簡単です。

<ComponentPreview name="text-eyebrow" align="start" :minHeight="200">

<<< @/demos/text-eyebrow.tsx

</ComponentPreview>

## Props

### Text

<PropsTable :rows="[
  ['variant', `'lead' | 'body' | 'small'`, `'body'`, '文字の種類'],
  ['tone', `'primary' | 'secondary' | 'muted'`, `'secondary'`, '文字の色'],
  ['measure', 'boolean', 'false', '横幅を 42em までに抑える'],
  ['as', 'ElementType', `'p'`, '描く要素'],
]" />

そのほかの属性（`id`、`className`、`style` など）は、そのまま描いた要素に渡します。

### Eyebrow

<PropsTable :rows="[
  ['children', 'ReactNode', '—', 'ラベルの文字。必須'],
]" />

`<p>` として描き、そのほかの属性はそのまま渡します。

## アクセシビリティ

- `Eyebrow` は `<p>` なので、見出しの一部としては読み上げません。章の名前は見出しの側に書きます。
- `Eyebrow` は CSS で大文字にしているだけなので、スクリーンリーダーは書いたとおりの文字を読み上げます。
- `muted` の文字も、背景とのコントラストは 4.5:1 以上あります。
