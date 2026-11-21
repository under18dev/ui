import { Button, CallToAction } from '../../src'

export default function CallToActionBody() {
  return (
    <CallToAction
      id="cta-demo-support"
      tone="canvas"
      title="Under18 Developersを応援する"
      body="イベントの会場、機材、運営にかかる費用は、皆さまのご支援に支えられています。"
      action={
        <Button href="https://under18.dev/support/" arrow>
          支援の方法を見る
        </Button>
      }
    />
  )
}
