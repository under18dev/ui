import { PageHero, SiteHeader } from '../../src'

export default function SiteHeaderDemo() {
  return (
    <>
      <SiteHeader
        items={[
          { href: 'https://under18.dev/about/', label: '団体について' },
          { href: 'https://under18.dev/events/', label: 'イベント' },
          { href: 'https://under18.dev/support/', label: '支援する' },
        ]}
        cta={{ href: 'https://under18.dev/join/', label: '参加する' }}
      />
      {/* スマホのメニューは、ヘッダーの下からプレビューの下端までを覆う */}
      <div style={{ padding: '48px 24px' }}>
        <PageHero eyebrow="Events" title="イベント">
          <p>LT会や交流会など、Under18 Developersが開催・共催したイベントです。</p>
        </PageHero>
      </div>
    </>
  )
}
