import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { skills } from '../data/site'

/* The four art-directed shots that sit above the skills list. */
const gallery = [
  { id: 'training-manual', caption: 'Manual control' },
  { id: 'training-automatic', caption: 'Automatic control' },
  { id: 'training-road', caption: 'Road training' },
  { id: 'training-parking', caption: 'Parking practice' },
]

export default function TrainingExperience() {
  return (
    <section className="section section--paper2" id="training" aria-labelledby="training-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Training experience</p>
          <h2 className="section-title" id="training-title">
            What You’ll Learn
          </h2>
          <p className="section-lede">
            Every course is built from the same eight modules. Your instructor decides how much
            time each one needs based on how you are actually driving, not on a fixed syllabus.
          </p>
        </div>

        <div className="learn__gallery">
          {gallery.map((shot, index) => (
            <div className="learn__shot" key={shot.id} data-reveal data-reveal-delay={index}>
              {/* IMAGE SLOT: training gallery — see src/data/images.js */}
              <ImageSlot
                id={shot.id}
                className="slot--hover"
                sizes="(min-width: 860px) 22vw, 45vw"
              />
              <p className="learn__caption">{shot.caption}</p>
            </div>
          ))}
        </div>

        <div className="learn__grid">
          {skills.map((skill, index) => (
            <article className="learn__item" key={skill.title} data-reveal data-reveal-delay={index % 4}>
              <Icon name={skill.icon} size={24} />
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
