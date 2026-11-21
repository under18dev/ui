# SiteHeader

すべてのページの上に置くヘッダーです。左にロゴ、右に主要ナビ・テーマ切替・「参加する」を並べます。

<ComponentPreview name="site-header-demo" align="full" :min-height="360">

<<< @/demos/site-header-demo.tsx

</ComponentPreview>

## 使い方

```tsx
import { SiteHeader } from '@under18dev/ui'

<SiteHeader
  currentPath={pathname}
  items={[
    { href: '/about/', label: '団体について' },
    { href: '/events/', label: 'イベント' },
    { href: '/support/', label: '支援する' },
  ]}
  cta={{ href: '/join/', label: '参加する' }}
/>
```

実際のサイトでは同じサイトの中のパスを渡します。このページのデモはドキュメントの外へ移動しないよう、`https://under18.dev/...` を渡しているため新しいタブで開きます。

## 例

### 現在のページ

`currentPath` に今のページのパスを渡すと、一致する項目に `aria-current="page"` を付け、下線を引きます。`/events/` を渡した場合は `/events/kobe-univ/` のような下の階層でも「イベント」に印が付きます。`/` だけは完全に一致したときに限ります。

<ComponentPreview name="site-header-current" align="full" :min-height="120">

<<< @/demos/site-header-current.tsx

</ComponentPreview>

### 項目を減らす

`cta` を省くと「参加する」のボタンを出しません。`themeControl={false}` でテーマ切替も消せます。ナビは design.md §2.3 に沿って4項目程度までにします。

<ComponentPreview name="site-header-minimal" align="full" :min-height="120">

<<< @/demos/site-header-minimal.tsx

</ComponentPreview>

### スマホのメニュー

画面の幅が 1024px 未満になると、ナビと `cta` を隠して「メニュー」ボタンを出します。押すとヘッダーの下を覆うメニューを開き、`cta` もその最後に並びます。開いている間は次のように動きます。

- 背景のページはスクロールしません。
- フォーカスは「閉じる」ボタンとメニューのリンクの間だけを回ります。
- Escape で閉じ、フォーカスをボタンに戻します。リンクを押したときも閉じます。
- 幅が 1024px 以上に広がると自動で閉じます。

このページのプレビューは、ブラウザの幅を 1024px 未満にするとメニューの表示になります。

## Props

<PropsTable :rows="[
  ['items', 'NavItem[]', '—', '主要ナビ。NavItem は { href, label }'],
  ['cta', 'NavItem', '—', '右端に置く導線（「参加する」など）'],
  ['currentPath', 'string', '—', '現在のページのパス。aria-current を付けるのに使う'],
  ['themeControl', 'boolean', 'true', 'テーマ切替を出す'],
  ['logo', 'ReactNode', `'Under18 Developers'`, 'ロゴ。文字列なら団体名として描く'],
  ['logoLabel', 'string', `'Under18 Developers トップページ'`, 'ロゴのリンクの読み上げ名'],
  ['homeHref', 'string', `'/'`, 'ロゴのリンク先'],
]" />

## アクセシビリティ

- 横並びのナビには「メイン」、スマホのメニューには「メニュー」というラベルを付けた `<nav>` を使います。
- 「メニュー」ボタンは `aria-expanded` と `aria-controls` で開閉の状態とメニューを結びます。ボタンの文字も「メニュー」と「閉じる」で切り替わります。
- ヘッダーの前に [SkipLink](./skip-link) を置きます（design.md §7.1）。
- 上に固定し、スクロールすると背景と 1px の区切り線が付きます。プレビューの中では固定しません。
