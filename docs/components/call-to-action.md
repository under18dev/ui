# CallToAction

ページの最後、フッターの直前に置く呼びかけです。トップページの S08 で「参加方法を見る」へ案内します。

<ComponentPreview name="call-to-action-demo" align="full">

<<< @/demos/call-to-action-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Button, CallToAction } from '@under18dev/ui'

<CallToAction
  id="final"
  title={<>次の「やってみたい」を、<br />ここから。</>}
  action={<Button href="/join/" arrow>参加方法を見る</Button>}
/>
```

## 例

### 本文を添える

`body` は見出しの下に置く短い説明です。`tone="canvas"` にすると、背景をページと同じ色にします。

<ComponentPreview name="call-to-action-body" align="full">

<<< @/demos/call-to-action-body.tsx

</ComponentPreview>

## 使うときの決まり

- `action` には primary の Button を1つだけ渡します（design.md §8.8）。トップページなら「参加方法を見る」か「活動を見る」のどちらかです。
- Hero と同じ大きさの派手さを繰り返しません。見出しは Hero より一段小さい大きさです。
- フッターの中にもう一度強い呼びかけを置き、呼びかけを2つ続けることはしません。

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', '見出し（h2）'],
  ['action', 'ReactNode', '—', '主要な Button を1つ'],
  ['body', 'ReactNode', '—', '見出しの下の説明'],
  ['tone', `'canvas' | 'section'`, `'section'`, '背景の色'],
  ['id', 'string', '—', 'section の id。見出しに id-heading を付け、aria-labelledby で結ぶ'],
]" />

## アクセシビリティ

- 見出し、本文、ボタンの順に [Reveal](./reveal) で一度だけ表示します。動きを減らす設定では最初から表示します。
