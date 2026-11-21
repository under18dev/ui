// CSS は tsc では出力されないので、dist にコピーする
import { cpSync } from 'node:fs'

cpSync('src/styles', 'dist', { recursive: true })
