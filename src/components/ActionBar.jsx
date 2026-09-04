import Icon from './ui/Icon'
import { business, whatsappUrl } from '../data/site'

/** Mobile-only sticky actions, plus a floating WhatsApp button on desktop. */
export default function ActionBar() {
  return (
    <>
      <div className="action-bar">
        <a className="action-bar__btn action-bar__btn--primary" href="#contact">
          <Icon name="calendar" size={18} />
          Book Now
        </a>
        <a
          className="action-bar__btn action-bar__btn--wa"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="whatsapp" size={18} />
          WhatsApp
        </a>
      </div>

      <a
        className="wa-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${business.nameFull} on WhatsApp`}
      >
        <Icon name="whatsapp" size={26} />
      </a>
    </>
  )
}
