import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { LanguageProvider, languages, useLanguage } from './i18n'
import Home from './pages/Home'
import Order from './pages/Order'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import './App.css'

type Theme = 'light' | 'dark'

const themeStorageKey = 'preferred-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey) as Theme | null

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

type ThemeSwitchProps = {
  className: string
  theme: Theme
  toggleTheme: () => void
  label: string
  title: string
  nextTitle: string
}

function ThemeSwitch({
  className,
  theme,
  toggleTheme,
  label,
  title,
  nextTitle,
}: ThemeSwitchProps) {
  return (
    <button
      className={`theme-switch ${className}`}
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={title}
      data-theme={theme}
    >
      <span className="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5M12 19.5V22M4.93 4.93 6.7 6.7M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" />
        </svg>
      </span>
      <span className="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M20.5 14.4A7.4 7.4 0 0 1 9.6 3.5 8.7 8.7 0 1 0 20.5 14.4Z" />
        </svg>
      </span>
      <span className="theme-switch__thumb" aria-hidden="true">
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" role="img">
            <path d="M20.5 14.4A7.4 7.4 0 0 1 9.6 3.5 8.7 8.7 0 1 0 20.5 14.4Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" role="img">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2.5M12 19.5V22M4.93 4.93 6.7 6.7M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" />
          </svg>
        )}
      </span>
      <span className="theme-switch__sr">{nextTitle}</span>
    </button>
  )
}

function AppContent() {
  const { language, setLanguage, t } = useLanguage()
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  const currentThemeTitle = theme === 'dark' ? t.theme.dark : t.theme.light
  const nextThemeTitle = nextTheme === 'dark' ? t.theme.dark : t.theme.light

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Router>
      <header className="site-header">
        <div className="site-header__top">
          <h1 className="site-header__title">{t.siteTitle}</h1>
          <div className="site-header__actions">
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

            <ThemeSwitch
              className="theme-switch--desktop"
              theme={theme}
              toggleTheme={toggleTheme}
              label={t.theme.toggle}
              title={currentThemeTitle}
              nextTitle={nextThemeTitle}
            />
          </div>
        </div>

        <nav className="site-nav">
          <NavLink to="/">{t.nav.home}</NavLink>
          <NavLink to="/order">{t.nav.order}</NavLink>
          <NavLink to="/contact">{t.nav.contact}</NavLink>
        </nav>
      </header>

      <ThemeSwitch
        className="theme-switch--mobile"
        theme={theme}
        toggleTheme={toggleTheme}
        label={t.theme.toggle}
        title={currentThemeTitle}
        nextTitle={nextThemeTitle}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/checkout" element={<Checkout />} />
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
