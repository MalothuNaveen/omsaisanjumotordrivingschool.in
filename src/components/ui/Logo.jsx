import { business } from '../../data/site'

export default function Logo({ href = '#home', onClick, className = '' }) {
  return (
    <a
      className={`logo ${className}`.trim()}
      href={href}
      onClick={onClick}
      aria-label={`${business.nameFull} — back to top`}
    >
      <img className="logo__mark" src="/images/logo.png" alt="" />
    </a>
  )
}
