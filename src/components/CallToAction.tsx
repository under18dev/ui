import { useId, type ReactNode } from 'react'
import { ButtonGroup } from './Button'
import { Reveal } from './Reveal'
import { Section } from './Layout'

export interface CallToActionProps {
  title: ReactNode
  body?: ReactNode
  /** 主要な Button を1つだけ渡す */
  action: ReactNode
  tone?: 'canvas' | 'section'
  id?: string
}

/** ページの最後の静かな呼びかけ。フッター直前に強い CTA を2つ続けない */
export function CallToAction({ title, body, action, tone = 'section', id }: CallToActionProps) {
  const fallbackId = useId()
  const headingId = id ? `${id}-heading` : fallbackId
  return (
    <Section tone={tone} id={id} aria-labelledby={headingId} className="u18-cta">
      <Reveal as="h2" id={headingId} className="u18-type-display-l u18-cta__title">
        {title}
      </Reveal>
      {body && (
        <Reveal as="p" index={1} className="u18-type-lead u18-cta__body">
          {body}
        </Reveal>
      )}
      <Reveal index={1}>
        <ButtonGroup className="u18-cta__actions">{action}</ButtonGroup>
      </Reveal>
    </Section>
  )
}
