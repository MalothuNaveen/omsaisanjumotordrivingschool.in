/**
 * Regenerates the FAQPage structured-data block in index.html from the single
 * source of truth in src/data/site.js, so the two can never drift apart.
 * Runs automatically before every `npm run build`.
 */
import { readFile, writeFile } from 'node:fs/promises'
import { faqs } from '../src/data/site.js'

const START = '<!-- FAQ-SCHEMA:START -->'
const END = '<!-- FAQ-SCHEMA:END -->'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const block = [
  START,
  '    <script type="application/ld+json">',
  JSON.stringify(schema, null, 2)
    .split('\n')
    .map((line) => `      ${line}`)
    .join('\n'),
  '    </script>',
  `    ${END}`,
].join('\n')

const file = 'index.html'
const html = await readFile(file, 'utf8')

if (!html.includes(START) || !html.includes(END)) {
  throw new Error(`Missing ${START} / ${END} markers in ${file}`)
}

const next =
  html.slice(0, html.indexOf(START)) + block + html.slice(html.indexOf(END) + END.length)

if (next !== html) {
  await writeFile(file, next)
  console.log(`FAQ schema synced: ${faqs.length} questions`)
} else {
  console.log('FAQ schema already up to date')
}
