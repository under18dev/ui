import { forwardRef, type ReactNode } from 'react'
import { BaseLink, opensInNewTab, type BaseLinkProps } from '../lib/link'
import { cx } from '../lib/cx'
import { Arrow } from './Arrow'

export interface TextLinkProps extends BaseLinkProps {
  /** 太字にする（「すべてのイベントを見る」など、単独で置くリンク） */
  strong?: boolean
  /** 末尾に矢印を付ける */
  arrow?: boolean
  children: ReactNode
}

/** 文字のリンク。色だけに頼らず、下線で識別できるようにする */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(function TextLink(
  { strong, arrow, className, children, href, external, ...rest },
  ref,
) {
  return (
    <BaseLink
      ref={ref}
      href={href}
      external={external}
      className={cx('u18-link', arrow && 'u18-arrow-host', className)}
      data-weight={strong ? 'strong' : undefined}
      {...rest}
    >
      {children}
      {arrow && (
        <>
          {' '}
          <Arrow direction={opensInNewTab(href, external) ? 'external' : 'next'} />
        </>
      )}
    </BaseLink>
  )
})
