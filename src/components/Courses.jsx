import Icon from './ui/Icon'
import { courses } from '../data/site'

export default function Courses() {
  return (
    <section className="section section--white" id="courses" aria-labelledby="courses-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Courses</p>
          <h2 className="section-title" id="courses-title">
            Training That Fits Your Driving Goals
          </h2>
          <p className="section-lede">
            Six focused car driving courses, from a first day behind the wheel to a licence test
            two weeks away. Every course includes the training car and a certified instructor.
          </p>
        </div>

        <div className="courses__grid">
          {courses.map((course, index) => (
            <article
              className={`course${course.featured ? ' course--featured' : ''}`}
              key={course.id}
              data-reveal
              data-reveal-delay={index % 3}
            >
              {course.featured && <p className="course__flag">Most chosen</p>}

              <p className="course__level">{course.level}</p>
              <h3 className="course__name">{course.name}</h3>
              <p className="course__summary">{course.summary}</p>

              <ul className="course__list">
                {course.highlights.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="course__meta">
                <p className="course__duration">
                  <Icon name="clock" size={15} />
                  {course.duration}
                </p>
                <p className="course__price">
                  <b>Contact us</b>
                  <span>For details</span>
                </p>
              </div>

              <a className="btn btn--outline btn--block course__cta" href="#contact">
                Book this course
              </a>
            </article>
          ))}
        </div>

        <div className="courses__note" data-reveal>
          <p>
            <strong>Not sure which course you need?</strong> Tell us how much you have driven and
            we will recommend one — there is no charge for the advice, and no obligation to book.
          </p>
          <a className="btn btn--dark" href="#contact">
            Ask for a recommendation
          </a>
        </div>
      </div>
    </section>
  )
}
