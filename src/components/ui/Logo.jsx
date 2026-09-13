import { business } from '../../data/site'

export default function Logo({ href = '#home', onClick, className = '' }) {
  return (
    <a
      className={`logo ${className}`.trim()}
      href={href}
      onClick={onClick}
      aria-label={`${business.nameFull} — back to top`}
    >
      <img className="logo__mark" src="/images/logo-wide-tagline.png" width="2172" height="724" alt="Sai Sanju Motor Driving School — Time to Learn with the Best" />
    </a>
  )
}
