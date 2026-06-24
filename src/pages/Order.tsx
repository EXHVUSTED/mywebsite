import { useLanguage } from '../i18n'

export default function Order() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.order.title}</h1>
      <p>{t.order.intro}</p>
      <h2 className="page__section-title">{t.order.servicesTitle}</h2>
      <div className="service-grid">
        {t.order.services.map((service) => (
          <article className="service-card" key={service.title}>
            <div>
              <h3>{service.title}</h3>
              <p className="service-card__price">{service.price}</p>
              <p>{service.note}</p>
            </div>
            <button className="service-card__button" type="button">
              {t.order.chooseService}
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}
