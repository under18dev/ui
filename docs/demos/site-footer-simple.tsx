import { SiteFooter } from '../../src'

export default function SiteFooterSimple() {
  return (
    <SiteFooter
      columns={[
        {
          title: 'Under18 Developers',
          links: [
            { href: 'https://under18.dev/', label: 'トップページ' },
            { href: 'https://under18.dev/events/', label: 'イベント' },
          ],
        },
      ]}
      copyright="© Under18 Developers"
    />
  )
}
