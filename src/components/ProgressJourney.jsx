import Icon from './ui/Icon'
import { journey } from '../data/site'

export default function ProgressJourney() {
  return (
    <section className="section section--paper2 journey" id="journey" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow">Progress journey</p>
          <h2 className="section-title" id="journey-title">
            Eight Steps to a Confident Driver
          </h2>
          <p className="section-lede">
            Nobody goes from a first lesson to peak-hour traffic in one jump. This is the road
            every learner drives, one step at a time.
          </p>
        </div>

        <ol className="journey__road">
          {journey.map((stop, index) => (
            <li className="journey__stop" key={stop.title} data-reveal data-reveal-delay={index % 2}>
              <div className="journey__marker" aria-hidden="true">
                <span className="journey__stone">
                  <i />
                  <b>{stop.km}</b>
                </span>
              </div>
              <div className="journey__card">
                <p className="journey__stage">Step {stop.km}</p>
                <h3>{stop.title}</h3>
                <p>{stop.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="journey__end" data-reveal>
          <a className="btn btn--dark btn--lg" href="#contact">
            Start at kilometre zero
            <Icon name="arrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
