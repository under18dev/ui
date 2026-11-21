import { Prose } from '../../src'

export default function ProseTable() {
  return (
    <Prose>
      <h3>クリぼっちMeetup 2026</h3>
      <table>
        <thead>
          <tr>
            <th>項目</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>日時</td>
            <td>2026年12月24日 18:30〜21:30</td>
          </tr>
          <tr>
            <td>会場</td>
            <td>東京都内（会場は決まり次第お知らせします）</td>
          </tr>
        </tbody>
      </table>
    </Prose>
  )
}
