import BookingForm from './BookingForm'
import Icon from './ui/Icon'
import { contact, mapsUrl, serviceAreas, whatsappUrl } from '../data/site'

export default function Contact() {
  return (
    <section className="section section--paper2" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Book now</p>
          <h2 className="section-title" id="contact-title">
            Book Your Driving Lessons
          </h2>
          <p className="section-lede">
            Share your details. We will call to confirm your lessons, timings and pickup point.
          </p>
        </div>

        <div className="contact__inner">
          <div data-reveal>
            <BookingForm />
          </div>

          <div className="contact-rail" data-reveal data-reveal-delay="1">
            <div className="contact-card">
              <h3>Talk to us</h3>

              <p className="contact-line">
                <Icon name="phone" size={20} />
                <a href={contact.phoneHref}>
                  <b>{contact.phoneDisplay}</b>
                  <span>Office line — Mon to Sat</span>
                </a>
              </p>

              <p className="contact-line">
                <Icon name="whatsapp" size={20} />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <b>WhatsApp us</b>
                  <span>Usually replies within a couple of hours</span>
                </a>
              </p>

              <p className="contact-line">
                <Icon name="pin" size={20} />
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <b>{contact.addressLines[1]}</b>
                  <span>{contact.addressLines[2]} · Get directions</span>
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>Pickup areas</h3>
              <p className="section-lede">{serviceAreas.map(area => area.name).join(' · ')}</p>
            </div>

            <div className="contact-card">
              <h3>Opening hours</h3>
              <dl className="hours">
                {contact.hours.map((entry) => (
                  <div key={entry.days}>
                    <dt>{entry.days}</dt>
                    <dd>{entry.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
