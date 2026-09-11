import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { reviews, stats } from '../data/site'

/* NOTE: demo testimonials — see the `reviews` array in src/data/site.js. */

function Stars({ count = 5, className, label }) {
  return (
    <div className={className} role="img" aria-label={label ?? `${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Icon key={i} name="star" size={15} />
      ))}
    </div>
  )
}

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

export default function Reviews() {
  /*  Single source of truth: the learner rating lives in `stats` (site.js).
   *  It used to be hardcoded as 4.9 here while stats and the JSON-LD both
   *  said 4.5, so the page contradicted itself and its own structured data. */
  const rating = stats.find((s) => s.value.includes('/5'))
  const score = rating ? rating.value.split('/')[0] : null

  return (
    <section className="section section--paper2" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="reviews__top">
          <div data-reveal>
            <div className="section-head" style={{ marginBottom: '1.75rem' }}>
              <p className="eyebrow">Learner reviews</p>
              <h2 className="section-title" id="reviews-title">
                What Our Learners Say
              </h2>
              <p className="section-lede">
                Feedback collected from learners after they finished their course across our
                Hyderabad training areas.
              </p>
            </div>

            <div className="rating-card">
              {score && <p className="rating-card__score">{score}</p>}
              <div>
                <Stars
                  className="rating-card__stars"
                  label={score ? `${score} out of 5 stars` : undefined}
                />
                <p className="rating-card__meta">{rating ? rating.detail : '1,284 verified reviews'}</p>
              </div>
            </div>
          </div>

          <div className="reviews__portrait" data-reveal data-reveal-delay="1">
            {/* IMAGE SLOT: real review car — see src/data/images.js → 'review-real-car' */}
            <ImageSlot id="review-real-car" className="slot--hover" sizes="(min-width: 900px) 30vw, 92vw">
              <figcaption className="reviews__photo-badge">
                <Icon name="car" size={17} />
                Real training car
              </figcaption>
            </ImageSlot>
          </div>
        </div>

        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <article className="review" key={review.id} data-reveal data-reveal-delay={index % 3}>
              <Icon name="quote" size={26} className="review__quote-mark" />
              <Stars count={review.rating} className="review__stars" />
              <p className="review__text">{review.quote}</p>
              <footer className="review__by">
                <span className="review__avatar" aria-hidden="true">
                  {initials(review.name)}
                </span>
                <div>
                  <p className="review__name">{review.name}</p>
                  <p className="review__meta">{review.meta}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
