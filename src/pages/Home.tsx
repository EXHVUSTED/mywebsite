import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import WorkExamples from '../components/WorkExamples'
import { useLanguage } from '../i18n'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__content">
          <span className="home-hero__eyebrow">{t.home.eyebrow}</span>
          <h1>{t.home.title}</h1>
          <p>{t.home.intro}</p>

          <div className="home-hero__actions">
            <Link className="button button--primary" to="/order">
              {t.home.primaryCta}
            </Link>
            <a className="button button--secondary" href="#work">
              {t.home.secondaryCta}
            </a>
          </div>
        </div>

        <div className="home-hero__visual" aria-label={t.home.visualTitle}>
          <div className="home-hero__browser">
            <div className="home-hero__browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="home-hero__browser-body">
              <img src={heroImage} alt="" aria-hidden="true" />
              <div>
                <span>{t.home.visualSubtitle}</span>
                <h2>{t.home.visualTitle}</h2>
              </div>
            </div>
            <div className="home-hero__visual-list">
              {t.home.visualItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats" aria-label={t.home.eyebrow}>
        {t.home.stats.map((item) => (
          <article className="home-stat" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <h2>{t.home.servicesTitle}</h2>
          <p>{t.home.servicesIntro}</p>
        </div>

        <div className="home-card-grid">
          {t.home.services.map((service) => (
            <article className="home-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-section--split">
        <div className="home-section__header">
          <h2>{t.home.processTitle}</h2>
        </div>

        <div className="home-process">
          {t.home.process.map((step) => (
            <article className="home-process__item" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-audience">
        <div className="home-section__header">
          <h2>{t.home.audienceTitle}</h2>
        </div>

        <ul className="home-audience__list">
          {t.home.audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="home-audience__cta">
          <p>{t.home.audienceCtaText}</p>
          <Link className="button button--primary" to="/contact">
            {t.home.audienceCtaButton}
          </Link>
        </div>
      </section>

      <div id="work">
        <WorkExamples compact />
      </div>

      <section className="home-cta">
        <h2>{t.home.ctaTitle}</h2>
        <p>{t.home.ctaText}</p>
        <Link className="button button--primary" to="/contact">
          {t.home.ctaButton}
        </Link>
      </section>
    </div>
  )
}
