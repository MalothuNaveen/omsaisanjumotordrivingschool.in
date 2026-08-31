import { business, stats } from '../data/site'

/** Splits "4.9/5" into "4.9" + "/5" so the suffix can carry the accent colour. */
function splitValue(value) {
  const match = /^([\d.,]+)(.*)$/.exec(value)
  return match ? [match[1], match[2]] : [value, '']
}

export default function TrustBar() {
  return (
    <section className="trustbar" aria-label={`${business.nameFull} at a glance`}>
      <div className="container">
        <div className="trustbar__grid">
          {stats.map((stat, index) => {
            const [number, suffix] = splitValue(stat.value)
            return (
              <div
                className="trustbar__item"
                key={stat.label}
                data-reveal
                data-reveal-delay={index}
              >
                <p className="trustbar__value">
                  {number}
                  {suffix && <em>{suffix}</em>}
                </p>
                <p className="trustbar__label">{stat.label}</p>
                <p className="trustbar__detail">{stat.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
