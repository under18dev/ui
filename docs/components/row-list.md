# RowList

罫線で区切った縦のリストです。under18.dev ではカードの代わりにこれを使います。

<ComponentPreview name="row-list-demo" align="start" :min-height="360">

<<< @/demos/row-list-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { RowList, Row } from '@under18dev/ui'

<RowList>
  <Row title="イベントに参加する" href="https://under18.dev/join/" />
</RowList>
```

`href` を渡すと行全体がリンクになり、右端に矢印が付きます。

## 例

### 3列に並べる

`layout="split"` にすると、PC でタイトル・説明・リンクの文言を3列に並べます。トップページの「実際の活動」はこの形です。スマホでは縦に積みます。

<ComponentPreview name="row-list-split" align="start" :min-height="420">

<<< @/demos/row-list-split.tsx

</ComponentPreview>

### 大きな行と番号

`size="statement"` は原則のように短い言葉を大きく見せる行です。

`index` は順序に意味があるときだけ付けます。番号を付けるなら `RowList` を `as="ol"` にします。飾りのための 01 / 02 は付けないでください。

<ComponentPreview name="row-list-statement" align="start" :min-height="480">

<<< @/demos/row-list-statement.tsx

</ComponentPreview>

### リンクのない行

`href` がなければ、ただの行になります。`meta` は説明の下に小さく出ます。

<ComponentPreview name="row-list-static" align="start" :min-height="300">

<<< @/demos/row-list-static.tsx

</ComponentPreview>

## Props

### RowList

<PropsTable :rows="[
  ['as', `'ul' | 'ol'`, `'ul'`, '描く要素。順序に意味があれば ol'],
  ['className', 'string', '—', '追加のクラス'],
]" />

### Row

<PropsTable :rows="[
  ['title', 'ReactNode', '—', 'タイトル（必須）'],
  ['description', 'ReactNode', '—', '説明'],
  ['meta', 'ReactNode', '—', '補足の情報。size が statement のときは出さない'],
  ['index', 'string', '—', '番号。順序に意味があるときだけ'],
  ['href', 'string', '—', '指定すると行全体がリンクになる'],
  ['external', 'boolean', '—', '新しいタブで開くか。省略すると http(s) のリンクだけ新しいタブ'],
  ['actionLabel', 'string', '—', 'split のとき右端に出す文言。省略すると矢印だけ'],
  ['layout', `'stack' | 'split'`, `'stack'`, 'stack は縦に積む、split は PC で3列'],
  ['size', `'default' | 'statement'`, `'default'`, 'statement は大きな文字の行'],
  ['headingLevel', '2 | 3 | 4', '3', 'タイトルの見出しの階層'],
  ['reveal', 'boolean', 'false', 'スクロールで表示する'],
]" />

## アクセシビリティ

- 行全体が1つのリンクなので、中に別のリンクやボタンを入れないでください。
- 矢印は飾りで、読み上げません。別のサイトへのリンクは「（新しいタブで開く）」と読み上げます。
- タイトルは見出しです。ページの見出しの階層に合わせて `headingLevel` を変えてください。
