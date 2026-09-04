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
    src: 'images/hero-driving-lesson.png',
    alt: 'A learner driver at the wheel of an Om Sai Sanju dual-control training car with an instructor beside them.',
    ratio: '4 / 5',
    ratioMobile: '4 / 3',
    position: 'center center',
    size: '1400 × 1750',
    brief:
      'Hero. Learner in the driver seat, hands at 9-and-3, instructor in the passenger seat. Shot through the windscreen or open window, warm late-afternoon light, shallow depth of field.',
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
    src: 'images/training-beginner.png',
    alt: 'A first-time learner receiving calm guidance from an instructor before starting the engine.',
    ratio: '4 / 3',
    position: 'center center',
    size: '1400 × 1050',
    brief:
      'Beginner training. Human and reassuring: instructor explaining the controls, learner listening. Eye contact, relaxed posture, car stationary.',
  },

  /* ---- TRAINING GALLERY (What You'll Learn) ---------------------------- */
  'training-manual': {
    src: 'images/training-manual.png',
    alt: 'A learner’s hand on the gear lever of a manual training car during a clutch-control lesson.',
    ratio: '4 / 5',
    position: 'center center',
    size: '900 × 1125',
    brief:
      'Manual driving. Tight detail — hand on the gear lever, or foot over the clutch. Interior light, mechanical and tactile.',
  },
  'training-automatic': {
    src: 'images/training-automatic.png',
    alt: 'The gear selector of an automatic training car with the driver’s hand resting on it.',
    ratio: '4 / 5',
    position: 'center center',
    size: '900 × 1125',
    brief:
      'Automatic driving. Automatic gear selector detail, or a relaxed two-handed grip on the wheel. Clean, uncluttered interior.',
  },
  'training-road': {
    src: 'images/training-road.png',
    alt: 'A training car being driven on a city road during a lesson.',
    ratio: '4 / 5',
    position: 'center center',
    size: '900 × 1125',
    brief:
      'Road training. Driver point of view through the windscreen on a real road, or a side-on shot of the car in motion. Sense of traffic, but calm.',
  },
  'training-parking': {
    src: 'images/training-parking.png',
    alt: 'A learner reversing a training car into a parking bay with the instructor observing.',
    ratio: '4 / 5',
    position: 'center center',
    size: '900 × 1125',
    brief:
      'Parking training. Reverse or parallel parking in progress — driver looking over the shoulder, or a top-down view of the car between bay lines.',
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
    src: 'images/safety-training.png',
    alt: 'An instructor demonstrating mirror checks and safe following distance during a lesson.',
    ratio: '16 / 9',
    ratioMobile: '4 / 3',
    position: 'center center',
    size: '1920 × 1080',
    brief:
      'Safety training. Wide and slightly technical — mirror check, cones on a practice ground, or a wet road at dusk. Cooler colour temperature than the other images.',
  },

  /* ---- LEARNER / STUDENT IMAGE ----------------------------------------- */
  'learner-student': {
    src: 'images/learner-student.png',
    alt: 'A learner smiling beside an Om Sai Sanju training car after finishing a lesson.',
    ratio: '3 / 4',
    position: 'center 35%',
    size: '900 × 1200',
    brief:
      'Student portrait. Genuine, unposed, natural light. Someone in their twenties or thirties beside the car, keys or licence in hand.',
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

  /* ---- FINAL CTA IMAGE ------------------------------------------------- */
  'cta-final': {
    src: 'images/cta-final.png',
    alt: 'A newly confident driver pulling away in an Om Sai Sanju training car.',
    ratio: '3 / 2',
    ratioMobile: '16 / 9',
    position: 'center center',
    size: '1600 × 1067',
    brief:
      'Final call to action. Forward-looking and optimistic — car pulling away, open road ahead, or a driver adjusting the mirror before setting off.',
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
