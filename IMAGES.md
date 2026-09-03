# Image guide — Om Sai Sanju Motor Driving School

Every image on the site is declared in one file: [`src/data/images.js`](src/data/images.js).
Nothing else needs editing.

## How to add an image

1. Export the photo and drop it into `public/images/`
   — e.g. `public/images/hero-driving-lesson.jpg`
2. Open `src/data/images.js`, find the slot, and set its `src`:

   ```js
   'hero-driving-lesson': {
     src: 'images/hero-driving-lesson.jpg',   // was: null
     alt: 'A learner driver at the wheel …',  // adjust if the photo differs
     …
   },
   ```

3. Run `npm run build` (or `npm run dev` to preview live).

Until `src` is set, the slot renders a designed placeholder that occupies the
**exact** aspect ratio and crop the photo will take, so nothing on the page moves
when you swap it in.

## Useful details

- **Format** — JPG for photographs, WebP if you want smaller files. Both work.
- **Crop** — the image is `object-fit: cover`. Adjust the `position` field
  (e.g. `'center 30%'`) if the subject sits high or low in the frame.
- **Alt text** — already written for every slot. Update it if your final photo
  shows something different; it is what screen-reader users hear.
- **Loading** — everything below the fold is lazy-loaded automatically. The hero
  is eager-loaded and marked high priority.
- **Inspect slots in the browser** — append `?slots` to the URL
  (e.g. `http://localhost:5173/?slots`) to overlay each slot's id and
  recommended size on the page. Normal visitors never see these labels.
- **Social share image** — `public/images/og-share.jpg` at **1200 × 630**.
  Referenced from the `og:image` tags in `index.html`.

## Every slot

| Slot id | Appears in | Aspect ratio | Recommended export | What the photograph should show |
| --- | --- | --- | --- | --- |
| `hero-driving-lesson` | Hero | 4 / 5 (mobile 4 / 3) | 1400 × 1750 | Hero. Learner in the driver seat, hands at 9-and-3, instructor in the passenger seat. Shot through the windscreen or open window, warm late-afternoon light, shallow depth of field. |
| `about-school` | About | 3 / 2 | 1600 × 1067 | About. Wide, calm establishing shot of the academy — office frontage or the training fleet lined up. Should feel established and well-kept, not glossy. |
| `training-beginner` | Never Driven Before? | 4 / 3 | 1400 × 1050 | Beginner training. Human and reassuring: instructor explaining the controls, learner listening. Eye contact, relaxed posture, car stationary. |
| `training-manual` | What You’ll Learn — gallery 1 | 4 / 5 | 900 × 1125 | Manual driving. Tight detail — hand on the gear lever, or foot over the clutch. Interior light, mechanical and tactile. |
| `training-automatic` | What You’ll Learn — gallery 2 | 4 / 5 | 900 × 1125 | Automatic driving. Automatic gear selector detail, or a relaxed two-handed grip on the wheel. Clean, uncluttered interior. |
| `training-road` | What You’ll Learn — gallery 3 | 4 / 5 | 900 × 1125 | Road training. Driver point of view through the windscreen on a real road, or a side-on shot of the car in motion. Sense of traffic, but calm. |
| `training-parking` | What You’ll Learn — gallery 4 | 4 / 5 | 900 × 1125 | Parking training. Reverse or parallel parking in progress — driver looking over the shoulder, or a top-down view of the car between bay lines. |
| `vehicle-manual` | Training Vehicles | 16 / 10 | 1600 × 1000 | Manual training vehicle. Front three-quarter, clean background, school livery visible. Automotive-catalogue framing, car filling the frame width. |
| `vehicle-automatic` | Training Vehicles | 16 / 10 | 1600 × 1000 | Automatic training vehicle. Same angle, lighting and distance as the manual car so the pair reads as a set. |
| `safety-training` | Drive Safely. Drive Responsibly. | 16 / 9 (mobile 4 / 3) | 1920 × 1080 | Safety training. Wide and slightly technical — mirror check, cones on a practice ground, or a wet road at dusk. Cooler colour temperature than the other images. |
| `learner-student` | Learner Reviews | 3 / 4 | 900 × 1200 | Student portrait. Genuine, unposed, natural light. Someone in their twenties or thirties beside the car, keys or licence in hand. |
| `cta-final` | Ready to Get Behind the Wheel? | 3 / 2 (mobile 16 / 9) | 1600 × 1067 | Final call to action. Forward-looking and optimistic — car pulling away, open road ahead, or a driver adjusting the mirror before setting off. |
| `og-share` | Social sharing (not on the page) | 1.91 / 1 | 1200 × 630 | Open Graph card. Car and learner, plenty of headroom, no text baked in. |

## Art direction, in one line

Warm natural light, real Indian streets, no stock-photo smiles. The four
gallery shots should read as one set; the three instructor portraits should be
shot identically (same backdrop, same lens, same light).
