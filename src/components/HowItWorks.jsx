import { steps } from '../data/site'

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="how-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">How it works</p>
          <h2 className="section-title" id="how-title">
            From First Enquiry to Driving on Your Own
          </h2>
          <p className="section-lede">
            Five steps, no paperwork surprises. Most learners go from their first message to their
            first lesson within two working days.
          </p>
        </div>

        <ol className="steps">
          {steps.map((step, index) => (
            <li className="step" key={step.num} data-reveal data-reveal-delay={index}>
              <span className="step__num" aria-hidden="true">
                {step.num}
              </span>
              <h3 className="step__title">
                <span className="visually-hidden">{`Step ${Number(step.num)}: `}</span>
                {step.title}
              </h3>
              <p className="step__body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
