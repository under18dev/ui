import { useEffect, useState } from 'react'
import {
  Accordion,
  Badge,
  Button,
  ButtonGroup,
  CallToAction,
  Card,
  CardGrid,
  Container,
  Dialog,
  EmptyState,
  EventRow,
  Heading,
  Hero,
  InfoList,
  LinkCard,
  Muted,
  PageHero,
  Prose,
  Reveal,
  Row,
  RowList,
  Section,
  SectionHeading,
  SiteFooter,
  SiteHeader,
  SkipLink,
  Split,
  Statement,
  Tabs,
  Text,
  TextLink,
  ThemeProvider,
  formatEventDate,
} from '../../src'
import { eventHref, eventStatus, events, links } from './data'

// 見本はハッシュでページを切り替える（#/、#/events、#/components）
function useHashPath(): string {
  const read = () => window.location.hash.replace(/^#/, '') || '/'
  const [path, setPath] = useState(read)
  useEffect(() => {
    const onChange = () => {
      setPath(read())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return path
}

const titles: Record<string, string> = {
  '/': 'Under18 Developers UI — 見本',
  '/events': 'イベント | Under18 Developers UI — 見本',
  '/components': 'コンポーネント一覧 | Under18 Developers UI — 見本',
}

export function App() {
  const path = useHashPath()
  const page = path in titles ? path : '/'

  useEffect(() => {
    document.title = titles[page]
  }, [page])

  return (
    <ThemeProvider>
      <SkipLink />
      <SiteHeader
        homeHref="#/"
        currentPath={page === '/' ? undefined : `#${page}`}
        items={[
          { href: '#/events', label: 'イベント' },
          { href: '#/components', label: 'コンポーネント' },
        ]}
        cta={{ href: links.join, label: '参加する' }}
      />
      <main id="main" tabIndex={-1}>
        {page === '/' && <HomePage />}
        {page === '/events' && <EventsPage />}
        {page === '/components' && <ComponentsPage />}
      </main>
      <SiteFooter
        tagline="作ることが好きな人が、年齢に関係なくつながって挑戦する技術コミュニティです。"
        columns={[
          {
            title: '見本',
            links: [
              { href: '#/', label: 'トップ' },
              { href: '#/events', label: 'イベント' },
              { href: '#/components', label: 'コンポーネント一覧' },
            ],
          },
          {
            title: 'Under18 Developers',
            links: [
              { href: links.about, label: '団体について' },
              { href: links.join, label: '参加・登壇ガイド' },
              { href: links.support, label: '支援する' },
            ],
          },
        ]}
        social={[
          { href: links.github, label: 'GitHub' },
          { href: links.youtube, label: 'YouTube' },
          { href: links.x, label: 'X' },
          { href: links.connpass, label: 'connpass' },
        ]}
      />
    </ThemeProvider>
  )
}

// ===== トップ（design.md §8 の S01〜S08 を部品だけで組む） =====
function HomePage() {
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
            <Button href="#activities">活動を見る</Button>
            <Button href={links.about} variant="secondary">
              団体について
            </Button>
          </>
        }
        scrollTargetId="questions"
      />

      {/* S02 問い */}
      <Section id="questions" aria-label="問いかけ">
        <Reveal as="p" className="u18-type-lead u18-tone-secondary">
          でも、何かを始めようとすると、こんな言葉に出会う。
        </Reveal>
        <Reveal as="p" index={1} className="u18-type-h2" style={{ marginTop: 40, maxWidth: '18em' }}>
          作ってみたい。人に会いたい。何かを変えたい。
          <br />
          <Muted>なのに、</Muted>「まだ早い」<Muted>で終わらせるの？</Muted>
        </Reveal>
      </Section>

      {/* S03 場面（挿絵は装飾なので aria-hidden） */}
      <Split
        id="create"
        eyebrow="01 / Create"
        title={
          <>
            作りたいものがある。
            <br />
            でも、何から始めれば？
          </>
        }
        body="アイデアはある。検索もした。だけど、最初の一歩がいちばん難しい。"
        visual={
          <Card padding="lg" aria-hidden="true">
            <Text variant="small" tone="muted" className="u18-mono">
              my-first-project / README.md
            </Text>
            <Heading level={3} size="h4" style={{ marginTop: 16 }}>
              作りたいもの
            </Heading>
          </Card>
        }
      />
      <Split
        id="connect"
        reverse
        eyebrow="02 / Connect"
        title={
          <>
            同じ話ができる仲間、
            <br />
            どこにいるんだろう？
          </>
        }
        body="学校ではちょっと浮いてしまう話も、誰かとなら、何時間でも話していたい。"
      />

      {/* S04 反転 */}
      <Statement
        id="reveal"
        tight
        kicker="そんなあなたのための場所。"
        title={
          <>
            Under18
            <br />
            Developers.
          </>
        }
        body="作ることが好きな人が、つながって、挑戦する。年齢に関係なく、知らない世界に踏み出せるコミュニティ。"
      />

      {/* S05 原則 */}
      <Section aria-labelledby="principles-heading">
        <SectionHeading id="principles-heading" eyebrow="Principles" title="大切にしていること" />
        <RowList as="ol" className="u18-mt-16">
          <Row size="statement" index="01" title="作る。" description="アイデアを試し、動くものとして形にする。" reveal />
          <Row size="statement" index="02" title="話す。" description="好きな技術や、自分が見ている世界を共有する。" reveal />
          <Row
            size="statement"
            index="03"
            title="つながる。"
            description="年齢や肩書きの違いを越えて、同じ興味を持つ人と出会う。"
            reveal
          />
        </RowList>
      </Section>

      {/* S06 実際の活動 */}
      <Section id="activities" tone="section" bordered aria-labelledby="activities-heading">
        <SectionHeading
          id="activities-heading"
          eyebrow="Activities"
          title={
            <>
              やってみたい、が
              <br />
              動き出す場所。
            </>
          }
          lead="Under18 Developersでは、技術をきっかけに人が出会い、学び、つくるための活動をしています。"
        />
        <RowList className="u18-mt-16">
          <Row
            layout="split"
            title="LT会・技術イベント"
            description="学校や地域のコミュニティと共催で、LT会や交流会を開いています。話すのが初めてでも、聞くだけでも参加できます。"
            href="#/events"
            actionLabel="イベントを見る"
            reveal
          />
          <Row
            layout="split"
            title="YouTube での発信"
            description="イベントの配信やアーカイブ、技術にまつわるコンテンツを公開しています。"
            href={links.youtube}
            actionLabel="YouTube を開く"
            reveal
          />
          <Row
            layout="split"
            title="オープンソース"
            description="イベントの Web サイトや、Markdown からスライドを作るツールなど、作ったものを GitHub で公開しています。"
            href={links.github}
            actionLabel="GitHub を開く"
            reveal
          />
        </RowList>
      </Section>

      {/* S07 参加の入口 */}
      <Section aria-labelledby="participate-heading">
        <SectionHeading
          id="participate-heading"
          eyebrow="Get started"
          title="はじめかたは、シンプル。"
          lead="特別な実績がなくても大丈夫。気になるところから始めてください。"
        />
        <RowList className="u18-mt-16">
          <Row title="イベントに参加する" description="参加方法と、LT会での登壇の流れ。" href={links.join} reveal />
          <Row title="プロジェクトを見てみる" description="GitHub で公開しているリポジトリ。" href={links.github} reveal />
          <Row title="連絡・協力を相談する" description="協賛・共催・会場の提供などのご相談。" href={links.support} reveal />
        </RowList>
      </Section>

      {/* S08 最後の呼びかけ */}
      <CallToAction
        id="final"
        title={
          <>
            次の「やってみたい」を、
            <br />
            ここから。
          </>
        }
        action={
          <Button href={links.join} arrow>
            参加方法を見る
          </Button>
        }
      />
    </>
  )
}

// ===== イベント一覧（下層ページの見本） =====
function EventsPage() {
  const upcoming = events.filter((event) => eventStatus(event) !== 'ended')
  const past = events.filter((event) => eventStatus(event) === 'ended')
  const list = (items: typeof events) =>
    items.length > 0 ? (
      <RowList>
        {items.map((event) => (
          <EventRow
            key={event.id}
            href={eventHref(event)}
            title={event.title}
            description={event.description}
            date={event.date}
            status={eventStatus(event)}
            venue={event.venue}
            headingLevel={2}
          />
        ))}
      </RowList>
    ) : (
      <EmptyState
        title="開催予定のイベントはまだありません"
        description="決まり次第、connpass でお知らせします。"
        action={<TextLink href={links.connpass} strong arrow>connpass をフォローする</TextLink>}
      />
    )

  return (
    <Section>
      <PageHero eyebrow="Events" title="イベント">
        <p>LT会や交流会など、Under18 Developersが開催・共催したイベントです。</p>
      </PageHero>
      <div className="u18-mt-16">
        <Tabs
          label="イベントの種類"
          items={[
            { id: 'upcoming', label: `開催予定（${upcoming.length}）`, content: list(upcoming) },
            { id: 'past', label: `開催済み（${past.length}）`, content: list(past) },
          ]}
        />
      </div>
    </Section>
  )
}

// ===== コンポーネント一覧 =====
function ComponentsPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const next = events[0]

  return (
    <>
      <Section>
        <PageHero eyebrow="Components" title="コンポーネント一覧">
          <p>
            design.md（U18-DESIGN-001）と DECISION-001〜008 に沿った部品です。色は無彩色のトークンだけを使い、ライトとダークで同じ意味になります。
          </p>
        </PageHero>
      </Section>

      <Section bordered aria-labelledby="typography-heading">
        <SectionHeading id="typography-heading" eyebrow="Typography" title="文字の大きさ" />
        <div className="u18-stack u18-mt-12">
          <Heading level={3} size="display-l">
            Display L 大きな見出し
          </Heading>
          <Heading level={3} size="h1">
            H1 ページの見出し
          </Heading>
          <Heading level={3} size="h2">
            H2 章の見出し
          </Heading>
          <Heading level={3} size="h3">
            H3 小見出し
          </Heading>
          <Text variant="lead" measure>
            Lead リード文。章の最初に置いて、内容を短くまとめます。
          </Text>
          <Text measure>Body 本文。1行は全角30〜42文字を目安にし、行間は1.85にします。</Text>
          <Text variant="small" tone="muted">
            Small 補足やメタ情報。
          </Text>
        </div>
      </Section>

      <Section bordered aria-labelledby="buttons-heading">
        <SectionHeading id="buttons-heading" eyebrow="Actions" title="ボタンとリンク" />
        <div className="u18-stack u18-mt-12">
          <ButtonGroup>
            <Button>主要な操作</Button>
            <Button variant="secondary">補助の操作</Button>
            <Button href="#/events" arrow>
              イベントを見る
            </Button>
            <Button href={links.github} variant="secondary" arrow>
              GitHub
            </Button>
            <Button disabled>受付終了</Button>
          </ButtonGroup>
          <Text>
            文中のリンクは<TextLink href="#/events">下線で識別</TextLink>できます。単独で置くリンクは
            <TextLink href="#/events" strong arrow>
              すべてのイベントを見る
            </TextLink>
            のように太字と矢印を付けます。
          </Text>
        </div>
      </Section>

      <Section bordered aria-labelledby="badges-heading">
        <SectionHeading id="badges-heading" eyebrow="Status" title="状態のラベル" />
        <div className="u18-cluster u18-mt-12">
          <Badge>開催予定</Badge>
          <Badge variant="solid">開催中</Badge>
          <Badge variant="muted">開催済み</Badge>
        </div>
      </Section>

      <Section bordered aria-labelledby="cards-heading">
        <SectionHeading
          id="cards-heading"
          eyebrow="Cards"
          title="カード"
          lead="カードは、イベントなど実際の異なるデータを並べるときだけ使います。"
        />
        <CardGrid className="u18-mt-12">
          {events.map((event) => (
            <LinkCard
              key={event.id}
              as="li"
              href={eventHref(event)}
              title={event.title}
              description={event.description}
              meta={
                <>
                  <time dateTime={event.date} className="u18-mono">
                    {formatEventDate(event.date)}
                  </time>
                  <Badge variant={eventStatus(event) === 'ended' ? 'muted' : 'outline'}>
                    {eventStatus(event) === 'ended' ? '開催済み' : '開催予定'}
                  </Badge>
                </>
              }
              actionLabel="詳しく見る"
            />
          ))}
        </CardGrid>
        <CardGrid columns={3} as="div" className="u18-mt-12">
          <Card padding="md">
            <Text tone="primary">paper（標準）</Text>
          </Card>
          <Card padding="md" variant="flat">
            <Text tone="primary">flat</Text>
          </Card>
          <Card padding="md" variant="outline">
            <Text tone="primary">outline</Text>
          </Card>
        </CardGrid>
      </Section>

      <Section bordered aria-labelledby="info-heading">
        <SectionHeading id="info-heading" eyebrow="Details" title="開催概要" />
        <InfoList
          className="u18-mt-12"
          items={[
            { term: 'イベント', detail: next.title },
            {
              term: '日時',
              detail: <time dateTime={next.date}>{formatEventDate(next.date)} 18:30〜21:30</time>,
            },
            { term: '会場', detail: next.venue },
            { term: '主催', detail: 'Under18 Developers' },
          ]}
        />
      </Section>

      <Section bordered aria-labelledby="faq-heading">
        <SectionHeading id="faq-heading" eyebrow="FAQ" title="開閉リストとダイアログ" />
        <Accordion
          className="u18-mt-12"
          name="faq"
          items={[
            {
              summary: 'JS が動かなくても開閉できますか？',
              content: 'はい。details と summary の要素を使っているので、JS がなくても開閉できます。',
            },
            {
              summary: '色は何色を使っていますか？',
              content: '白・黒・グレーの無彩色だけです。ライトとダークで、同じ明暗の階層になるように揃えています。',
            },
          ]}
        />
        <div className="u18-mt-12">
          <Button variant="secondary" onClick={() => setDialogOpen(true)}>
            ダイアログを開く
          </Button>
        </div>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="ダイアログ">
          <Text>Escape、背景のクリック、閉じるボタンで閉じます。閉じると、開いたボタンにフォーカスが戻ります。</Text>
        </Dialog>
      </Section>

      <Section bordered aria-labelledby="prose-heading">
        <SectionHeading id="prose-heading" eyebrow="Prose" title="本文（Markdown）" />
        <Prose className="u18-mt-12">
          <h2>見出し</h2>
          <p>
            Markdown から変換した本文の見た目です。<a href="#/events">リンク</a>、<strong>強調</strong>、
            <code>inline code</code> を含みます。
          </p>
          <ul>
            <li>箇条書きの1つ目</li>
            <li>箇条書きの2つ目</li>
          </ul>
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>参加費</td>
                <td>無料</td>
              </tr>
            </tbody>
          </table>
        </Prose>
      </Section>

      <Section bordered aria-labelledby="empty-heading">
        <SectionHeading id="empty-heading" eyebrow="Empty" title="データがないとき" />
        <div className="u18-mt-12">
          <EmptyState
            headingLevel={3}
            title="お知らせはまだありません"
            description="架空の内容で埋めず、次に見てほしい場所を案内します。"
            action={
              <TextLink href="#/events" strong arrow>
                イベントを見る
              </TextLink>
            }
          />
        </div>
      </Section>

      <Container>
        <Text variant="small" tone="muted" className="u18-section-y">
          このページは部品の見本です。リンク先はすべて公開済みのページです。
        </Text>
      </Container>
    </>
  )
}
