import { SiteHeader } from '../../src'

export default function SiteHeaderMinimal() {
  return (
    <SiteHeader
      themeControl={false}
      items={[
        { href: 'https://under18.dev/about/', label: '団体について' },
        { href: 'https://under18.dev/events/', label: 'イベント' },
      ]}
    />
  )
}
