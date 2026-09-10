# Image guide — Om Sai Sanju Motor Driving School

Every image on the site is declared in one file: [`src/data/images.js`](src/data/images.js).
Nothing else needs editing.

All slots below use **real photos** of the school (office storefront, office
interior, and the three actual training cars) — no AI-generated or stock
placeholders remain. Several slots intentionally reuse the same photo where a
dedicated real photo for that exact moment (e.g. "manual gear lever detail",
"parking practice") doesn't exist yet. Swap any slot's `src` for a more
specific real photo as your library grows.

## How to add or swap an image

1. Export the photo and drop it into `public/images/`
2. Open `src/data/images.js`, find the slot, and update its `src` (and `alt`
   if the new photo shows something different)
3. Run `npm run build` (or `npm run dev` to preview live)

## Useful details

- **Crop** — images are `object-fit: cover`. Adjust the `position` field
  (e.g. `'center 30%'`) if the subject sits high or low in the frame.
- **Alt text** — describes what's actually in the photo; update it whenever
  you swap the photo.
- **Loading** — everything below the fold is lazy-loaded automatically. The
  hero is eager-loaded and marked high priority.
- **Inspect slots in the browser** — append `?slots` to the URL
  (e.g. `http://localhost:5173/?slots`) to overlay each slot's id and
  recommended size on the page.
- **Social share image** — the `og:image`/`twitter:image` tags and the
  `image` field in `index.html`'s structured data point directly at
  `images/office-front.jpeg` (not managed through the slot registry, since
  it's read outside of React).

## Every slot

| Slot id | Appears in | Real photo used |
| --- | --- | --- |
| `hero-driving-lesson` | Hero | Training car (`sai-sanju-white-training-car-wide.webp`) |
| `about-school` | About | School storefront (`office-front.jpeg`) |
| `office-interior` | Locations | Office interior (`office-interior.jpeg`) |
| `training-beginner` | Never Driven Before? | Office interior (`office-interior.jpeg`) |
| `vehicle-manual` | Training Vehicles | White training car (`sai-sanju-white-training-car-wide.webp`) |
| `vehicle-automatic` | Training Vehicles | Red training car (`sai-sanju-red-training-car-wide.webp`) |
| `safety-training` | Drive Safely. Drive Responsibly. | White training car (`sai-sanju-white-training-car-wide.webp`) |
| `review-real-car` | Learner Reviews | Training car (`sai-sanju-white-training-car-wide.webp`) |
| `service-driving-classes` | Our Services — 4-Wheeler Training | Red training car (`sai-sanju-red-training-car-wide.webp`) |
| `service-rta` | Our Services — Licences | School storefront (`office-front.jpeg`) |
| `service-contact` | Our Services — Vehicle Registration | Office interior (`office-interior.jpeg`) |
| `service-fancy-number` | Our Services — Fancy Number Allocation | White training car (`sai-sanju-white-training-car-wide.webp`) |
| `cta-final` | Ready to Get Behind the Wheel? | School storefront (`office-front.jpeg`) |
