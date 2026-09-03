import Icon from './ui/Icon'
import ImageSlot from './ui/ImageSlot'
import { vehicles } from '../data/site'

export default function Vehicles() {
  return (
    <section className="section section--white" id="vehicles" aria-labelledby="vehicles-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Training vehicles</p>
          <h2 className="section-title" id="vehicles-title">
            You Drive Our Car, Not Yours
          </h2>
          <p className="section-lede">
            Two training cars, both fitted with instructor-side controls and serviced on a fixed
            schedule. Fuel is included in every course price.
          </p>
        </div>

        <div className="vehicles__grid">
          {vehicles.map((vehicle, index) => (
            <article className="vehicle" key={vehicle.id} data-reveal data-reveal-delay={index}>
              {/* IMAGE SLOT: training vehicle — see src/data/images.js */}
              <ImageSlot
                id={vehicle.imageId}
                variant="flush"
                rounded={false}
                className="slot--hover"
                sizes="(min-width: 860px) 46vw, 92vw"
              />
              <div className="vehicle__body">
                <p className="vehicle__type">{vehicle.type}</p>
                <h3 className="vehicle__name">{vehicle.name}</h3>
                <p className="vehicle__text">{vehicle.body}</p>
                <ul className="vehicle__specs">
                  {vehicle.specs.map((spec) => (
                    <li key={spec}>
                      <Icon name="check" size={16} />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
