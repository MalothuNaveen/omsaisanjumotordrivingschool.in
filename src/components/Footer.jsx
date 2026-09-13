import Icon from './ui/Icon'
import Logo from './ui/Logo'
import { business, contact, navLinks, mapsUrl, whatsappUrl } from '../data/site'

const designerWhatsappUrl =
  'https://wa.me/919515538159?text=' +
  encodeURIComponent(
    'Hi, I saw the website you built for Om Sai Sanju Motor Driving School. I would like a website for my business too.',
  )

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{business.description}</p>
          </div>


          <div>
            <h2 className="footer-heading">Quick links</h2>
            <ul className="footer-list">
              {navLinks.filter(link => link.id !== 'home').map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
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
