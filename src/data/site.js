/**
 * ============================================================================
 *  OM SAI SANJU MOTOR DRIVING SCHOOL — SITE CONTENT
 * ============================================================================
 *  This is the single place to edit every piece of copy, price, name and
 *  contact detail on the website. Nothing here is hard-coded in components.
 *
 *  Business identity and contact details below are real (from the RTA licence).
 *  NOTE: stats, courses/prices, instructors, reviews and service areas are
 *  still DEMO PLACEHOLDER CONTENT — replace with real figures before launch.
 * ============================================================================
 */

/* --- Business identity -------------------------------------------------- */
export const business = {
  name: 'Om Sai Sanju',
  nameFull: 'Om Sai Sanju Motor Driving School',
  legalName: 'Om Sai Sanju Motor Driving School',
  tagline: 'Every driver starts at kilometre zero.',
  established: 2017,
  city: 'Hyderabad',
  description:
    'An RTO-licensed driving school in Alwal, Secunderabad, built around patient teaching, dual-control cars and lessons that move at the learner’s pace.',
}

/* --- Contact ------------------------------------------------------------ */
export const contact = {
  phoneDisplay: '+91 90001 11516',
  phoneHref: 'tel:+919000111516',
  whatsappNumber: '919000111516', // digits only, with country code
  whatsappMessage:
    'Hi Om Sai Sanju Motor Driving School, I would like to book a driving lesson. Could you share the available timings?',
  email: 'contact@omsaisanjumotordrivingschool.in', // placeholder — update once a domain/mailbox is set up
  addressLines: [
    'Srinivasa Nagar Colony',
    'Temple Alwal, Alwal',
    'Secunderabad, Telangana 500010',
  ],
  hours: [
    { days: 'Monday – Saturday', time: '6:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '9:00 AM – 2:00 PM' },
    { days: 'Public holidays', time: 'By appointment' },
  ],
}

export const whatsappUrl =
  'https://wa.me/' +
  contact.whatsappNumber +
  '?text=' +
  encodeURIComponent(contact.whatsappMessage)

export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(business.nameFull + ', ' + contact.addressLines.join(', '))

/* --- Navigation --------------------------------------------------------- */
export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'courses', label: 'Courses', href: '#courses' },
  { id: 'why-us', label: 'Why Choose Us', href: '#why-us' },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'reviews', label: 'Reviews', href: '#reviews' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

/* --- Hero --------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Driving school in Hyderabad · Since 2017',
  headline: ['Learn to Drive.', 'Build Confidence.', 'Go Anywhere.'],
  subhead:
    'Professional driving lessons designed for beginners, busy professionals and anyone ready to become a confident, responsible driver.',
  trustPoints: ['Beginner Friendly', 'Manual & Automatic', 'Flexible Timings', 'Safety-Focused'],
}

/* --- Trust bar (real figures — RTA licence + Google Business reviews) --- */
export const stats = [
  { value: '9+', label: 'Years of experience', detail: 'Serving Alwal & Secunderabad since 2017' },
  { value: '4.5/5', label: 'Google rating', detail: 'Rated by our learners on Google' },
  { value: '5', label: 'Registered training vehicles', detail: 'Endorsed on the RTO licence' },
  { value: 'RTO', label: 'Licensed driving school', detail: 'Licensed under Telangana RTA, Medchal district' },
]

/* --- Courses ------------------------------------------------------------ */
/*  Prices are plain strings — edit them directly.                          */
export const courses = [
  {
    id: 'beginner',
    name: 'Beginner Driving Course',
    level: 'No experience needed',
    duration: '10 lessons · 2–3 weeks',
    price: '₹4,999',
    summary:
      'Start from the very first day behind the wheel. Controls, steering, braking and quiet-road practice, taught slowly and repeated until it feels natural.',
    highlights: ['Cockpit drill & controls', 'Clutch and biting point', 'Quiet-road driving'],
    featured: false,
  },
  {
    id: 'confidence',
    name: 'Confidence Driving Course',
    level: 'Some practice already',
    duration: '8 lessons · 2 weeks',
    price: '₹5,499',
    summary:
      'For drivers who can move the car but freeze in traffic. Junctions, lane discipline, roundabouts and busy Hyderabad roads at a manageable pace.',
    highlights: ['City traffic handling', 'Junctions & roundabouts', 'Lane discipline'],
    featured: true,
  },
  {
    id: 'test-prep',
    name: 'Licence Test Preparation',
    level: 'Test booked or booking soon',
    duration: '6 lessons · 1–2 weeks',
    price: '₹4,499',
    summary:
      'Everything the RTO looks for. H-track reversing, 8-track, hill start, hand signals and two full mock tests before the real one.',
    highlights: ['H & 8 track practice', 'Hill start control', 'Two mock test runs'],
    featured: false,
  },
  {
    id: 'manual',
    name: 'Manual Car Training',
    level: 'All levels',
    duration: '10 lessons · 2–3 weeks',
    price: '₹5,999',
    summary:
      'Proper clutch and gear control — the part most learners find hardest. Smooth starts, hill holds, downshifts and stop-start traffic without stalling.',
    highlights: ['Clutch control drills', 'Gear selection by feel', 'Stop-start traffic'],
    featured: false,
  },
  {
    id: 'automatic',
    name: 'Automatic Car Training',
    level: 'All levels',
    duration: '8 lessons · 2 weeks',
    price: '₹5,499',
    summary:
      'No clutch, no gears — more attention on the road itself. Ideal if you drive an automatic at home or want the shortest route to driving alone.',
    highlights: ['Pedal discipline', 'Creep & parking control', 'Road awareness focus'],
    featured: false,
  },
  {
    id: 'refresher',
    name: 'Refresher Driving Lessons',
    level: 'Licensed but out of practice',
    duration: '4 lessons · 1 week',
    price: '₹3,999',
    summary:
      'You have a licence but have not driven in years. A short, judgement-free reset covering city traffic, parking and highway confidence.',
    highlights: ['Judgement-free pace', 'Parking refresh', 'Highway re-entry'],
    featured: false,
  },
]

/* --- How it works ------------------------------------------------------- */
export const steps = [
  {
    num: '01',
    title: 'Choose Your Course',
    body: 'Tell us where you are today — never driven, out of practice, or preparing for the RTO test. We suggest the course that fits.',
  },
  {
    num: '02',
    title: 'Book Your First Lesson',
    body: 'Pick a slot that works around college or office hours. Early mornings, evenings and weekends are all available.',
  },
  {
    num: '03',
    title: 'Meet Your Instructor',
    body: 'You are matched with one instructor who stays with you for the whole course, so nothing has to be explained twice.',
  },
  {
    num: '04',
    title: 'Practice & Build Confidence',
    body: 'Quiet roads first, then real traffic. Each lesson adds one new skill and revises the last one until it is automatic.',
  },
  {
    num: '05',
    title: 'Prepare for Independent Driving',
    body: 'Mock tests, parking under pressure and a full solo-style drive — so the first time alone in the car is not the first time.',
  },
]

/* --- Why choose us ------------------------------------------------------ */
export const benefits = [
  {
    icon: 'shieldUser',
    title: 'Patient Instructors',
    body: 'Certified instructors who explain calmly, repeat willingly and never raise their voice in the car. Female instructors available on request.',
  },
  {
    icon: 'pedals',
    title: 'Dual-Control Training Cars',
    body: 'Every training car has an instructor-side brake and clutch, so a mistake is corrected in a second instead of becoming an incident.',
  },
  {
    icon: 'clock',
    title: 'Flexible Scheduling',
    body: 'Slots from 6:00 AM to 8:00 PM, six days a week. Reschedule free of charge with 12 hours’ notice.',
  },
  {
    icon: 'steering',
    title: 'Beginner-Friendly Lessons',
    body: 'Around six in ten of our learners have never sat in the driver’s seat before. The first lesson assumes exactly zero experience.',
  },
  {
    icon: 'cone',
    title: 'Safety-First Training',
    body: 'Mirror discipline, following distance and hazard awareness are taught from lesson one — not added at the end for the test.',
  },
  {
    icon: 'chart',
    title: 'Progress-Based Learning',
    body: 'A written progress card after every lesson tells you exactly what improved and what the next lesson will cover.',
  },
]

/* --- What you'll learn -------------------------------------------------- */
export const skills = [
  {
    icon: 'dashboard',
    title: 'Vehicle Controls',
    body: 'Seat, mirrors, pedals, indicators and the instrument cluster — the cockpit drill you repeat every single time.',
  },
  {
    icon: 'steering',
    title: 'Steering & Braking',
    body: 'Push-pull steering, smooth progressive braking and holding a straight line without over-correcting.',
  },
  {
    icon: 'gear',
    title: 'Clutch & Gear Control',
    body: 'Finding the biting point, pulling away on a slope and changing gear by engine sound rather than by guesswork.',
  },
  {
    icon: 'eye',
    title: 'Traffic Awareness',
    body: 'Reading two-wheelers, autos and buses early, holding your lane and anticipating what other road users will do next.',
  },
  {
    icon: 'junction',
    title: 'Junctions & Turns',
    body: 'Observation before commitment, right turns across traffic, filter lanes and unmarked Hyderabad crossings.',
  },
  {
    icon: 'parking',
    title: 'Parking & Reversing',
    body: 'Parallel, bay and reverse parking with reference points that work in a real, tight apartment basement.',
  },
  {
    icon: 'highway',
    title: 'Highway Confidence',
    body: 'Joining and leaving at speed, safe overtaking, lane changes and keeping a sensible gap on the ORR.',
  },
  {
    icon: 'shield',
    title: 'Defensive Driving',
    body: 'Assume the other driver has not seen you. Escape routes, blind spots and wet-road stopping distances.',
  },
]

/* --- Training vehicles -------------------------------------------------- */
export const vehicles = [
  {
    id: 'manual-car',
    name: 'Manual Training Car',
    type: 'Hatchback · 5-speed manual',
    imageId: 'vehicle-manual',
    body: 'A light-clutch hatchback chosen specifically because it is forgiving for first-time learners in stop-start traffic.',
    specs: [
      'Dual controls',
      'Instructor supervision',
      'Serviced every 5,000 km',
      'Beginner friendly',
    ],
  },
  {
    id: 'automatic-car',
    name: 'Automatic Training Car',
    type: 'Hatchback · AMT automatic',
    imageId: 'vehicle-automatic',
    body: 'No clutch to manage, so attention goes to the road. The quickest route to driving on your own if you own an automatic.',
    specs: [
      'Dual brake control',
      'Instructor supervision',
      'Reverse camera & sensors',
      'Beginner friendly',
    ],
  },
]

/* --- Safety ------------------------------------------------------------- */
export const safetyTopics = [
  {
    code: 'S-01',
    title: 'Traffic Awareness',
    body: 'Scanning far ahead, not just at the bumper in front — and knowing where two-wheelers appear from.',
  },
  {
    code: 'S-02',
    title: 'Safe Following Distance',
    body: 'The two-second rule, doubled in rain, and why tailgating removes every option you have.',
  },
  {
    code: 'S-03',
    title: 'Junction Awareness',
    body: 'Approach speed, observation order and never entering a junction you cannot clear.',
  },
  {
    code: 'S-04',
    title: 'Parking Discipline',
    body: 'Reversing with full observation, mirror reference points and parking without blocking others.',
  },
  {
    code: 'S-05',
    title: 'Night Driving',
    body: 'Headlight use, judging distance in low light and handling oncoming high beams without panic.',
  },
  {
    code: 'S-06',
    title: 'Wet-Road Awareness',
    body: 'Stopping distances in monsoon conditions, standing water, aquaplaning and gentle inputs.',
  },
  {
    code: 'S-07',
    title: 'Defensive Driving',
    body: 'Planning an escape route, covering the brake and driving so that other people’s mistakes stay harmless.',
  },
]

/* --- Progress journey --------------------------------------------------- */
export const journey = [
  { km: '0', title: 'First Lesson', body: 'Engine off. Seat, mirrors and controls, in an empty ground.' },
  { km: '1', title: 'Basic Control', body: 'Moving off, stopping smoothly and steering in a straight line.' },
  { km: '2', title: 'Quiet Roads', body: 'Low-traffic colony roads, gentle turns and first gear changes.' },
  { km: '3', title: 'City Traffic', body: 'Junctions, signals, two-wheelers and lane discipline.' },
  { km: '4', title: 'Parking', body: 'Parallel, bay and reverse parking with real reference points.' },
  { km: '5', title: 'Real-World Driving', body: 'Peak-hour routes, flyovers, night driving and highway merging.' },
  { km: '6', title: 'Test Preparation', body: 'H-track, 8-track, hill start and two full mock tests.' },
  { km: '7', title: 'Confident Driver', body: 'A full solo-style drive, start to finish, with the instructor silent.' },
]

/* --- Reviews (real Google Business reviews, lightly copy-edited for typos) */
export const reviews = [
  {
    id: 'r1',
    quote:
      'Good driving school. They were punctual and picked me up every day, which was very convenient. The instructions were clear and easy to follow. I feel much more confident driving now. Mahender is a good instructor who helps you build confidence behind the wheel.',
    name: 'Neha Fathima',
    meta: 'Google review · Local Guide',
    rating: 5,
  },
  {
    id: 'r2',
    quote:
      'Very friendly, respectful, and responsible. The instructors teach with a lot of patience and make sure you understand every step clearly. The overall experience was smooth and comfortable, and they create a supportive environment for learning.',
    name: 'Akshara Reddy',
    meta: 'Google review',
    rating: 5,
  },
  {
    id: 'r3',
    quote:
      'Fantastic experience with Sai Sanju Motor Driving School! The instructors are knowledgeable, patient, and make you feel confident behind the wheel. They focus on safety and personalise each lesson to help you improve. I passed my test on the first try, thanks to them!',
    name: 'Sai Kiran Kavali',
    meta: 'Google review',
    rating: 5,
  },
  {
    id: 'r4',
    quote:
      'It’s a good driving school, comfortable timings, and my instructor Mr. Prashanth is very patient and teaches every thing in detail while driving. I got my licence without any glitches. Thank you Mr Santosh and Mr Prashant.',
    name: 'Bhavani Padigela',
    meta: 'Google review · Local Guide',
    rating: 5,
  },
  {
    id: 'r5',
    quote:
      'My experience was very good with this driving school. I have recently started learning to drive and this school is the best for beginners. The instructor is very patient, and really helps with the whole process. He is also polite. Highly recommend this school!',
    name: 'Uma Rani',
    meta: 'Google review',
    rating: 5,
  },
  {
    id: 'r6',
    quote:
      'Learnt driving hassle-free from Sai Sanju Driving School 3 years back — classes are regular, clear explanation and guidance. I also referred all my friends and even they had a similar experience. Thank you Santhosh garu.',
    name: 'Moda Venkata Kumari',
    meta: 'Google review',
    rating: 5,
  },
]

/* --- Pricing plans ------------------------------------------------------ */
export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹3,999',
    period: 'one-time',
    tagline: 'A first taste of driving, with no long commitment.',
    features: [
      '5 practical lessons (45 min each)',
      'Manual training car',
      'Dual-control vehicle provided',
      'Instructor guidance throughout',
      'Written progress card',
    ],
    cta: 'Choose Starter',
    featured: false,
  },
  {
    id: 'confidence',
    name: 'Confidence',
    price: '₹5,999',
    period: 'one-time',
    tagline: 'Our most popular plan — enough lessons to actually drive alone.',
    features: [
      '8 practical lessons (60 min each)',
      'Manual or automatic car',
      'Parking practice included',
      'City traffic training',
      'Free rescheduling',
      'Written progress card',
    ],
    cta: 'Choose Confidence',
    featured: true,
  },
  {
    id: 'complete',
    name: 'Complete',
    price: '₹8,999',
    period: 'one-time',
    tagline: 'Beginner to licence-ready, with nothing left to arrange later.',
    features: [
      '12 practical lessons (60 min each)',
      'Manual or automatic car',
      'Road confidence & highway module',
      'Full licence test preparation',
      'Two mock RTO tests',
      'Pickup within service areas',
      'Free rescheduling',
    ],
    cta: 'Choose Complete',
    featured: false,
  },
]

export const pricingNotes = [
  'All prices include the training vehicle, fuel and instructor.',
  'RTO licence and test fees are paid separately to the government.',
  'Lessons stay valid for 90 days from the date of booking.',
]

/* --- Service areas ------------------------------------------------------ */
export const serviceAreas = [
  { name: 'Alwal', note: 'Srinivasa Nagar Colony, Temple Alwal', pickup: true },
]

/* --- FAQ ---------------------------------------------------------------- */
export const faqs = [
  {
    q: 'How many lessons will I need?',
    a: 'Most complete beginners feel independent after 10 to 12 practical lessons. If you have driven before, 4 to 6 refresher lessons are usually enough. We review your progress after every lesson and tell you honestly where you stand rather than selling you extra hours.',
  },
  {
    q: 'Do you teach complete beginners?',
    a: 'Yes — roughly six in ten of our learners have never sat in the driver’s seat before. The first lesson starts with the engine switched off in an open ground, covering seat position, mirrors and controls before the car moves at all.',
  },
  {
    q: 'Do you provide the car?',
    a: 'Yes. Every lesson is conducted in our own dual-control training car, and fuel is included in the course price. You never need to arrange a vehicle, and you are supervised at all times.',
  },
  {
    q: 'Do you teach automatic cars?',
    a: 'We do. We run separate manual and automatic training cars, and you can choose either when you book. If you are unsure, tell us which car you will drive at home and we will recommend one.',
  },
  {
    q: 'Can I choose my instructor?',
    a: 'Yes. You can request a specific instructor when booking, and women learners can request a female instructor. Once matched, the same instructor stays with you for the entire course so your progress is never restarted.',
  },
  {
    q: 'Can I choose my lesson timings?',
    a: 'Slots run from 6:00 AM to 8:00 PM, Monday to Saturday, and 9:00 AM to 2:00 PM on Sunday. Early-morning and evening slots are popular with working professionals, so book those a few days ahead.',
  },
  {
    q: 'Do you offer pickup from my home or office?',
    a: 'Pickup and drop within Alwal is included in the Complete plan and available as a small add-on for other courses. Share your address when booking and we will confirm whether it falls inside the zone.',
  },
  {
    q: 'Can you prepare me for my driving licence test?',
    a: 'Yes. Our Licence Test Preparation course covers the H-track and 8-track, hill start, hand signals and the exact sequence the RTO examiner follows, finishing with two full mock tests. We also guide you through the LLR and DL application steps.',
  },
  {
    q: 'What happens in the first lesson?',
    a: 'You meet your instructor, complete the cockpit drill — seat, steering, mirrors, pedals — and then drive in a quiet open area at very low speed. Nobody is asked to enter traffic on day one.',
  },
  {
    q: 'I am a nervous driver. Will that be a problem?',
    a: 'Not at all. Nervousness is the most common thing we deal with, and it usually comes from being asked to do too much too early. We slow the pace down, repeat what is uncomfortable and only move forward when you say you are ready.',
  },
  {
    q: 'How do I book a lesson?',
    a: 'Fill in the booking form on this page, message us on WhatsApp, or call the office. We confirm your instructor and slot within one working day, and payment is made after that confirmation.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'Reschedule free of charge with at least 12 hours’ notice. Lessons stay valid for 90 days from booking, so a busy week never means losing what you paid for.',
  },
]

/* --- Booking form options ----------------------------------------------- */
export const formOptions = {
  courses: courses.map((c) => c.name).concat(['Not sure yet — please advise']),
  transmission: ['Manual', 'Automatic', 'Not sure yet'],
  areas: serviceAreas.map((a) => a.name),
  times: [
    '6:00 AM – 8:00 AM',
    '8:00 AM – 10:00 AM',
    '10:00 AM – 12:00 PM',
    '12:00 PM – 3:00 PM',
    '3:00 PM – 6:00 PM',
    '6:00 PM – 8:00 PM',
  ],
  experience: [
    'Never driven before',
    'Driven a few times',
    'Have a learner’s licence (LLR)',
    'Have a licence but out of practice',
    'Preparing for the RTO test',
  ],
}

/* --- Footer ------------------------------------------------------------- */
export const footerLinks = {
  quick: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Training Vehicles', href: '#vehicles' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
}
