import { SiteFooter } from '../../src'

export default function SiteFooterDemo() {
  return (
    <SiteFooter
      tagline="作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。"
      columns={[
        {
          title: 'コミュニティ',
          links: [
            { href: 'https://under18.dev/about/', label: '団体について' },
            { href: 'https://under18.dev/news/', label: 'お知らせ' },
            { href: 'https://under18.dev/events/', label: 'イベント' },
            { href: 'https://under18.dev/join/', label: '参加・登壇ガイド' },
          ],
        },
        {
          title: '支援',
          links: [
            { href: 'https://under18.dev/support/', label: 'スポンサー・協賛・寄付' },
            { href: 'https://under18.dev/reports/', label: '会計報告' },
            { href: 'https://under18.dev/press/', label: 'プレスキット' },
          ],
        },
      ]}
      social={[
        { href: 'https://github.com/under18dev', label: 'GitHub' },
        { href: 'https://www.youtube.com/channel/UCdFl5aaezIAVW38NoyrA9qA', label: 'YouTube' },
        { href: 'https://x.com/under18dev', label: 'X' },
        { href: 'https://under18dev.connpass.com', label: 'connpass' },
      ]}
    />
  )
}
