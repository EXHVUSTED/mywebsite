import WorkExamples from '../components/WorkExamples'
import { useLanguage } from '../i18n'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="page">
      <h1>{t.home.title}</h1>
      <p>{t.home.intro}</p>
      <p>{t.home.details}</p>
      <WorkExamples compact />
    </div>
  )
}
