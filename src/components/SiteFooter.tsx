import type { CSSProperties, ReactNode } from 'react'
import { BaseLink, opensInNewTab } from '../lib/link'

export interface FooterLink {
  href: string
  label: string
  /** 新しいタブで開く。未指定なら http(s) の外部リンクだけ */
  external?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface SiteFooterProps {
  name?: string
  /** 団体の一文説明 */
  tagline?: ReactNode
  columns: FooterColumn[]
  /** 下段に並べる SNS・連絡先 */
  social?: FooterLink[]
  /** 著作権表記。省略すると「© 今年 name」 */
  copyright?: ReactNode
}

/** サイトのフッター。団体名と一文説明、ページへのリンク、SNS、著作権表記 */
export function SiteFooter({ name = 'Under18 Developers', tagline, columns, social = [], copyright }: SiteFooterProps) {
  const renderLink = (link: FooterLink) => (
    <li key={`${link.href}-${link.label}`}>
      <BaseLink href={link.href} external={link.external} className="u18-footer__link">
        {link.label}
        {opensInNewTab(link.href, link.external) && <span aria-hidden="true">&nbsp;↗</span>}
      </BaseLink>
    </li>
  )

  return (
    <footer className="u18-footer">
      <div className="u18-container u18-footer__inner">
        <div className="u18-footer__grid" style={{ '--footer-columns': columns.length } as CSSProperties}>
          <div className="u18-footer__brand">
            <p className="u18-footer__name">{name}</p>
            {tagline && <p className="u18-footer__tagline">{tagline}</p>}
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="u18-footer__column-title">{column.title}</p>
              <ul className="u18-footer__links">{column.links.map(renderLink)}</ul>
            </div>
          ))}
        </div>
        <div className="u18-footer__bottom">
          {social.length > 0 && <ul className="u18-footer__social">{social.map(renderLink)}</ul>}
          <p className="u18-footer__copyright">{copyright ?? `© ${new Date().getFullYear()} ${name}`}</p>
        </div>
      </div>
    </footer>
  )
}
