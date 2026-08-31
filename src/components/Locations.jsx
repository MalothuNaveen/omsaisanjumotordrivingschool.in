import ImageSlot from './ui/ImageSlot'
import Icon from './ui/Icon'
import { contact, mapsUrl, serviceAreas } from '../data/site'

export default function Locations() {
  return (
    <section className="section section--dark on-dark" id="locations" aria-labelledby="locations-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Where we teach</p>
          <h2 className="section-title" id="locations-title">
            Serving Alwal, Secunderabad
          </h2>
          <p className="section-lede">
            Lessons start from our office in Alwal, so you practise on the roads you will actually
            drive on every day.
          </p>
        </div>

        <div className="locations__inner">
          <div className="map" data-reveal>
            <ImageSlot id="office-interior" variant="flush" rounded={false} className="map__photo" />
          </div>

          <div data-reveal data-reveal-delay="1">
            <ul className="areas">
              {serviceAreas.map((area) => (
                <li className="area" key={area.name}>
                  <Icon name="pin" size={20} />
                  <div>
                    <p className="area__name">{area.name}</p>
                    <p className="area__note">{area.note}</p>
                  </div>
                  {area.pickup && <span className="chip chip--dark">Pickup</span>}
                </li>
              ))}
            </ul>

            <div className="locations__office">
              <h3>Office &amp; enquiries</h3>
              <address>
                {contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
              <a className="btn btn--sm" href={mapsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
