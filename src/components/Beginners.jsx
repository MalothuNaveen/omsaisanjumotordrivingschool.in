import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { whatsappUrl } from '../data/site'

const points = [
  'Your first lesson starts with the engine switched off, in an open ground — not in traffic.',
  'Nothing moves forward until you say the last step feels comfortable.',
  'The same instructor stays with you, so you never re-explain what you find difficult.',
  'Women learners can request a female instructor at no extra cost.',
]

export default function Beginners() {
  return (
    <section className="section" id="beginners" aria-labelledby="beginners-title">
      <div className="container beginner__inner">
        <div className="beginner__visual" data-reveal>
          {/* IMAGE SLOT: beginner training — see src/data/images.js → 'training-beginner' */}
          <ImageSlot
            id="training-beginner"
            className="slot--hover"
            sizes="(min-width: 900px) 44vw, 92vw"
          />
          <div className="beginner__stat">
            <b>6 in 10</b>
            <span>of our learners had never sat in the driver’s seat before their first lesson</span>
          </div>
        </div>

        <div data-reveal data-reveal-delay="1">
          <p className="eyebrow">First-time drivers</p>
          <h2 className="beginner__title" id="beginners-title">
            Never Driven Before? That’s Completely Fine.
          </h2>
          <p className="beginner__text">
            You don’t need experience to start. Our lessons begin with the basics and progress at a
            pace that helps you feel comfortable behind the wheel.
          </p>

          <ul className="beginner__points">
            {points.map((point) => (
              <li key={point}>
                <Icon name="check" size={18} />
                {point}
              </li>
            ))}
          </ul>

          <div className="beginner__actions">
            <a className="btn" href="#contact">
              Start Learning
              <Icon name="arrowRight" size={18} />
            </a>
            <a
              className="btn btn--outline"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              Ask a question first
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
