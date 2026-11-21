import { SectionHeading, TextLink } from '../../src'

export default function SectionHeadingAction() {
  return (
    <SectionHeading
      eyebrow="Events"
      title="イベント"
      action={
        <TextLink href="https://under18dev.connpass.com" strong arrow>
          connpass で見る
        </TextLink>
      }
    />
  )
}
