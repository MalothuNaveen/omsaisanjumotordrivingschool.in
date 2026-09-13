import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { services } from '../data/site'

export default function Services() {
  return (
    <section className="section section--paper2" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">What we offer</p>
          <h2 className="section-title" id="services-title">
            Our Services
          </h2>
          <p className="section-lede">
            Everything you need for your driving licence, in one place.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <a
              className={`service-card${service.imageFit === 'contain' ? ' service-card--contain' : ''}`}
              href={service.href}
              key={service.id}
              data-reveal
              data-reveal-delay={index % 4}
            >
              {service.icon ? (
                <div className="service-card__icon-bg" aria-hidden="true">
                  <Icon name={service.icon} size={96} />
                </div>
              ) : (
                <ImageSlot
                  id={service.imageId}
                  variant="flush"
                  className={`service-card__image${
                    service.imageFit === 'contain' ? ' service-card__image--contain' : ''
                  }`}
                />
              )}
              <div className="service-card__bar">
                <div>
                  <p className="service-card__title">{service.title}</p>
                  <p className="service-card__note">{service.note}</p>
                </div>
                <span className="service-card__cta">
                  Enquire now
                  <Icon name="arrowRight" size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
