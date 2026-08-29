const services = [
  'Home pickup and drop for every class',
  'Beginner-friendly car control training',
  'Traffic practice on real city roads',
  'Parking, reverse, slope and U-turn sessions',
];

const packages = [
  { title: 'Starter', detail: '10 practical classes', note: 'For fresh beginners' },
  { title: 'Confidence', detail: '15 practical classes', note: 'Road + parking focus' },
  { title: 'License Ready', detail: '20 practical classes', note: 'Full driving test prep' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#1f2a2e]">
      <header className="sticky top-0 z-20 border-b border-[#e4d9c8] bg-[#f8f3ea]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-semibold tracking-wide">
            Saisanju Driving School
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-[#566267] sm:flex">
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href="tel:+919999999999"
            className="rounded-full bg-[#d9482f] px-4 py-2 text-sm font-semibold text-white shadow-sm"
          >
            Call Now
          </a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(31,42,46,.84),rgba(31,42,46,.44)),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl content-center gap-8 px-5 py-16 text-white md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#ffd27a]">
              Car driving school with home service
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              Saisanju Driving School
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#f8f3ea]">
              Mee inti daggara pickup chesukoni driving class aipoyaka drop chestam.
              Beginners ki calm ga, step-by-step car driving nerpistam.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919999999999"
                className="rounded-full bg-[#ffd27a] px-6 py-3 text-center font-bold text-[#1f2a2e]"
              >
                Book Free Enquiry
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi%20Saisanju%20Driving%20School%2C%20I%20want%20to%20join%20car%20driving%20classes."
                className="rounded-full border border-white/60 px-6 py-3 text-center font-semibold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/18 bg-white/12 p-5 shadow-2xl backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffd27a]">
              Why learners choose us
            </p>
            <div className="mt-5 grid gap-4">
              <div className="rounded-md bg-white/94 p-4 text-[#1f2a2e]">
                <p className="text-3xl font-bold">Doorstep</p>
                <p className="mt-1 text-sm text-[#566267]">
                  Pickup and drop available for nearby areas.
                </p>
              </div>
              <div className="rounded-md bg-white/94 p-4 text-[#1f2a2e]">
                <p className="text-3xl font-bold">1:1 Focus</p>
                <p className="mt-1 text-sm text-[#566267]">
                  Patient instructor, practical road sense, and safe habits.
                </p>
              </div>
              <div className="rounded-md bg-white/94 p-4 text-[#1f2a2e]">
                <p className="text-3xl font-bold">Flexible</p>
                <p className="mt-1 text-sm text-[#566267]">
                  Morning and evening slots for students and working people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9482f]">
            Training
          </p>
          <h2 className="mt-3 text-3xl font-bold">Car driving clear ga, confidence tho.</h2>
          <p className="mt-4 text-[#566267]">
            Clutch, brake, steering basics nunchi traffic lo smooth driving varaku complete
            practical training.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-[#e4d9c8] bg-white p-5">
              <span className="mb-4 block h-2 w-12 rounded-full bg-[#d9482f]" />
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d9482f]">
                Packages
              </p>
              <h2 className="mt-3 text-3xl font-bold">Choose your learning plan</h2>
            </div>
            <p className="max-w-lg text-[#566267]">
              Timings and fee details call/WhatsApp lo confirm chesukovachu. Custom classes
              kuda available.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {packages.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#e4d9c8] p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-2xl font-bold text-[#d9482f]">{item.detail}</p>
                <p className="mt-3 text-sm text-[#566267]">{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 rounded-lg bg-[#1f2a2e] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffd27a]">
              Start today
            </p>
            <h2 className="mt-3 text-3xl font-bold">Home pickup tho first class book cheyyandi.</h2>
            <p className="mt-3 max-w-2xl text-[#f8f3ea]">
              Call chesi area, timings, package details share cheyyandi. We will guide you
              from first seat adjustment to confident road driving.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href="tel:+919999999999"
              className="rounded-full bg-[#ffd27a] px-6 py-3 text-center font-bold text-[#1f2a2e]"
            >
              +91 99999 99999
            </a>
            <a
              href="https://wa.me/919999999999"
              className="rounded-full border border-white/50 px-6 py-3 text-center font-semibold"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
