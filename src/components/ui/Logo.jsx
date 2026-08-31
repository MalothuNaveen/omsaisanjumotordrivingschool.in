import { business } from '../../data/site'

/** Text-based wordmark with a milestone-stone mark. Works on light and dark. */
export default function Logo({ href = '#home', onClick, className = '' }) {
  return (
    <a
      className={`logo ${className}`.trim()}
      href={href}
      onClick={onClick}
      aria-label={`${business.nameFull} — back to top`}
    >
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <rect width="64" height="64" rx="13" fill="#0e1621" />
        <path d="M18 52V28a14 14 0 0 1 28 0v24z" fill="#f4f1ec" />
        <path d="M18 34v-6a14 14 0 0 1 28 0v6z" fill="#e8531e" />
        <rect x="25" y="39" width="14" height="3" rx="1.5" fill="#0e1621" />
        <rect x="25" y="45" width="9" height="3" rx="1.5" fill="#0e1621" opacity=".45" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{business.name}</span>
        <span className="logo__sub">Driving Academy</span>
      </span>
    </a>
  )
}
