import { getImageSlot } from '../../data/images'

/**
 * ImageSlot — the only way an image enters this site.
 *
 *   <ImageSlot id="hero-driving-lesson" priority />
 *
 * Reads the slot definition from src/data/images.js. While `src` is null it
 * renders a designed placeholder that holds the exact aspect ratio, crop and
 * corner treatment the finished photograph will occupy, so dropping the real
 * image in later causes zero layout shift.
 *
 * Props
 *   id        slot id from the registry (required)
 *   variant   'framed' | 'flush' | 'circle-less' visual treatment hook
 *   rounded   false to square off the corners
 *   priority  true for above-the-fold images (eager load, high fetch priority)
 *   sizes     responsive `sizes` attribute for the real <img>
 *   className extra classes
 *   children  overlay content (badges, captions) rendered above the image
 *
 * Append ?slots to the URL to overlay slot ids while art-directing.
 */

const DEV_LABELS =
  typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('slots')

function Placeholder({ id, size }) {
  return (
    <div className="slot__placeholder" aria-hidden="true">
      <div className="slot__grain" />
      <span className="slot__bracket slot__bracket--tl" />
      <span className="slot__bracket slot__bracket--br" />
      <svg className="slot__mark" viewBox="0 0 64 64" focusable="false">
        <path d="M18 52V28a14 14 0 0 1 28 0v24z" />
        <path d="M25 40h14M25 46h9" />
      </svg>
      {DEV_LABELS && (
        <span className="slot__devlabel">
          {id}
          <br />
          {size}
        </span>
      )}
    </div>
  )
}

export default function ImageSlot({
  id,
  variant = 'framed',
  rounded = true,
  priority = false,
  sizes,
  className = '',
  children,
}) {
  const slot = getImageSlot(id)

  const style = {
    '--slot-ratio': slot.ratio,
    '--slot-ratio-m': slot.ratioMobile || slot.ratio,
    '--slot-object-position': slot.position || 'center center',
  }

  const classes = [
    'slot',
    `slot--${variant}`,
    rounded ? 'slot--rounded' : 'slot--square',
    slot.src ? 'slot--has-image' : 'slot--empty',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={classes} style={style} data-image-slot={id}>
      {slot.src ? (
        <img
          className="slot__img"
          src={slot.src}
          alt={slot.alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          {...(priority ? { fetchpriority: 'high' } : {})}
          draggable="false"
        />
      ) : (
        <Placeholder id={id} size={slot.size} />
      )}
      {children}
    </figure>
  )
}
