import { Button, CallToAction } from '../../src'

export default function CallToActionDemo() {
  return (
    <CallToAction
      id="cta-demo"
      title={
        <>
          次の「やってみたい」を、
          <br />
          ここから。
        </>
      }
      action={
        <Button href="https://under18.dev/join/" arrow>
          参加方法を見る
        </Button>
      }
    />
  )
}
