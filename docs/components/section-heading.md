# SectionHeading

章の見出しです。英字のラベル、見出し、リード文を、決まった間隔で縦に並べます。

<ComponentPreview name="section-heading-demo" align="start">

<<< @/demos/section-heading-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Section, SectionHeading } from '@under18dev/ui'

<Section aria-labelledby="principles-heading">
  <SectionHeading id="principles-heading" eyebrow="Principles" title="大切にしていること" />
</Section>
```

`id` は見出しの要素に付きます。Section の `aria-labelledby` に同じ値を渡すと、章の名前になります。

## 例

### 中央揃え

`align="center"` で中央に揃えます。トップページの参加の案内のように、見出しとリード文だけで終わる短い章に使います。長い文章を中央揃えにはしません。

<ComponentPreview name="section-heading-center" align="start">

<<< @/demos/section-heading-center.tsx

</ComponentPreview>

### 右にリンクを置く

`action` に渡したものは、見出しの右に並べます。一覧の一部だけを見せる章で、全体へのリンクを置くのに使います。狭い画面では見出しの下に回ります。

<ComponentPreview name="section-heading-action" align="start" :minHeight="200">

<<< @/demos/section-heading-action.tsx

</ComponentPreview>

### 小見出し

`level={3}` にすると `<h3>` で描き、大きさも H3 になります。章の中をさらに分けるときに使います。

<ComponentPreview name="section-heading-level" align="start" :minHeight="200">

<<< @/demos/section-heading-level.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', '見出し。必須'],
  ['eyebrow', 'string', '—', '見出しの上の英字ラベル'],
  ['lead', 'ReactNode', '—', '見出しの下のリード文'],
  ['level', '2 | 3', '2', '見出しの階層'],
  ['size', `'display-xl' | 'display-l' | 'h1' | 'h2' | 'h3' | 'h4'`, 'level と同じ', '見出しの大きさ'],
  ['align', `'start' | 'center'`, `'start'`, '揃え方'],
  ['action', 'ReactNode', '—', '見出しの右に置くリンクなど'],
  ['id', 'string', '—', '見出しの要素に付ける id'],
  ['className', 'string', '—', '外側の要素に付けるクラス'],
]" />

## アクセシビリティ

- ラベルは `<p>` で描くので、見出しの名前には入りません。見出しだけで章の内容が分かるように書きます。
- リード文は横幅を 42em までに抑えます。
