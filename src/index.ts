// Under18 Developers UI。スタイルは '@under18dev/ui/styles.css' を一度だけ読み込む

// テーマ
export { ThemeScript, type ThemeScriptProps } from './theme/ThemeScript'
export { ThemeProvider, useTheme } from './theme/ThemeProvider'
export {
  THEME_CHOICES,
  THEME_STORAGE_KEY,
  applyTheme,
  isThemeChoice,
  readThemeChoice,
  resolveTheme,
  storeThemeChoice,
  themeScriptSource,
  type ResolvedTheme,
  type ThemeChoice,
} from './theme/theme'
export { ThemeControl } from './components/ThemeControl'

// リンク
export { LinkProvider, BaseLink, isExternalHref, opensInNewTab, type BaseLinkProps, type LinkComponentProps } from './lib/link'
export { cx } from './lib/cx'

// レイアウト・文字
export { Container, Section, type ContainerProps, type SectionProps } from './components/Layout'
export { Heading, Text, Eyebrow, type HeadingProps, type HeadingSize, type TextProps } from './components/Typography'
export { SectionHeading, type SectionHeadingProps } from './components/SectionHeading'
export { Prose } from './components/Prose'
export { VisuallyHidden } from './components/VisuallyHidden'
export { SkipLink, type SkipLinkProps } from './components/SkipLink'

// 操作
export { Button, ButtonGroup, type ButtonProps } from './components/Button'
export { TextLink, type TextLinkProps } from './components/TextLink'
export { Arrow, type ArrowProps } from './components/Arrow'

// データの表示
export { Badge, type BadgeProps } from './components/Badge'
export { Card, LinkCard, CardGrid, type CardProps, type LinkCardProps, type CardGridProps } from './components/Card'
export { RowList, Row, type RowListProps, type RowProps } from './components/RowList'
export { EventRow, formatEventDate, type EventRowProps, type EventStatus } from './components/EventRow'
export { InfoList, type InfoListProps } from './components/InfoList'
export { EmptyState, type EmptyStateProps } from './components/EmptyState'
export { Accordion, type AccordionItem, type AccordionProps } from './components/Accordion'
export { Tabs, type TabItem, type TabsProps } from './components/Tabs'
export { Dialog, type DialogProps } from './components/Dialog'

// ページの部品
export { SiteHeader, type SiteHeaderProps, type NavItem } from './components/SiteHeader'
export { SiteFooter, type SiteFooterProps, type FooterColumn, type FooterLink } from './components/SiteFooter'
export { Hero, Muted, type HeroProps } from './components/Hero'
export { PageHero, type PageHeroProps } from './components/PageHero'
export { Statement, type StatementProps } from './components/Statement'
export { Split, type SplitProps } from './components/Split'
export { CallToAction, type CallToActionProps } from './components/CallToAction'
export { Reveal, type RevealProps } from './components/Reveal'
