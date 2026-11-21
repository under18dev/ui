# Tabs

pill 形のタブです。イベントのページで「開催予定」と「開催済み」を切り替えるのに使います。

<ComponentPreview name="tabs-demo" align="start" :min-height="460">

<<< @/demos/tabs-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { Tabs } from '@under18dev/ui'

<Tabs
  label="イベントの種類"
  items={[
    { id: 'upcoming', label: '開催予定', content: <p>…</p> },
    { id: 'past', label: '開催済み', content: <p>…</p> },
  ]}
/>
```

`label` はタブ全体の名前です。画面には出ず、スクリーンリーダーが読み上げます。

## 例

### 最初に開くタブ

`defaultTabId` に `id` を渡すと、そのタブを選んだ状態で始まります。省略すると最初のタブです。

<ComponentPreview name="tabs-default" align="start" :min-height="240">

<<< @/demos/tabs-default.tsx

</ComponentPreview>

### 切り替えを受け取る

`onChange` に、選んだタブの `id` が渡ります。URL のハッシュに残すときなどに使います。

<ComponentPreview name="tabs-on-change" align="start" :min-height="260">

<<< @/demos/tabs-on-change.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['items', 'TabItem[]', '—', 'タブの配列（必須）'],
  ['label', 'string', '—', 'タブ全体の読み上げ名（必須）'],
  ['defaultTabId', 'string', '—', '最初に選ぶタブの id'],
  ['onChange', '(id: string) => void', '—', '選んだタブが変わったとき'],
]" />

### TabItem

<PropsTable :rows="[
  ['id', 'string', '—', 'タブを見分ける一意な値（必須）'],
  ['label', 'ReactNode', '—', 'タブの文字（必須）'],
  ['content', 'ReactNode', '—', 'タブを選んだときの中身（必須）'],
]" />

## アクセシビリティ

- WAI-ARIA の Tabs パターンに沿っています。
- Tab でタブの並びに入ると、選んでいるタブにフォーカスが移ります。もう一度 Tab を押すと中身に移ります。
- ← → で隣のタブ、Home で最初、End で最後のタブに移ります。移ると同時に中身も切り替わります。
- 動きを減らす設定では、インジケーターと中身は動かずに切り替わります。
