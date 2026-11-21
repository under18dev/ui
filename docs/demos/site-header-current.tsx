import { SiteHeader } from '../../src'

export default function SiteHeaderCurrent() {
  return (
    <SiteHeader
      // イベントのページを開いているときの表示。/events/ の下のページでも「イベント」に印が付く
      currentPath="https://under18.dev/events/"
      items={[
        { href: 'https://under18.dev/about/', label: '団体について' },
        { href: 'https://under18.dev/events/', label: 'イベント' },
        { href: 'https://under18.dev/support/', label: '支援する' },
      ]}
      cta={{ href: 'https://under18.dev/join/', label: '参加する' }}
    />
  )
}
