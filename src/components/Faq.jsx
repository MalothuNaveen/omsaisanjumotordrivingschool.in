import { useState } from 'react'
import Icon from './ui/Icon'
import { faqs } from '../data/site'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__aside" data-reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq-title">
            Common Questions
          </h2>
          <p className="section-lede">
            If your question is not here, message us — we answer WhatsApp enquiries within a couple
            of hours during working times.
          </p>

        </div>

        <div className="accordion" data-reveal data-reveal-delay="1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div className="accordion__item" key={faq.q}>
                <h3>
                  <button
                    type="button"
                    className="accordion__trigger"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {faq.q}
                    <span className="accordion__icon" aria-hidden="true">
                      <Icon name="chevron" size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  className={`accordion__panel${isOpen ? ' is-open' : ''}`}
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                >
                  <div>
                    <p className="accordion__body">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
