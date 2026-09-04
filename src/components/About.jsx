import ImageSlot from './ui/ImageSlot'
import { business } from '../data/site'

const points = [
  { value: '2017', label: 'Founded in Alwal, Secunderabad' },
  { value: '4.5/5', label: 'Learner rating' },
  { value: 'RTO', label: 'Licensed driving school, Medchal district' },
  { value: '6 days', label: 'A week, from 6:00 AM to 8:00 PM' },
]

export default function About() {
  return (
    <section className="section section--white" id="about" aria-labelledby="about-title">
      <div className="container about__inner">
        <div className="about__text" data-reveal>
          <p className="eyebrow">About us</p>
          <h2 className="section-title" id="about-title">
            A Driving School Built Around the Nervous Learner
          </h2>
          <p style={{ marginTop: '1.25rem' }}>
            {business.nameFull} started in {business.established} in Alwal, Secunderabad, built
            around a straightforward idea: most people do not struggle to drive, they struggle with
            being rushed. So we slowed the lessons down.
          </p>
          <p>
            Since then we have run a fleet of dual-control manual and automatic cars in Alwal and
            Secunderabad, and the method has not changed. One instructor per learner for the whole
            course. A written progress card after every lesson. Nothing new introduced until the
            last thing feels ordinary.
          </p>
          <p>
            We are not the cheapest school in the city and we do not promise a licence in three
            days. What we promise is that on the day you drive alone for the first time, it will
            not feel like the first time.
          </p>

          <div className="about__points">
            {points.map((point) => (
              <div className="about__point" key={point.value}>
                <b>{point.value}</b>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal data-reveal-delay="1">
          {/* IMAGE SLOT: about the school — see src/data/images.js → 'about-school' */}
          <ImageSlot
            id="about-school"
            className="slot--hover"
            sizes="(min-width: 940px) 44vw, 92vw"
          />
        </div>
      </div>
    </section>
  )
}
