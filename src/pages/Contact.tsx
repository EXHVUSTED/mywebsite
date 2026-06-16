import { useLanguage } from '../i18n'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.contact.title}</h1>
      <p>{t.contact.intro}</p>
      <ul className="page__list">
        <li>Email: your@email.ru</li>
        <li>
          {t.contact.phone}: +7 (999) 000-00-00
        </li>
        <li>Telegram: @yourhandle</li>
      </ul>
    </div>
  )
}
