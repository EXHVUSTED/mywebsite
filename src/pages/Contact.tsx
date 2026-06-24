import { useLanguage } from '../i18n'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.contact.title}</h1>
      <p>{t.contact.intro}</p>
      <ul className="page__list">
        <li>Email: nikitagordeev.de@gmail.com</li>
        <li>
          {t.contact.phone}: +49 155 11386879
        </li>
        <li>Telegram: 
          <a href="https://t.me/xhvust" target="_blank" rel="noopener noreferrer"> https://t.me/xhvust</a>
        </li>
      </ul>
    </div>
  )
}
