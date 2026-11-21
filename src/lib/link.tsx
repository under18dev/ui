'use client'

import { createContext, forwardRef, useContext, type AnchorHTMLAttributes, type ComponentType, type ReactNode, type Ref } from 'react'

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  ref?: Ref<HTMLAnchorElement>
}

/**
 * 内部リンクの描画に使うコンポーネント。Next.js の Link などを渡すと、
 * Button・TextLink・SiteHeader などがすべてそのコンポーネントで内部リンクを描く。
 */
const LinkContext = createContext<ComponentType<LinkComponentProps> | 'a'>('a')

export function LinkProvider({
  component,
  children,
}: {
  component: ComponentType<LinkComponentProps>
  children: ReactNode
}) {
  return <LinkContext.Provider value={component}>{children}</LinkContext.Provider>
}

/** http(s):// や mailto: など、別のサイトへのリンクか */
export function isExternalHref(href: string): boolean {
  return /^(?:[a-z][a-z\d+\-.]*:)?\/\//i.test(href) || /^(?:mailto|tel):/i.test(href)
}

export type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  /** 新しいタブで開く。未指定なら href から判断する（http(s) のリンクは新しいタブ） */
  external?: boolean
}

/**
 * すべてのリンクの土台。外部リンクは新しいタブで開き、
 * スクリーンリーダー向けに「（新しいタブで開く）」を読み上げる。
 */
export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(function BaseLink(
  { href, external, children, ...rest },
  ref,
) {
  const Link = useContext(LinkContext)
  if (opensInNewTab(href, external)) {
    return (
      <a ref={ref} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="u18-sr-only">（新しいタブで開く）</span>
      </a>
    )
  }
  if (Link === 'a' || isExternalHref(href)) {
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link ref={ref} href={href} {...rest}>
      {children}
    </Link>
  )
})

/** 新しいタブで開くか。external の指定がなければ、http(s) の外部リンクだけ新しいタブにする */
export function opensInNewTab(href: string | undefined, external?: boolean): boolean {
  if (!href) return false
  return external ?? (isExternalHref(href) && !/^(?:mailto|tel):/i.test(href))
}
