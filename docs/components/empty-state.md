# EmptyState

載せるデータがないときの表示です。架空の内容で埋めず、ないことを書いて、次に見る場所を案内します。

<ComponentPreview name="empty-state-demo" align="start" :min-height="260">

<<< @/demos/empty-state-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { EmptyState } from '@under18dev/ui'

<EmptyState title="開催予定のイベントはまだありません" />
```

## 例

### ボタンで案内する

`action` には `TextLink` か `Button` を渡します。お知らせがまだないページなら、これまでのイベントへ案内します。

<ComponentPreview name="empty-state-button" align="start" :min-height="280">

<<< @/demos/empty-state-button.tsx

</ComponentPreview>

### タイトルだけ

案内する先がなければ、タイトルだけで構いません。

<ComponentPreview name="empty-state-minimal" align="start" :min-height="200">

<<< @/demos/empty-state-minimal.tsx

</ComponentPreview>

## Props

<PropsTable :rows="[
  ['title', 'ReactNode', '—', 'ないことを伝える一文（必須）'],
  ['description', 'ReactNode', '—', '補足'],
  ['action', 'ReactNode', '—', '代わりに案内するリンクやボタン'],
  ['headingLevel', '2 | 3 | 4', '3', 'タイトルの見出しの階層'],
]" />

## アクセシビリティ

- タイトルは見出しになります。置く場所の見出しの階層に合わせて `headingLevel` を変えてください。
