import Icon from './ui/Icon'
import { benefits } from '../data/site'

export default function WhyChooseUs() {
  return (
    <section className="section section--white" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Why choose us</p>
          <h2 className="section-title" id="why-title">
            Six Reasons Learners Stay With Us
          </h2>
          <p className="section-lede">
            Learning to drive is mostly about how you are taught. These are the things we hold
            ourselves to on every lesson, for every learner.
          </p>
        </div>

        <div className="benefits">
          {benefits.map((benefit, index) => (
            <article
              className="benefit"
              key={benefit.title}
              data-reveal
              data-reveal-delay={index % 3}
            >
              <span className="icon-tile">
                <Icon name={benefit.icon} size={24} />
              </span>
              <h3 className="benefit__title">{benefit.title}</h3>
              <p className="benefit__body">{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
