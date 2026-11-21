# Split

短い文と、実際の活動資料や挿絵を1点だけ左右に並べる章です。トップページの S03 で、作りたい・話したいといった場面を1つずつ見せるのに使います。

<ComponentPreview name="split-demo" align="full">

<<< @/demos/split-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Split } from '@under18dev/ui'

<Split
  id="create"
  eyebrow="01 / Create"
  title="作りたいものがある。でも、何から始めれば？"
  body="アイデアはある。検索もした。だけど、最初の一歩がいちばん難しい。"
  visual={<img src="/images/lt.jpg" alt="LT会で発表する様子" />}
/>
```

## 例

### 左右を入れ替える

`reverse` を付けると、PC で文を右、挿絵を左にします。スマホでは常に文、挿絵の順に縦に積みます。

<ComponentPreview name="split-reverse" align="full">

<<< @/demos/split-reverse.tsx

</ComponentPreview>

### 文だけにする

載せられる実際の資料がないときは `visual` を省き、文だけにします（design.md §8.3）。用意できない資料の代わりに、架空の画面や同じ形のカードを並べません。

<ComponentPreview name="split-text-only" align="full">

<<< @/demos/split-text-only.tsx

</ComponentPreview>

## 表示の動き

文と挿絵は [Reveal](./reveal) で包まれていて、画面に入ったときに一度だけ表示します。挿絵は文より 100ms 遅れます。スクロールを止めたり、固定したりはしません。

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', '見出し（h2）'],
  ['eyebrow', 'string', '—', '英字の小さなラベル。01 / Create のように順番に意味があるときだけ'],
  ['body', 'ReactNode', '—', '短い本文'],
  ['visual', 'ReactNode', '—', '右側に置く実例・挿絵'],
  ['reverse', 'boolean', 'false', 'PC で文と挿絵を左右入れ替える'],
  ['id', 'string', '—', 'section の id。見出しに id-heading を付け、aria-labelledby で結ぶ'],
]" />

## アクセシビリティ

- `id` を渡すと、章の名前を見出しから読み上げます。
- 装飾の挿絵には `aria-hidden="true"` を付けて渡します。内容のある画像には `alt` を付けます。
