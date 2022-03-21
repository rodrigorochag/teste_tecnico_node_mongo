#!/usr/bin/env node

const FS     = require('fs')
const globby = require('globby')
const r1     = /import\s+\{([^\}]+)\}\s+from\s+(['"][^\s]+['"])/g // import { } from ''
const r2     = /import\s+([^\{\}]+)\s+from\s+(['"][^\s]+['"])/g // import xxx from ''

const args = process.argv.slice(2)

if (!args.length) {
  console.error('Please pass a directory glob to "replace-import-with-require"\n')
  process.exit(1)
}

const paths = globby.sync(args)

paths.forEach(function (p) {
  if (!FS.statSync(p).isDirectory()) {
    return replaceInFile(p)
  }
})

function replaceInFile(fp) {
  const result = FS.writeFileSync(fp, FS.readFileSync(fp, 'utf-8')
    .replace(r2, `const $1 = require($2).default`)
    .replace(r1, `const { $1 } = require($2)`), 'utf-8')
  console.log(`> ${fp}`)
  return result
}

console.info('Done!\n')