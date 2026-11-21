import { defineConfig } from 'vitepress'
import { componentPages } from './pages'


export default defineConfig({
  lang: 'ja',
  title: 'Under18 Developers UI',
  description: 'Under18 Developers のデザインシステムに沿った React コンポーネントのドキュメント',
  base: process.env.DOCS_BASE ?? '/',
  cleanUrls: true,
  lastUpdated: false,
  head: [
    ['meta', { name: 'theme-color', content: '#fafafa' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  vite: {
    // デモは React（.tsx）で書く
    esbuild: { jsx: 'automatic' },
  },
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
  },
  themeConfig: {
    nav: [
      { text: 'ガイド', link: '/guide/introduction' },
      { text: 'コンポーネント', link: '/components/' },
    ],
    sidebar: {
      '/': [
        {
          text: 'はじめに',
          items: [
            { text: 'このライブラリについて', link: '/guide/introduction' },
            { text: 'インストール', link: '/guide/installation' },
            { text: 'テーマとダークモード', link: '/guide/theming' },
            { text: 'デザイントークン', link: '/guide/tokens' },
            { text: '使い分けの原則', link: '/guide/principles' },
          ],
        },
        ...componentPages.map((group) => ({
          text: group.group,
          items: group.items.map(([slug, name]) => ({ text: name, link: `/components/${slug}` })),
        })),
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/under18dev/ui' }],
    outline: { level: [2, 3], label: 'このページの内容' },
    docFooter: { prev: '前のページ', next: '次のページ' },
    darkModeSwitchLabel: 'テーマ',
    lightModeSwitchTitle: 'ライトにする',
    darkModeSwitchTitle: 'ダークにする',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'ページの先頭へ',
    search: { provider: 'local' },
    footer: {
      message: 'design.md（U18-DESIGN-001）と DECISION-001〜008 に沿って作っています。',
      copyright: '© Under18 Developers',
    },
  },
})
