import ImageSlot from './ui/ImageSlot'
import { safetyTopics } from '../data/site'

export default function Safety() {
  return (
    <section className="section section--dark on-dark" id="safety" aria-labelledby="safety-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Safety training</p>
          <h2 className="section-title" id="safety-title">
            Drive Safely. Drive Responsibly.
          </h2>
          <p className="section-lede">
            Seven safety modules run through every course. They are not an add-on for the test —
            they are how we teach from the first lesson.
          </p>
        </div>

        <div className="safety__inner">
          <div className="safety__visual" data-reveal>
            {/* IMAGE SLOT: safety training — see src/data/images.js → 'safety-training' */}
            <ImageSlot
              id="safety-training"
              className="slot--hover"
              sizes="(min-width: 1000px) 38vw, 92vw"
            />
          </div>

          <div className="safety__list">
            {safetyTopics.map((topic, index) => (
              <article className="safety__item" key={topic.code} data-reveal data-reveal-delay={index % 2}>
                <span className="safety__code" aria-hidden="true">
                  {topic.code}
                </span>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
