import Icon from './ui/Icon'
import Logo from './ui/Logo'
import { business, contact, courses, footerLinks, mapsUrl, serviceAreas, stats, whatsappUrl } from '../data/site'

const designerWhatsappUrl =
  'https://wa.me/919515538159?text=' +
  encodeURIComponent(
    'Hi, I saw the website you built for Om Sai Sanju Motor Driving School. I would like a website for my business too.',
  )

export default function Footer() {
  const year = new Date().getFullYear()
  const rating = stats.find((stat) => stat.value.includes('/5'))

  return (
    <footer className="site-footer on-dark">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{business.description}</p>
            <p style={{ marginTop: '0.75rem' }}>{business.tagline}</p>

            <p className="footer-rating">
              <i role="img" aria-label={rating ? `Rated ${rating.value} out of 5` : undefined}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Icon key={index} name="star" size={14} />
                ))}
              </i>
              {rating ? `${rating.value} · ${rating.detail}` : null}
            </p>

            <a className="btn btn--sm" href="#contact">
              Book Now
            </a>
          </div>

          <div>
            <h2 className="footer-heading">Courses</h2>
            <ul className="footer-list">
              {courses.map((course) => (
                <li key={course.id}>
                  <a href="#courses">{course.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Quick links</h2>
            <ul className="footer-list">
              {footerLinks.quick.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <h2 className="footer-heading" style={{ marginTop: '1.75rem' }}>
              Service areas
            </h2>
            <ul className="footer-list">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <a href="#locations">{area.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-list">
              <li>
                <a href={contact.phoneHref}>
                  <Icon name="phone" size={16} />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={16} />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>
                  <Icon name="mail" size={16} />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="pin" size={16} />
                  {contact.addressLines.join(', ')}
                </a>
              </li>
              <li>
                <span>
                  <Icon name="clock" size={16} />
                  {contact.hours[0].days}: {contact.hours[0].time}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {business.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <a href="./privacy.html">Privacy Policy</a>
            <a href="./terms.html">Terms &amp; Conditions</a>
            <a href="#contact">Book now</a>
          </nav>

          <p className="footer-demo">
            Website designed by{' '}
            <a href="https://www.griffinaitech.com" target="_blank" rel="noopener noreferrer">
              Griffin AI Tech
            </a>{' '}
            — Want one like this for your business?{' '}
            <a href={designerWhatsappUrl} target="_blank" rel="noopener noreferrer">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
