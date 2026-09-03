# Om Sai Sanju Motor Driving School — website

A marketing site for Om Sai Sanju Motor Driving School (Alwal, Secunderabad),
built on a demo template. Business identity and contact details are real; course
prices, statistics, instructors and reviews are still **sample content** carried
over from the template and need to be replaced with real figures before launch.

Single page with anchored sections, plus two standalone legal pages.

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Syncs the FAQ structured data, then builds to `dist/` |
| `npm run preview` | Serves the built site on http://localhost:4173 |
| `npm run lint` | ESLint across the project |
| `npm run sync:seo` | Regenerates the FAQ JSON-LD in `index.html` from `src/data/site.js` |

Stack: **Vite + React 18 + plain CSS**. No UI framework, no CSS framework,
no icon package — nine dependencies in total, all of them build tooling.

---

## Where to edit things

Almost every change you will want to make lives in two files.

### `src/data/site.js` — all copy, prices and business details

Courses, prices, plans, instructors, reviews, FAQs, service areas, phone number,
WhatsApp number, opening hours, navigation labels, form dropdown options.
Nothing is hard-coded inside components.

```js
// Change a price — that is the whole edit
price: '₹4,999',
```

Changing the WhatsApp number in `contact.whatsappNumber` updates every WhatsApp
link on the site (header drawer, hero, FAQ, footer, sticky bar, floating button).
Editing `faqs` and running `npm run build` also updates the FAQ structured data.

### `src/data/images.js` — every image on the site

15 named slots, each with an aspect ratio, alt text, recommended export size and
an art-direction note. Set `src` to swap a placeholder for a real photo.
See **[IMAGES.md](IMAGES.md)** for the full table and the workflow.

Add `?slots` to the URL to overlay each slot's id while you work.

---

## Structure

```
index.html                 SEO head, Open Graph, LocalBusiness + DrivingSchool JSON-LD
scripts/
  sync-faq-schema.mjs      Keeps FAQPage JSON-LD in step with the FAQ data
public/
  favicon.svg              Milestone-stone mark (visual concept carried over from the template)
  privacy.html             Standalone legal page
  terms.html               Standalone legal page
  images/                  Drop real photographs here
src/
  main.jsx                 Entry point
  App.jsx                  Section composition, scroll-spy, scroll-reveal
  data/
    site.js                All content
    images.js              Image slot registry
  hooks/
    useScrollReveal.js     data-reveal → is-revealed on scroll
    useScrollSpy.js        Active navigation state
  components/
    Header, Hero, TrustBar, Courses, HowItWorks, WhyChooseUs,
    TrainingExperience, Vehicles, Beginners, Safety, ProgressJourney,
    About, Reviews, Pricing, Locations, Faq, FinalCta,
    Contact, BookingForm, Footer, ActionBar
    ui/
      ImageSlot.jsx        The only way an image enters the site
      Icon.jsx             Inline SVG line-icon set (no emoji, no icon library)
      Logo.jsx             Wordmark + milestone mark
  styles/
    tokens.css             Colour, type, spacing, shadow, motion tokens
    base.css               Reset, typography, layout primitives, reduced motion
    components.css         Buttons, image slots, header, drawer, accordion, forms, footer
    sections.css           Per-section layout
```

---

## Design system

| | |
| --- | --- |
| Ink | `#0e1621` — dark sections, headings |
| Paper | `#f4f1ec` — warm off-white page ground |
| Accent | `#e8531e` — signal orange, used sparingly |
| Gold | `#f2b705` — star ratings and road markings only |
| Display type | Archivo 600–800, slightly expanded (`font-stretch: 106%`) |
| Body type | Inter 400–600 |
| Radius | 3 / 5 / 8px — crisp, not pill-shaped |
| Tap target | 44px minimum, 48px default (`--tap`) |

Every colour, size and duration is a custom property in `src/styles/tokens.css`.
Dark sections opt in with `.section--dark .on-dark`, which re-points the text and
line tokens so components stay context-free.

---

## The booking form

Client-side only — nothing is sent anywhere. It validates on submit, shows an
error summary that takes focus, marks invalid fields with `aria-invalid` and
inline messages, and renders a success state with a booking recap.

To make it real, replace the marked block in
`src/components/BookingForm.jsx` (`handleSubmit`) with a `fetch` to your endpoint,
a form service, or a WhatsApp deep link built from the field values.

---

## Notes

- The service-area map is a hand-drawn SVG schematic, not a map embed — no API
  key, no tracking, no third-party request.
- Google Fonts is the only external request the site makes.
- `prefers-reduced-motion: reduce` disables every transition and reveal.
- The site is a static bundle; `dist/` can be dropped on any static host.
