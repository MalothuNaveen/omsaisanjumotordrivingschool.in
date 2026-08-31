import { useMemo, useRef, useState } from 'react'
import Icon from './ui/Icon'
import { formOptions, whatsappUrl } from '../data/site'

const EMPTY = {
  name: '',
  phone: '',
  email: '',
  course: '',
  transmission: '',
  area: '',
  date: '',
  time: '',
  experience: '',
  message: '',
}

const LABELS = {
  name: 'Full name',
  phone: 'Phone number',
  email: 'Email address',
  course: 'Preferred course',
  transmission: 'Manual or automatic',
  area: 'Preferred area',
  date: 'Preferred start date',
  time: 'Preferred time',
  experience: 'Current experience',
  message: 'Anything else we should know',
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  else if (values.name.trim().length < 2) errors.name = 'Please enter at least 2 characters.'

  const digits = values.phone.replace(/\D/g, '')
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number we can reach you on.'
  else if (!/^(91)?[6-9]\d{9}$/.test(digits))
    errors.phone = 'Enter a 10-digit Indian mobile number, for example 98490 12345.'

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email address does not look right.'

  if (!values.course) errors.course = 'Choose a course, or select “Not sure yet”.'
  if (!values.transmission) errors.transmission = 'Choose manual, automatic or not sure.'
  if (!values.area) errors.area = 'Choose the area you would like to train in.'

  if (!values.date) {
    errors.date = 'Choose the date you would like to start.'
  } else {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (new Date(`${values.date}T00:00:00`) < today) errors.date = 'Please choose a date from today onwards.'
  }

  return errors
}

/* --- Small field wrappers, so every control gets the same label / error rig -- */

function Field({ id, label, error, hint, required, wide, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}${wide ? ' field--wide' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {label}
        {required && (
          <span className="field__req" aria-hidden="true">
            {' '}
            *
          </span>
        )}
        {!required && <span className="field__hint"> (optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <Icon name="close" size={13} />
          {error}
        </p>
      )}
    </div>
  )
}

export default function BookingForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)
  const summaryRef = useRef(null)
  const headingRef = useRef(null)

  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])

  const update = (key) => (event) => {
    const { value } = event.target
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => {
      if (!prev[key]) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const describedBy = (key, hint) => {
    const ids = []
    if (errors[key]) ids.push(`${key}-error`)
    else if (hint) ids.push(`${key}-hint`)
    return ids.length ? ids.join(' ') : undefined
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length) {
      window.requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    /* Demo only — nothing is sent anywhere. Wire this up to a real endpoint
       (or a WhatsApp deep link) when the site goes live. */
    setSubmitted(values)
    setValues(EMPTY)
    window.requestAnimationFrame(() => headingRef.current?.focus())
  }

  if (submitted) {
    const recap = [
      ['Name', submitted.name],
      ['Course', submitted.course],
      ['Transmission', submitted.transmission],
      ['Area', submitted.area],
      ['Start date', new Date(`${submitted.date}T00:00:00`).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })],
      submitted.time ? ['Preferred time', submitted.time] : null,
    ].filter(Boolean)

    return (
      <div className="booking booking--done" aria-live="polite">
        <div className="booking__tick" aria-hidden="true">
          <Icon name="check" size={30} />
        </div>
        <h3 className="booking__done-title" tabIndex={-1} ref={headingRef}>
          Request received, {submitted.name.split(' ')[0]}
        </h3>
        <p className="booking__done-text">
          A course coordinator will call you on <strong>{submitted.phone}</strong> within one
          working day to confirm your instructor and slot. Nothing is payable until then.
        </p>

        <dl className="booking__recap">
          {recap.map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="booking__done-actions">
          <a
            className="btn btn--wa"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" size={18} />
            Message us on WhatsApp
          </a>
          <button type="button" className="btn btn--outline" onClick={() => setSubmitted(null)}>
            Make another booking
          </button>
        </div>
      </div>
    )
  }

  const errorKeys = Object.keys(errors)

  return (
    <form className="booking" onSubmit={handleSubmit} noValidate>
      <div
        className="booking__summary"
        role="alert"
        tabIndex={-1}
        ref={summaryRef}
        hidden={!errorKeys.length}
      >
        {errorKeys.length > 0 && (
          <>
            <strong>
              {errorKeys.length === 1
                ? 'One field needs your attention:'
                : `${errorKeys.length} fields need your attention:`}
            </strong>
            <ul>
              {errorKeys.map((key) => (
                <li key={key}>
                  <a href={`#${key}`}>{LABELS[key]}</a> — {errors[key]}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="booking__grid">
        <Field id="name" label={LABELS.name} error={errors.name} required>
          <input
            className="input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ananya Iyer"
            value={values.name}
            onChange={update('name')}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={describedBy('name')}
          />
        </Field>

        <Field
          id="phone"
          label={LABELS.phone}
          error={errors.phone}
          hint="We call to confirm your slot — WhatsApp works too."
          required
        >
          <input
            className="input"
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="98490 12345"
            value={values.phone}
            onChange={update('phone')}
            aria-invalid={errors.phone ? 'true' : undefined}
            aria-describedby={describedBy('phone', true)}
          />
        </Field>

        <Field id="email" label={LABELS.email} error={errors.email}>
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={update('email')}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={describedBy('email')}
          />
        </Field>

        <Field id="course" label={LABELS.course} error={errors.course} required>
          <select
            className="select"
            id="course"
            name="course"
            value={values.course}
            onChange={update('course')}
            aria-invalid={errors.course ? 'true' : undefined}
            aria-describedby={describedBy('course')}
          >
            <option value="">Select a course</option>
            {formOptions.courses.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="transmission" label={LABELS.transmission} error={errors.transmission} required>
          <select
            className="select"
            id="transmission"
            name="transmission"
            value={values.transmission}
            onChange={update('transmission')}
            aria-invalid={errors.transmission ? 'true' : undefined}
            aria-describedby={describedBy('transmission')}
          >
            <option value="">Select transmission</option>
            {formOptions.transmission.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="area" label={LABELS.area} error={errors.area} required>
          <select
            className="select"
            id="area"
            name="area"
            value={values.area}
            onChange={update('area')}
            aria-invalid={errors.area ? 'true' : undefined}
            aria-describedby={describedBy('area')}
          >
            <option value="">Select an area</option>
            {formOptions.areas.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="date" label={LABELS.date} error={errors.date} required>
          <input
            className="input"
            id="date"
            name="date"
            type="date"
            min={today}
            value={values.date}
            onChange={update('date')}
            aria-invalid={errors.date ? 'true' : undefined}
            aria-describedby={describedBy('date')}
          />
        </Field>

        <Field id="time" label={LABELS.time} error={errors.time}>
          <select
            className="select"
            id="time"
            name="time"
            value={values.time}
            onChange={update('time')}
            aria-describedby={describedBy('time')}
          >
            <option value="">Any available slot</option>
            {formOptions.times.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="experience" label={LABELS.experience} error={errors.experience} wide>
          <select
            className="select"
            id="experience"
            name="experience"
            value={values.experience}
            onChange={update('experience')}
            aria-describedby={describedBy('experience')}
          >
            <option value="">Select your experience level</option>
            {formOptions.experience.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label={LABELS.message} error={errors.message} wide>
          <textarea
            className="textarea"
            id="message"
            name="message"
            rows={4}
            placeholder="Pickup address, preferred instructor, or anything you are nervous about."
            value={values.message}
            onChange={update('message')}
            aria-describedby={describedBy('message')}
          />
        </Field>
      </div>

      <div className="booking__foot">
        <p className="booking__note">
          Fields marked * are required. We use your details only to arrange your lessons, and you
          pay nothing until the slot is confirmed.
        </p>
        <button type="submit" className="btn btn--lg">
          Book a Lesson
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </form>
  )
}
