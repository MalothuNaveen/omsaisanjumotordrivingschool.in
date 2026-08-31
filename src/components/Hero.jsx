import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { hero, whatsappUrl } from '../data/site'

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">{hero.eyebrow}</p>

          <h1 className="hero__title" id="hero-title">
            {hero.headline.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <p className="hero__lede">{hero.subhead}</p>

          <div className="hero__actions">
            <a className="btn btn--lg" href="#contact">
              Book Your First Lesson
              <Icon name="arrowRight" size={18} />
            </a>
            <a
              className="btn btn--lg btn--ghost"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp Us
            </a>
          </div>

          <ul className="hero__trust">
            {hero.trustPoints.map((point) => (
              <li key={point}>
                <Icon name="check" size={17} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          {/* IMAGE SLOT: hero image — see src/data/images.js → 'hero-driving-lesson' */}
          <ImageSlot
            id="hero-driving-lesson"
            priority
            sizes="(min-width: 980px) 46vw, 92vw"
          />
          <div className="hero__badge">
            <Icon name="shieldUser" size={26} />
            <div>
              <strong>Dual-control cars</strong>
              <span>Instructor brake and clutch on every lesson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
