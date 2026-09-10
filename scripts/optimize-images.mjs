/* ============================================================================
 *  optimize-images.mjs — encode the master photographs to web-ready WebP.
 *
 *    npm run optimize:images
 *
 *  Masters live in  assets/originals/  (NOT published — Vite only copies
 *  public/), and the encoded files land in  public/images/  where the
 *  ImageSlot registry in src/data/images.js points at them.
 *
 *  This is deliberately NOT part of `npm run build`: the photographs change
 *  maybe once a year, and re-encoding 2.8 MB PNGs on every build (and needing
 *  sharp installed on CI) would cost far more than it saves. Run it by hand
 *  whenever a master photo is added or replaced, and commit the result.
 *
 *  QUALITY — 82, effort 6, no chroma subsampling.
 *  Chosen by measurement, not by feel. At q82 the two training-car photos land
 *  at 332 KB and 247 KB (down from 2818 KB and 2543 KB) at 35.0 dB and 37.1 dB
 *  PSNR. Going to q88 costs another ~180 KB for +1.5 dB, and — checked at 2x
 *  zoom on the SAI SANJU roof board, the finest detail in the frame — buys no
 *  visible difference in the licence number or phone number. Chroma
 *  subsampling stays off because that board is small saturated red/yellow/blue
 *  text, which is exactly what 4:2:0 smears.
 *
 *  Dimensions and composition are never touched: no resize, no crop.
 * ========================================================================== */

import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const SRC_DIR = 'assets/originals'
const OUT_DIR = 'public/images'
const QUALITY = 82

const kb = (n) => (n / 1024).toFixed(0).padStart(5) + ' KB'

if (!fs.existsSync(SRC_DIR)) {
  console.error(`No ${SRC_DIR}/ directory — nothing to optimize.`)
  process.exit(1)
}

const masters = fs
  .readdirSync(SRC_DIR)
  .filter((f) => /\.(png|jpe?g)$/i.test(f))
  .sort()

if (!masters.length) {
  console.log(`No master images in ${SRC_DIR}/.`)
  process.exit(0)
}

let before = 0
let after = 0

for (const file of masters) {
  const src = path.join(SRC_DIR, file)
  const out = path.join(OUT_DIR, file.replace(/\.(png|jpe?g)$/i, '.webp'))

  const input = fs.readFileSync(src)
  const meta = await sharp(input).metadata()

  const encoded = await sharp(input)
    .webp({ quality: QUALITY, effort: 6, smartSubsample: true, chromaSubsampling: '4:4:4' })
    .toBuffer()

  fs.writeFileSync(out, encoded)
  before += input.length
  after += encoded.length

  console.log(
    `${file.padEnd(40)} ${meta.width}x${meta.height}  ` +
      `${kb(input.length)} -> ${kb(encoded.length)}  ` +
      `(${(100 - (encoded.length / input.length) * 100).toFixed(1)}% smaller)  -> ${out}`,
  )
}

console.log(
  `\n${masters.length} image(s): ${kb(before)} -> ${kb(after)} ` +
    `(${(100 - (after / before) * 100).toFixed(1)}% smaller)`,
)
