import { useState } from 'react'
import { useLanguage } from '../i18n'

type WorkExamplesProps = {
  compact?: boolean
}

export default function WorkExamples({ compact = false }: WorkExamplesProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useLanguage()
  const { items } = t.workExamples
  const activeExample = items[currentIndex] ?? items[0]

  const getProjectTitle = (example: typeof activeExample) => {
    if (example.title.trim()) {
      return example.title
    }

    try {
      const hostname = new URL(example.url).hostname
      const slug = hostname.split('.')[0]

      return slug
        .split('-')
        .filter(Boolean)
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    } catch {
      return t.workExamples.fallbackTitle
    }
  }

  const activeTitle = getProjectTitle(activeExample)

  const showPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? items.length - 1 : index - 1))
  }

  const showNext = () => {
    setCurrentIndex((index) => (index === items.length - 1 ? 0 : index + 1))
  }

  return (
    <section
      className={`work-examples ${compact ? 'work-examples--compact' : ''}`}
    >
      <div className="work-examples__intro">
        <h2>{t.workExamples.title}</h2>
        <p>{t.workExamples.intro}</p>
      </div>

      <article className="work-slider">
        <div className="work-slider__project-tabs" aria-label={t.workExamples.projectList}>
          {items.map((item, index) => {
            const title = getProjectTitle(item)

            return (
              <button
                className="work-slider__project-tab"
                data-active={index === currentIndex}
                key={`${item.url}-${title}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
              >
                {title}
              </button>
            )
          })}
        </div>

        <div
          className="work-slider__header"
          data-has-description={Boolean(activeExample.description)}
        >
          <div className="work-slider__copy">
            <span className="work-slider__eyebrow">{t.workExamples.currentProject}</span>
            <h3>{activeTitle}</h3>
            {activeExample.description ? <p>{activeExample.description}</p> : null}
          </div>

          <div className="work-slider__controls">
            <button
              className="work-slider__button"
              type="button"
              onClick={showPrevious}
              aria-label={t.workExamples.previous}
            >
              &lsaquo;
            </button>
            <span className="work-slider__counter">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              className="work-slider__button"
              type="button"
              onClick={showNext}
              aria-label={t.workExamples.next}
            >
              &rsaquo;
            </button>
          </div>
        </div>

        <div className="work-slider__preview">
          <iframe
            key={activeExample.url}
            src={activeExample.url}
            title={`${activeTitle} preview`}
            sandbox="allow-scripts allow-forms allow-same-origin"
          />
        </div>

        <div className="work-slider__footer">
          <a href={activeExample.url} target="_blank" rel="noreferrer">
            {t.workExamples.openDemo}
          </a>
          <span>{t.workExamples.hostNote}</span>
        </div>
      </article>
    </section>
  )
}
