# インストール

## パッケージを入れる

::: code-group

```sh [bun]
bun add @under18dev/ui
```

```sh [npm]
npm install @under18dev/ui
```

```sh [pnpm]
pnpm add @under18dev/ui
```

:::

React 18 以上が必要です。Next.js の App Router でも、そのまま Server Component から読み込めます。フックを使う部品には `"use client"` が付いています。

## CSS を読み込む

アプリの入口で、CSS を一度だけ読み込みます。

```tsx
import '@under18dev/ui/styles.css'
```

`styles.css` は、トークン・要素の初期スタイル・コンポーネントの 3 つをまとめたものです。Tailwind の preflight など、別のリセットを使っているサイトでは、初期スタイルを除いた 2 つだけを読み込みます。

```tsx
import '@under18dev/ui/tokens.css'
import '@under18dev/ui/components.css'
```

## フォントを読み込む

欧文は Inter、日本語は Noto Sans JP を使います。フォントは利用する側で読み込みます。

```sh
bun add @fontsource-variable/inter @fontsource-variable/noto-sans-jp
```

```tsx
import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-jp'
```

## テーマを設定する

`<head>` の中、CSS より前に `ThemeScript` を置き、ページ全体を `ThemeProvider` で包みます。詳しくは [テーマとダークモード](/guide/theming) を見てください。

```tsx
import { ThemeScript, ThemeProvider } from '@under18dev/ui'

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#fafafa" />
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
```

## 内部リンクを設定する

Next.js などのルーターを使う場合は、そのリンクのコンポーネントを `LinkProvider` に渡します。`Button`・`TextLink`・`SiteHeader` などの内部リンクが、すべてそのコンポーネントで描かれます。

```tsx
import NextLink from 'next/link'
import { LinkProvider } from '@under18dev/ui'

<LinkProvider component={NextLink}>{children}</LinkProvider>
```

`http(s)://` で始まる外部リンクは、自動で新しいタブで開きます。スクリーンリーダーには「（新しいタブで開く）」と読み上げます。

## 最初のページ

```tsx
import { SiteHeader, Hero, Button, SiteFooter } from '@under18dev/ui'

export default function Home() {
  return (
    <>
      <SiteHeader
        items={[
          { href: '/about/', label: '団体について' },
          { href: '/events/', label: 'イベント' },
        ]}
        cta={{ href: '/join/', label: '参加する' }}
        currentPath="/"
      />
      <main id="main">
        <Hero
          eyebrow="Under18 Developers"
          title="好きなことに、年齢はいらない。"
          lead="作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。"
          actions={<Button href="/events/">イベントを見る</Button>}
        />
      </main>
      <SiteFooter columns={[{ title: 'コミュニティ', links: [{ href: '/events/', label: 'イベント' }] }]} />
    </>
  )
}
```
