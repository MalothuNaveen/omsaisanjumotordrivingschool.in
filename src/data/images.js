/**
 * ============================================================================
 *  IMAGE SLOT REGISTRY
 * ============================================================================
 *  Every image on the site is declared here — nowhere else.
 *
 *  TO ADD A REAL IMAGE:
 *    1. Drop the file into  public/images/
 *    2. Set  src: 'images/<your-file>.jpg'   on the matching slot below
 *    3. Update `alt` if the finished photo differs from the description
 *
 *  Leave `src` as null and a designed placeholder is rendered instead, holding
 *  the exact aspect ratio and crop the final photo will occupy — so the layout
 *  never shifts when the real image arrives.
 *
 *  FIELDS
 *    src         null (placeholder) or a path relative to the site root
 *    alt         Alternative text. Already written for the intended photo.
 *    ratio       Aspect ratio, CSS syntax, e.g. '4 / 5'
 *    ratioMobile Optional override below 640px
 *    position    object-position for the real image, e.g. 'center 30%'
 *    size        Recommended export size, for reference only
 *    brief       Art-direction note: what the photograph should show
 *
 *  DEV TIP: append ?slots to the URL to overlay each slot's id and ratio.
 * ============================================================================
 */

export const imageSlots = {
  /* ---- HERO IMAGE ------------------------------------------------------ */
  'hero-driving-lesson': {
    src: 'images/sai-sanju-review-car.png',
    alt: 'Om Sai Sanju Motor Driving School training car with the school board mounted on top.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center top',
    size: '960 × 1280',
    brief: 'Hero. Real photo of the Sai Sanju training car.',
  },

  /* ---- ABOUT IMAGE ----------------------------------------------------- */
  'about-school': {
    src: 'images/office-front.jpeg',
    alt: 'The Om Sai Sanju Motor Driving School storefront and entrance in Alwal, Secunderabad.',
    ratio: '4 / 5',
    position: 'center center',
    size: '1360 × 1600',
    brief: 'About. Real photo of the school storefront.',
  },
  'office-interior': {
    src: 'images/office-interior.jpeg',
    alt: 'Inside the Om Sai Sanju Motor Driving School office, with road-sign and vehicle-controls charts on the wall.',
    ratio: '3 / 4',
    position: 'center center',
    size: '960 × 1280',
    brief: 'Locations. Real photo of the office interior.',
  },

  /* ---- BEGINNER / NERVOUS-DRIVER IMAGE --------------------------------- */
  'training-beginner': {
    src: 'images/office-interior.jpeg',
    alt: 'Inside the Om Sai Sanju Motor Driving School office, with road-sign and vehicle-controls charts on the wall.',
    ratio: '4 / 3',
    position: 'center center',
    size: '960 × 1280',
    brief: 'Beginner training. Real photo of the school office.',
  },

  /* ---- TRAINING VEHICLE IMAGES ----------------------------------------- */
  'vehicle-manual': {
    src: 'images/sai-sanju-white-training-car.png',
    alt: 'White Om Sai Sanju Motor Driving School training car with the school board mounted on top.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center top',
    size: '960 × 1280',
    brief: 'Cars training. Real white Sai Sanju training car with school board visible.',
  },
  'vehicle-automatic': {
    src: 'images/sai-sanju-red-training-car.png',
    alt: 'Red Om Sai Sanju Motor Driving School training car with the school board mounted on top.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center top',
    size: '960 × 1280',
    brief: 'Cars training. Real red Sai Sanju training car with school board visible.',
  },

  /* ---- SAFETY IMAGE ---------------------------------------------------- */
  'safety-training': {
    src: 'images/sai-sanju-white-training-car.png',
    alt: 'White Om Sai Sanju Motor Driving School training car with the school board mounted on top.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center top',
    size: '960 × 1280',
    brief: 'Safety training. Real photo of the Sai Sanju training car.',
  },

  'review-real-car': {
    src: 'images/sai-sanju-review-car.png',
    alt: 'Om Sai Sanju Motor Driving School training car with the school board mounted on top.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center top',
    size: '960 × 1280',
    brief: 'Reviews. Real photo of the Sai Sanju training car used for learner pickup and lessons.',
  },

  /* ---- OUR SERVICES CARDS ------------------------------------------------ */
  'service-driving-classes': {
    src: 'images/sai-sanju-red-training-car.png',
    alt: 'Red Om Sai Sanju Motor Driving School training car with the school board mounted on top.',
    ratio: '4 / 3',
    position: 'center top',
    size: '960 × 1280',
    brief: 'Services card. 4-wheeler training.',
  },
  'service-rta': {
    src: 'images/driving-licence-card.jpg',
    alt: 'Official Government of Telangana Driving Licence card issued by RTO Hyderabad.',
    ratio: '4 / 3',
    position: 'center center',
    size: '900 × 675',
    brief: 'Services card. Real Indian driving licence (DL) card from Telangana RTO.',
  },
  'service-contact': {
    src: 'images/office-interior.jpeg',
    alt: 'Inside the Om Sai Sanju Motor Driving School office.',
    ratio: '4 / 3',
    position: 'center center',
    size: '900 × 675',
    brief: 'Services card. Contact us / vehicle registration.',
  },
  'service-fancy-number': {
    src: 'images/sai-sanju-white-training-car.png',
    alt: 'The Om Sai Sanju Motor Driving School training car and number plate.',
    ratio: '4 / 3',
    position: 'center center',
    size: '900 × 675',
    brief: 'Services card. Fancy number allocation.',
  },

  /* ---- FINAL CTA IMAGE ------------------------------------------------- */
  'cta-final': {
    src: 'images/office-front.jpeg',
    alt: 'The Om Sai Sanju Motor Driving School storefront and entrance in Alwal, Secunderabad.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center center',
    size: '1360 × 1600',
    brief: 'Final call to action. Real photo of the school storefront.',
  },
}

/** Every slot id, in the order the site renders them. Used by the docs page. */
export const imageSlotIds = Object.keys(imageSlots)

export function getImageSlot(id) {
  const slot = imageSlots[id]
  if (!slot) {
    // Fail loudly in development, quietly in production.
    if (import.meta.env.DEV) console.warn(`[ImageSlot] Unknown slot id: "${id}"`)
    return { src: null, alt: '', ratio: '3 / 2', size: '', brief: '' }
  }
  return slot
}
