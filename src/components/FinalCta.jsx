import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { contact, whatsappUrl } from '../data/site'

export default function FinalCta() {
  return (
    <section className="section cta on-dark" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div data-reveal>
          <p className="eyebrow">Ready when you are</p>
          <h2 className="cta__title" id="cta-title">
            Ready to Get Behind the Wheel?
          </h2>
          <p className="cta__text">
            Choose your course, pick a convenient time and start building your confidence.
          </p>

          <div className="cta__actions">
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

          <div className="cta__meta">
            <span>
              <Icon name="phone" size={16} />
              {contact.phoneDisplay}
            </span>
            <span>
              <Icon name="clock" size={16} />
              Slots from 6:00 AM
            </span>
            <span>
              <Icon name="check" size={16} />
              Pay after confirmation
            </span>
          </div>
        </div>

        <div className="cta__visual" data-reveal data-reveal-delay="1">
          {/* IMAGE SLOT: final call to action — see src/data/images.js → 'cta-final' */}
          <ImageSlot id="cta-final" className="slot--hover" sizes="(min-width: 940px) 42vw, 92vw" />
        </div>
      </div>
    </section>
  )
}
