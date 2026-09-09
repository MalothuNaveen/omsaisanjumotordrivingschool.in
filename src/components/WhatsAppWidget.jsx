import Icon from './ui/Icon'
import { whatsappUrl } from '../data/site'

export default function WhatsAppWidget() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-widget__pulse"></div>
      <Icon name="whatsapp" size={28} />
    </a>
  )
}
