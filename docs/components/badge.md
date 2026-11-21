# Badge

イベントの開催状態などを示す小さなラベルです。状態は色ではなく文字で伝えます。

<ComponentPreview name="badge-demo" :min-height="160">

<<< @/demos/badge-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Badge } from '@under18dev/ui'

<Badge>開催予定</Badge>
```

## 例

### 種類

開催予定は `outline`、開催中は `solid`、開催済みは `muted` にします。`EventRow` はこの対応で Badge を出しています。

<ComponentPreview name="badge-variants" :min-height="160">

<<< @/demos/badge-variants.tsx

</ComponentPreview>

### 日付と並べる

`LinkCard` の `meta` など、日付の横に置くことが多いです。状態は固定の文字で書かず、開催日から決めてください。

<ComponentPreview name="badge-with-date" :min-height="160">

<<< @/demos/badge-with-date.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['variant', `'outline' | 'solid' | 'muted'`, `'outline'`, '見た目の種類。solid は反転、muted は控えめ'],
  ['className', 'string', '—', '追加のクラス'],
  ['children', 'ReactNode', '—', 'ラベルの文字'],
]" />

## アクセシビリティ

- ただの `<span>` です。文字がそのまま読み上げられるので、「開催済み」のように状態がわかる言葉を入れてください。
- 種類の違いは線の濃さと塗りで表し、色相には頼りません。
