import { Section, SectionHeading } from '../../src'

export default function SectionBordered() {
  return (
    <>
      <Section aria-label="大切にしていること">
        <SectionHeading eyebrow="Principles" title="大切にしていること" />
      </Section>
      {/* 同じ背景の章が続くときは、上に 1px の線を入れて区切る */}
      <Section bordered aria-label="はじめかた">
        <SectionHeading
          eyebrow="Get started"
          title="はじめかたは、シンプル。"
          lead="特別な実績がなくても大丈夫。気になるところから始めてください。"
        />
      </Section>
    </>
  )
}
