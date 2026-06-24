import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'

export default function Order() {
  const { t } = useLanguage()

  return (
    <div className="page offer-page">
      <header className="offer-page__header">
        <h1>{t.order.title}</h1>
        <p>{t.order.intro}</p>
      </header>

      <section className="offer-section" aria-labelledby="offer-services">
        <div className="offer-section__header">
          <h2 id="offer-services">{t.order.servicesTitle}</h2>
        </div>

        <div className="service-grid service-grid--selectable">
          {t.order.services.map((service, index) => (
            <article className="service-card service-card--selectable" key={service.title}>
              <div>
                <h3>{service.title}</h3>
                <p className="service-card__price">{service.price}</p>
                <p>{service.note}</p>
              </div>
              <Link
                className="service-card__button service-card__button--link"
                to={`/checkout?service=${index}`}
              >
                {t.order.chooseService}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
