import { Button, PageHero } from '../../src'

export default function PageHeroActions() {
  return (
    <PageHero
      eyebrow="Join"
      title="参加する・登壇する"
      actions={
        <Button href="https://under18dev.connpass.com" arrow>
          connpass でイベントを探す
        </Button>
      }
    >
      <p>Under18 Developersのイベントは、聞くだけでも、発表しても大丈夫です。はじめての方も歓迎しています。</p>
    </PageHero>
  )
}
