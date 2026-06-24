import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useLanguage } from '../i18n'

const offerRecipient = 'nikitagordeev.de@gmail.com'

export default function Checkout() {
  const { t } = useLanguage()
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [comment, setComment] = useState('')
  const [fileName, setFileName] = useState('')

  const serviceIndex = Number(searchParams.get('service') ?? '0')
  const selectedService =
    Number.isInteger(serviceIndex) && t.order.services[serviceIndex]
      ? t.order.services[serviceIndex]
      : t.order.services[0]

  const mailtoHref = useMemo(() => {
    const labels = t.order.form.bodyLabels
    const lines = [
      `${labels.service}: ${selectedService.title}`,
      `${labels.price}: ${selectedService.price}`,
      '',
      `${labels.email}: ${email}`,
      `${labels.phone}: ${phone}`,
      `${labels.file}: ${fileName || '-'}`,
      '',
      `${labels.comment}:`,
      comment || '-',
    ]

    const subject = `${t.order.form.emailSubject}: ${selectedService.title}`

    return `mailto:${offerRecipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      lines.join('\n'),
    )}`
  }, [comment, email, fileName, phone, selectedService, t.order.form])

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.files?.[0]?.name ?? '')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <div className="page offer-page">
      <section className="offer-section offer-section--form" aria-labelledby="offer-form">
        <div className="offer-section__header">
          <span>{t.order.form.selectedService}: {selectedService.title}</span>
          <h1 id="offer-form">{t.order.form.title}</h1>
          <p>{t.order.form.intro}</p>
          <Link className="offer-form__back-link" to="/order">
            {t.order.servicesTitle}
          </Link>
        </div>

        <form className="offer-form" onSubmit={handleSubmit}>
          <fieldset className="offer-form__fieldset">
            <legend>{t.order.form.contactTitle}</legend>

            <label className="offer-form__field">
              <span>{t.order.form.emailLabel}</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="email"
              />
            </label>

            <label className="offer-form__field">
              <span>{t.order.form.phoneLabel}</span>
              <input
                required
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                autoComplete="tel"
              />
            </label>
          </fieldset>

          <label className="offer-form__field">
            <span>{t.order.form.fileLabel}</span>
            <input type="file" onChange={handleFileChange} />
            <small>{t.order.form.fileHint}</small>
          </label>

          <label className="offer-form__field">
            <span>{t.order.form.commentLabel}</span>
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder={t.order.form.commentPlaceholder}
              rows={6}
            />
          </label>

          <button className="button button--primary offer-form__submit" type="submit">
            {t.order.form.submit}
          </button>
        </form>
      </section>
    </div>
  )
}
