# Master photographs

Full-resolution originals. **Not published** — Vite only copies `public/`, so
nothing in here is shipped to the browser or included in `dist/`.

These are the encode sources. To regenerate the web assets:

```bash
npm run optimize:images
```

That writes WebP into `public/images/`, which is what `src/data/images.js`
points at. Adding a new photograph means dropping the master here, running the
script, and setting `src: 'images/<name>.webp'` on the matching slot.

Never edit the files in `public/images/` by hand — they are build output and
the next run of the script will overwrite them.

| Master | Size | Encoded to |
|---|---|---|
| `sai-sanju-white-training-car-wide.png` | 1448 × 1086, 2818 KB | `public/images/sai-sanju-white-training-car-wide.webp` — 332 KB |
| `sai-sanju-red-training-car-wide.png` | 1448 × 1086, 2543 KB | `public/images/sai-sanju-red-training-car-wide.webp` — 247 KB |
