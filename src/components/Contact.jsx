import BookingForm from './BookingForm'
import Icon from './ui/Icon'
import { contact, mapsUrl, whatsappUrl } from '../data/site'

export default function Contact() {
  return (
    <section className="section section--paper2" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Book now</p>
          <h2 className="section-title" id="contact-title">
            Tell Us When You’d Like to Start
          </h2>
          <p className="section-lede">
            Send the form and a course coordinator calls you within one working day to confirm your
            instructor, your slot and the pickup point. Payment comes after that.
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
                <Icon name="mail" size={20} />
                <a href={`mailto:${contact.email}`}>
                  <b>{contact.email}</b>
                  <span>For invoices and corporate bookings</span>
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
              <h3>What happens next</h3>
              <ol className="next-steps">
                <li>
                  <span>
                    <b>We call you back.</b> A coordinator confirms your area, your slot and which
                    instructor is free — usually within one working day.
                  </span>
                </li>
                <li>
                  <span>
                    <b>You confirm and pay.</b> Only once the slot is fixed. UPI, card, bank
                    transfer or cash at the office.
                  </span>
                </li>
                <li>
                  <span>
                    <b>Your first lesson.</b> We meet you at the pickup point with the training car
                    and start with the basics.
                  </span>
                </li>
              </ol>
            </div>

            <div className="contact-card contact-card--dark on-dark">
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
