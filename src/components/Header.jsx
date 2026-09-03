import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from './ui/Icon'
import Logo from './ui/Logo'
import { contact, navLinks, whatsappUrl } from '../data/site'

export default function Header({ activeId }) {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const drawerRef = useRef(null)
  const toggleRef = useRef(null)
  const closeRef = useRef(null)

  /* Hairline + shadow appear only once the page has moved. */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close the drawer if the viewport grows into the desktop layout. */
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1080px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  /* Scroll lock, Escape to close, focus move in and back out. */
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || !drawerRef.current) return
      const focusables = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      toggle?.focus()
    }
  }, [open])

  const closeDrawer = useCallback(() => setOpen(false), [])

  return (
    <>
      <header className={`site-header${stuck ? ' is-stuck' : ''}`}>
        <div className="container header-inner">
          <Logo />

          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                className={`nav__link${activeId === link.id ? ' is-active' : ''}`}
                href={link.href}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-call" href={contact.phoneHref}>
              <Icon name="phone" size={18} />
              {contact.phoneDisplay}
            </a>
            <a className="btn btn--sm" href="#contact">
              Book a Lesson
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div
        className={`drawer-scrim${open ? ' is-open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <div
        id="mobile-drawer"
        ref={drawerRef}
        className={`drawer${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        {...(open ? {} : { inert: '', 'aria-hidden': 'true' })}
      >
        <div className="drawer__head">
          <Logo onClick={closeDrawer} className="on-dark" />
          <button
            ref={closeRef}
            type="button"
            className="drawer__close"
            aria-label="Close menu"
            onClick={closeDrawer}
          >
            <Icon name="close" size={22} />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`drawer__link${activeId === link.id ? ' is-active' : ''}`}
              href={link.href}
              onClick={closeDrawer}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
              <Icon name="arrowRight" size={18} />
            </a>
          ))}
        </nav>

        <div className="drawer__actions">
          <a className="btn btn--block" href="#contact" onClick={closeDrawer}>
            Book a Lesson
          </a>
          <a
            className="btn btn--wa btn--block"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeDrawer}
          >
            <Icon name="whatsapp" size={18} />
            WhatsApp Us
          </a>
        </div>

        <div className="drawer__meta">
          <a href={contact.phoneHref}>
            <Icon name="phone" size={16} />
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`}>
            <Icon name="mail" size={16} />
            {contact.email}
          </a>
        </div>
      </div>
    </>
  )
}
