import { useLanguage } from '../i18n'

export default function Order() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.order.title}</h1>
      <p>{t.order.intro}</p>
      <h2 className="page__section-title">{t.order.servicesTitle}</h2>
      <ul className="page__list">
        {t.order.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>
  )
}
