import { Section, SectionHeading } from '../../src'

export default function SectionDemo() {
  return (
    <Section tone="section" aria-label="活動">
      <SectionHeading
        eyebrow="Activities"
        title="やってみたい、が動き出す場所。"
        lead="Under18 Developersでは、技術をきっかけに人が出会い、学び、つくるための活動をしています。"
      />
    </Section>
  )
}
