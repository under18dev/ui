import type { ReactNode } from 'react'
import { ButtonGroup } from './Button'

export interface PageHeroProps {
  /** 見出しの上の英字ラベル（Events など） */
  eyebrow?: string
  title: ReactNode
  /** リード文。段落を複数渡してもよい */
  children?: ReactNode
  actions?: ReactNode
}

/** 下層ページの冒頭。ラベル・h1・リード文（design.md §5.2 の H1 と Lead） */
export function PageHero({ eyebrow, title, children, actions }: PageHeroProps) {
  return (
    <div>
      {eyebrow && <p className="u18-type-label u18-eyebrow">{eyebrow}</p>}
      <h1 className="u18-type-h1 u18-page-hero__title">{title}</h1>
      {children && <div className="u18-type-lead u18-measure u18-page-hero__lead">{children}</div>}
      {actions && <ButtonGroup className="u18-page-hero__actions">{actions}</ButtonGroup>}
    </div>
  )
}
