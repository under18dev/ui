import { Button, Hero, Muted, Section, Text } from '../../src'

export default function HeroDemo() {
  return (
    <>
      <Hero
        eyebrow="Under18 Developers"
        title={
          <>
            好きなことに、
            <br />
            年齢は<Muted>いらない。</Muted>
          </>
        }
        lead="作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。"
        actions={
          <>
            <Button href="https://under18.dev/events/">イベントを見る</Button>
            <Button href="https://under18.dev/about/" variant="secondary">
              団体について
            </Button>
          </>
        }
        scrollTargetId="hero-demo-next"
      />
      {/* スクロール案内の移動先 */}
      <Section id="hero-demo-next" tabIndex={-1} aria-label="問いかけ">
        <Text variant="lead" tone="secondary">
          でも、何かを始めようとすると、こんな言葉に出会う。
        </Text>
      </Section>
    </>
  )
}
