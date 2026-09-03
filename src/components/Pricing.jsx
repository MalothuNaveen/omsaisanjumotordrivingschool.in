import Icon from './ui/Icon'
import { plans, pricingNotes } from '../data/site'

export default function Pricing() {
  return (
    <section className="section section--white" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title" id="pricing-title">
            Straightforward Plans, No Hidden Extras
          </h2>
          <p className="section-lede">
            One payment covers the lessons, the car and the fuel. Pay after we confirm your
            instructor and slot — never before.
          </p>
        </div>

        <div className="plans">
          {plans.map((plan, index) => (
            <article
              className={`plan${plan.featured ? ' plan--featured on-dark' : ''}`}
              key={plan.id}
              data-reveal
              data-reveal-delay={index}
            >
              {plan.featured && <p className="plan__flag">Most popular</p>}
              <h3 className="plan__name">{plan.name}</h3>
              <p className="plan__price">
                <b>{plan.price}</b>
                <span>{plan.period}</span>
              </p>
              <p className="plan__tagline">{plan.tagline}</p>

              <ul className="plan__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                className={`btn btn--block plan__cta${plan.featured ? '' : ' btn--outline'}`}
                href="#contact"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="pricing__notes">
          <ul className="pricing__fineprint" data-reveal>
            {pricingNotes.map((note) => (
              <li key={note}>
                <Icon name="check" size={14} />
                {note}
              </li>
            ))}
          </ul>

          <div className="pricing__custom" data-reveal data-reveal-delay="1">
            <h3>Need a custom plan?</h3>
            <p>
              Tell us how many lessons you think you need, or ask for a package split across two
              months. We will put together a quote.
            </p>
            <a className="btn btn--dark" href="#contact">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
