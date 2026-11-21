// コンポーネントのページ。サイドバーと一覧ページはここから作る
export const componentPages = [
  { group: 'レイアウト', items: [
    ['container', 'Container'],
    ['section', 'Section'],
  ] },
  { group: '文字', items: [
    ['heading', 'Heading'],
    ['text', 'Text'],
    ['section-heading', 'SectionHeading'],
    ['prose', 'Prose'],
  ] },
  { group: '操作', items: [
    ['button', 'Button'],
    ['text-link', 'TextLink'],
    ['theme-control', 'ThemeControl'],
  ] },
  { group: 'データの表示', items: [
    ['badge', 'Badge'],
    ['card', 'Card'],
    ['row-list', 'RowList'],
    ['event-row', 'EventRow'],
    ['info-list', 'InfoList'],
    ['empty-state', 'EmptyState'],
  ] },
  { group: '開閉', items: [
    ['accordion', 'Accordion'],
    ['tabs', 'Tabs'],
    ['dialog', 'Dialog'],
  ] },
  { group: 'ページの部品', items: [
    ['site-header', 'SiteHeader'],
    ['site-footer', 'SiteFooter'],
    ['hero', 'Hero'],
    ['page-hero', 'PageHero'],
    ['split', 'Split'],
    ['statement', 'Statement'],
    ['call-to-action', 'CallToAction'],
    ['reveal', 'Reveal'],
    ['skip-link', 'SkipLink'],
  ] },
] as const
