import Icon from './ui/Icon'
import { contact, whatsappUrl } from '../data/site'

/*  Mobile-only sticky bar: Call · WhatsApp · Book Now.
 *
 *  Rationale: below 900px the header collapses to a hamburger, so the phone
 *  number and the Book Now button are both hidden behind a tap. On a phone —
 *  where most of this traffic lands — calling is the highest-intent action and
 *  it had no one-tap route anywhere on the page.
 *
 *  The floating WhatsApp widget is hidden at the same breakpoint (see
 *  components.css) so the two never stack in the same corner.               */
export default function MobileActionBar() {
  return (
    <div className="action-bar" role="group" aria-label="Quick contact">
      <a className="action-bar__item" href={contact.phoneHref}>
        <Icon name="phone" size={19} />
        <span>Call</span>
      </a>

      <a
        className="action-bar__item action-bar__item--wa"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="whatsapp" size={19} />
        <span>WhatsApp</span>
      </a>

      <a className="action-bar__item action-bar__item--book" href="#contact">
        <Icon name="calendar" size={19} />
        <span>Book Now</span>
      </a>
    </div>
  )
}
