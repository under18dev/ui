# EventRow

イベント一覧の1行です。日付、開催状態、タイトル、説明、会場を並べ、行全体がイベントのページへのリンクになります。

<ComponentPreview name="event-row-demo" align="start" :min-height="560">

<<< @/demos/event-row-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { RowList, EventRow } from '@under18dev/ui'

<RowList>
  <EventRow
    href="https://under18.dev/events/unknown-world-2026/"
    title="知らない世界の話をしよう 2026"
    date="2026-11-02T09:30:00+09:00"
    status="ended"
  />
</RowList>
```

`EventRow` は `<li>` を描くので、必ず `RowList` の中に置きます。

## 例

### 開催状態

`status` は必須です。`upcoming` は「開催予定」、`ongoing` は「開催中」、`ended` は「開催済み」の Badge になります。

文字で固定すると、開催日が過ぎても「開催予定」のまま残ります。上の例のように、開始と終了の日時から決めてください。

### 日付の文字列

`date` だけを渡すと「2026.12.24（木）」の形で出します。時刻まで出したいときは `dateLabel` に文字列を渡します。日付が決まっていなければ `date` を渡さず、開催状態だけを出します。

<ComponentPreview name="event-row-date-label" align="start" :min-height="240">

<<< @/demos/event-row-date-label.tsx

</ComponentPreview>

### 予定がないとき

表示するイベントがなければ、架空のイベントで埋めずに [EmptyState](./empty-state) に切り替えます。この例は、クリぼっちMeetup 2026 が終わると EmptyState になります。

<ComponentPreview name="event-row-empty" align="start" :min-height="240">

<<< @/demos/event-row-empty.tsx

</ComponentPreview>

## formatEventDate

ISO 8601 の日時を「2026.11.02（月）」の形にします。日本時間で数えるので、閲覧する人のタイムゾーンで日付がずれません。

```ts
import { formatEventDate } from '@under18dev/ui'

formatEventDate('2026-11-02T09:30:00+09:00') // '2026.11.02（月）'
```

## Props

<PropsTable :rows="[
  ['href', 'string', '—', 'イベントのページ（必須）'],
  ['title', 'ReactNode', '—', 'イベント名（必須）'],
  ['status', `'upcoming' | 'ongoing' | 'ended'`, '—', '開催状態（必須）'],
  ['description', 'ReactNode', '—', '1〜2行の説明'],
  ['date', 'string', '—', '確定した開催日時（ISO 8601）。未確定なら渡さない'],
  ['dateLabel', 'string', '—', '表示する日付の文字列。省略すると date から作る'],
  ['venue', 'ReactNode', '—', '会場'],
  ['image', '{ src, alt? }', '—', 'PC で右に出す画像。alt を省略すると飾りとして扱う'],
  ['headingLevel', '2 | 3', '3', 'タイトルの見出しの階層'],
  ['reveal', 'boolean', 'false', 'スクロールで表示する'],
]" />

## アクセシビリティ

- 日付は `<time datetime>` で描きます。
- 開催状態は Badge の文字で伝えます。
- 行全体が1つのリンクです。中に別のリンクを入れないでください。
