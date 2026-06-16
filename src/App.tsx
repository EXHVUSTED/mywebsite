import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { LanguageProvider, languages, useLanguage } from './i18n'
import Home from './pages/Home'
import Order from './pages/Order'
import Contact from './pages/Contact'
import './App.css'

function AppContent() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <Router>
      <header className="site-header">
        <div className="site-header__top">
          <h1 className="site-header__title">{t.siteTitle}</h1>
          <label className="language-switcher">
            <span>{t.language.label}</span>
            <select
              className="language-switcher__select"
              value={language}
              onChange={(event) => setLanguage(event.target.value as typeof language)}
            >
              {languages.map((languageOption) => (
                <option key={languageOption} value={languageOption}>
                  {t.language.names[languageOption]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <nav className="site-nav">
          <Link to="/">{t.nav.home}</Link>
          <Link to="/order">{t.nav.order}</Link>
          <Link to="/contact">{t.nav.contact}</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
