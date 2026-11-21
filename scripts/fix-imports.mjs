// tsc は相対 import に拡張子を付けないので、Node.js と webpack（Next.js）で解決できるよう .js を付ける
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    return statSync(path).isDirectory() ? walk(path) : [path]
  })

for (const file of walk('dist').filter((path) => /\.(js|d\.ts)$/.test(path))) {
  const source = readFileSync(file, 'utf8')
  const fixed = source.replace(/(from\s+|import\s*\(\s*)(['"])(\.{1,2}\/[^'"]+?)(?<!\.js)\2/g, '$1$2$3.js$2')
  if (fixed !== source) writeFileSync(file, fixed)
}
