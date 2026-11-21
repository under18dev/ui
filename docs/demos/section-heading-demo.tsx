import { SectionHeading } from '../../src'

export default function SectionHeadingDemo() {
  return (
    <SectionHeading
      eyebrow="Activities"
      title={
        <>
          やってみたい、が
          <br />
          動き出す場所。
        </>
      }
      lead="Under18 Developersでは、技術をきっかけに人が出会い、学び、つくるための活動をしています。"
    />
  )
}
