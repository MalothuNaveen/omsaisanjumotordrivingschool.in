/**
 * Icon — a single inline-SVG line-icon set.
 * Automotive / engineering style: 24px grid, 1.5 stroke, no fills, no emoji.
 * Decorative by default (aria-hidden); pass `title` to expose it to a11y tree.
 */

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  steering: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 9.4V3.1M9.8 13.3 4.4 16.6M14.2 13.3l5.4 3.3" />
    </g>
  ),
  pedals: (
    <g {...stroke}>
      <rect x="3.5" y="5" width="5.5" height="10" rx="2.2" />
      <rect x="15" y="3.5" width="5.5" height="11.5" rx="2.2" />
      <path d="M2 19h20" />
    </g>
  ),
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </g>
  ),
  shieldUser: (
    <g {...stroke}>
      <path d="M12 21c4-1.6 7-5.2 7-9.4V5.8L12 3 5 5.8v5.8C5 15.8 8 19.4 12 21Z" />
      <circle cx="12" cy="10.2" r="2.1" />
      <path d="M8.7 15.6a3.7 3.7 0 0 1 6.6 0" />
    </g>
  ),
  cone: (
    <g {...stroke}>
      <path d="M12 3.5 17.8 19H6.2L12 3.5Z" />
      <path d="M9.4 11.5h5.2M8.2 15.3h7.6M3 21h18" />
    </g>
  ),
  chart: (
    <g {...stroke}>
      <path d="M4 3.5v16.5h16" />
      <path d="m7.5 15.2 3.2-3.9 2.7 2 4.1-5.6" />
      <path d="M17.5 7.7h-2.9M17.5 7.7v2.9" />
    </g>
  ),
  dashboard: (
    <g {...stroke}>
      <path d="M3.5 17a8.5 8.5 0 0 1 17 0" />
      <path d="M12 17l4.2-5.2" />
      <circle cx="12" cy="17" r="1.4" />
      <path d="M4.6 12.2 5.8 13M12 6.3v1.4M19.4 12.2 18.2 13" />
    </g>
  ),
  gear: (
    <g {...stroke}>
      <circle cx="12" cy="4.4" r="2.2" />
      <path d="M12 6.6v5.2" />
      <path d="M5 11.8h14M5 11.8v5.4M19 11.8v5.4M12 11.8v5.4" />
    </g>
  ),
  eye: (
    <g {...stroke}>
      <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.9" />
    </g>
  ),
  junction: (
    <g {...stroke}>
      <path d="M12 21V3M3 12h18" />
      <path d="m16.6 8.6 3.4 3.4-3.4 3.4" />
    </g>
  ),
  parking: (
    <g {...stroke}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="3.4" />
      <path d="M10 16.4V7.8h3.1a2.6 2.6 0 0 1 0 5.2H10" />
    </g>
  ),
  highway: (
    <g {...stroke}>
      <path d="M4 20.5 9.2 3.5M20 20.5 14.8 3.5" />
      <path d="M12 5.5v2.4M12 11v2.4M12 16.5v2.4" />
    </g>
  ),
  shield: (
    <g {...stroke}>
      <path d="M12 21c4-1.6 7-5.2 7-9.4V5.8L12 3 5 5.8v5.8C5 15.8 8 19.4 12 21Z" />
      <path d="m9 11.7 2.1 2.1L15.2 9.7" />
    </g>
  ),
  car: (
    <g {...stroke}>
      <path d="M3 15.5v-2.2l1.8-4.4A2.4 2.4 0 0 1 7 7.4h10a2.4 2.4 0 0 1 2.2 1.5l1.8 4.4v2.2" />
      <path d="M3 13.3h18" />
      <path d="M3 15.5h18v2.2H3zM6.4 17.7v1.6M17.6 17.7v1.6" />
      <circle cx="7.4" cy="15.5" r=".9" />
      <circle cx="16.6" cy="15.5" r=".9" />
    </g>
  ),
  route: (
    <g {...stroke}>
      <circle cx="6" cy="5.6" r="2.4" />
      <circle cx="18" cy="18.4" r="2.4" />
      <path d="M6 8v4.4a3.2 3.2 0 0 0 3.2 3.2h5.6" />
    </g>
  ),
  pin: (
    <g {...stroke}>
      <path d="M12 21.5s7-5.6 7-10.6a7 7 0 1 0-14 0c0 5 7 10.6 7 10.6Z" />
      <circle cx="12" cy="10.6" r="2.6" />
    </g>
  ),
  phone: (
    <g {...stroke}>
      <path d="M6.2 3.5h3l1.5 3.8-1.9 1.4a11.4 11.4 0 0 0 5.5 5.5l1.4-1.9 3.8 1.5v3a1.7 1.7 0 0 1-1.9 1.7C10.4 17.8 6.2 13.6 4.5 5.4a1.7 1.7 0 0 1 1.7-1.9Z" />
    </g>
  ),
  mail: (
    <g {...stroke}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.4" />
      <path d="m3.6 7 8.4 5.8L20.4 7" />
    </g>
  ),
  calendar: (
    <g {...stroke}>
      <rect x="3.2" y="5" width="17.6" height="16" rx="2.6" />
      <path d="M3.2 9.6h17.6M8 3v4M16 3v4" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <path d="m4.5 12.5 4.8 4.8L19.5 7" />
    </g>
  ),
  chevron: (
    <g {...stroke}>
      <path d="m6 9.5 6 6 6-6" />
    </g>
  ),
  arrowRight: (
    <g {...stroke}>
      <path d="M4 12h15.5M13.6 6.2 19.8 12l-6.2 5.8" />
    </g>
  ),
  menu: (
    <g {...stroke}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </g>
  ),
  close: (
    <g {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
    </g>
  ),
  plus: (
    <g {...stroke}>
      <path d="M12 5v14M5 12h14" />
    </g>
  ),
  quote: (
    <g fill="currentColor">
      <path d="M9.6 5.4c-3.2 1.5-5.1 4.2-5.1 7.6v5.6h6.9v-6.5H7.7c.1-1.9 1-3.2 2.9-4.1l-1-2.6Zm9.9 0c-3.2 1.5-5.1 4.2-5.1 7.6v5.6h6.9v-6.5h-3.7c.1-1.9 1-3.2 2.9-4.1l-1-2.6Z" />
    </g>
  ),
  star: (
    <g fill="currentColor">
      <path d="m12 2.6 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6Z" />
    </g>
  ),
  whatsapp: (
    <g fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.46-2.39-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.34m-5.42 7.4a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.17-1.24-6.16-3.48-8.4Z" />
    </g>
  ),
  image: (
    <g {...stroke}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.4" />
      <circle cx="8.6" cy="9.8" r="1.6" />
      <path d="m3.6 17.4 4.6-4.4a2 2 0 0 1 2.7 0l3.4 3.2m0 0 1.8-1.7a2 2 0 0 1 2.7 0l1.7 1.6m-6.2.1 2.6 2.5" />
    </g>
  ),
}

export default function Icon({ name, size = 24, title, className = '', ...rest }) {
  const glyph = paths[name]
  if (!glyph) return null
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title || undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {glyph}
    </svg>
  )
}
