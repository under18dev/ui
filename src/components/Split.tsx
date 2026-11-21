import { useId, type ReactNode } from 'react'
import { Reveal } from './Reveal'

export interface SplitProps {
  /** 英字の小さなラベル（01 / CREATE など、意味のある順番のときだけ） */
  eyebrow?: string
  title: ReactNode
  body?: ReactNode
  /** 右側に置く実例・挿絵。装飾なら aria-hidden を付けて渡す */
  visual?: ReactNode
  /** 文と挿絵を左右入れ替える（PC） */
  reverse?: boolean
  id?: string
}

/**
 * 短い文と、実際の活動資料・挿絵を1点だけ並べる章。
 * スマホでは文 → 挿絵の順に縦に積む。スクロールを奪わない。
 */
export function Split({ eyebrow, title, body, visual, reverse = false, id }: SplitProps) {
  const fallbackId = useId()
  const headingId = id ? `${id}-heading` : fallbackId
  return (
    <section id={id} className="u18-container u18-split" data-reverse={reverse || undefined} aria-labelledby={headingId}>
      <Reveal className="u18-split__copy">
        {eyebrow && <p className="u18-type-label u18-eyebrow">{eyebrow}</p>}
        <h2 id={headingId} className="u18-type-h2 u18-split__copy-title">
          {title}
        </h2>
        {body && <p className="u18-type-body u18-split__copy-body">{body}</p>}
      </Reveal>
      {visual && <Reveal index={1}>{visual}</Reveal>}
    </section>
  )
}
