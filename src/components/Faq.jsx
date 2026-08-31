import { useState } from 'react'
import Icon from './ui/Icon'
import { faqs, whatsappUrl } from '../data/site'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__aside" data-reveal>
          <p className="eyebrow">Questions</p>
          <h2 className="section-title" id="faq-title">
            Everything Learners Ask Us First
          </h2>
          <p className="section-lede">
            If your question is not here, message us — we answer WhatsApp enquiries within a couple
            of hours during working times.
          </p>

          <div className="faq__help">
            <h3>Still deciding?</h3>
            <p>
              Send us a message with how much you have driven so far and we will tell you honestly
              how many lessons you are likely to need.
            </p>
            <a
              className="btn btn--wa btn--block"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              Ask on WhatsApp
            </a>
          </div>
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
