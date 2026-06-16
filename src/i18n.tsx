import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type Language = 'ru' | 'de' | 'en'

type Translation = {
  siteTitle: string
  nav: {
    home: string
    order: string
    contact: string
  }
  language: {
    label: string
    names: Record<Language, string>
  }
  home: {
    title: string
    intro: string
    details: string
  }
  order: {
    title: string
    intro: string
    servicesTitle: string
    services: string[]
  }
  contact: {
    title: string
    intro: string
    phone: string
  }
  workExamples: {
    title: string
    intro: string
    previous: string
    next: string
    openDemo: string
    hostNote: string
    items: {
      title: string
      description: string
      url: string
    }[]
  }
}

export const languages: Language[] = ['ru', 'de', 'en']

export const translations: Record<Language, Translation> = {
  ru: {
    siteTitle: 'Мой сайт услуг',
    nav: {
      home: 'Главная',
      order: 'Заказать',
      contact: 'Контакты',
    },
    language: {
      label: 'Язык',
      names: {
        ru: 'Русский',
        de: 'Deutsch',
        en: 'English',
      },
    },
    home: {
      title: 'Главная',
      intro:
        'Это главная страница: кратко рассказывает, какие услуги вы оказываете, преимущества и призыв к действию.',
      details:
        'Здесь удобно разместить короткое продающее описание и ссылку на страницу заказов.',
    },
    order: {
      title: 'Заказать',
      intro:
        'Страница для оформления заказа: здесь приведен список услуг и ориентировочные цены, а также инструкция, как связаться для уточнения деталей.',
      servicesTitle: 'Услуги и примерные цены',
      services: [
        'Создание лендинга - от 20 000 руб.',
        'Разработка интернет-магазина - от 50 000 руб.',
        'Редизайн сайта - от 15 000 руб.',
      ],
    },
    contact: {
      title: 'Контакты',
      intro:
        'Здесь указана контактная информация для связи: email, телефон и ссылки на соцсети.',
      phone: 'Телефон',
    },
    workExamples: {
      title: 'Примеры работ',
      intro:
        'Листайте проекты горизонтально. Когда появятся новые работы, они добавятся сюда без удлинения страницы.',
      previous: 'Предыдущая работа',
      next: 'Следующая работа',
      openDemo: 'Открыть демо в новой вкладке',
      hostNote: 'Демо может не отображаться из-за настроек хоста.',
      items: [
        {
          title: 'Garden Products Market',
          description:
            'Интернет-магазин садовых товаров с каталогом и витриной продуктов.',
          url: 'https://garden-products-market.vercel.app/',
        },
        {
          title: 'Yona',
          description:
            'Лендинг с аккуратной подачей продукта и адаптивным интерфейсом.',
          url: 'https://yona-lovat.vercel.app/',
        },
        {
          title: 'Simple Web Page',
          description:
            'Простой лендинг для вашей компании с контактной информацией и описанием услуг.',
          url: 'https://simple-web-page-gamma.vercel.app/',
        },
      ],
    },
  },
  de: {
    siteTitle: 'Meine Website fur Dienstleistungen',
    nav: {
      home: 'Startseite',
      order: 'Anfragen',
      contact: 'Kontakt',
    },
    language: {
      label: 'Sprache',
      names: {
        ru: 'Русский',
        de: 'Deutsch',
        en: 'English',
      },
    },
    home: {
      title: 'Startseite',
      intro:
        'Diese Startseite zeigt kurz, welche Dienstleistungen Sie anbieten, welche Vorteile Kunden haben und wie sie den nachsten Schritt machen.',
      details:
        'Hier passt eine kurze verkaufsstarke Beschreibung und ein Link zur Anfrage-Seite.',
    },
    order: {
      title: 'Anfragen',
      intro:
        'Auf dieser Seite finden Kunden eine Ubersicht der Leistungen, ungefähre Preise und Hinweise, wie sie Details mit Ihnen besprechen konnen.',
      servicesTitle: 'Leistungen und Richtpreise',
      services: [
        'Landingpage erstellen - ab 20.000 RUB',
        'Online-Shop entwickeln - ab 50.000 RUB',
        'Website-Redesign - ab 15.000 RUB',
      ],
    },
    contact: {
      title: 'Kontakt',
      intro:
        'Hier stehen Ihre Kontaktdaten: E-Mail, Telefon und Links zu sozialen Netzwerken.',
      phone: 'Telefon',
    },
    workExamples: {
      title: 'Arbeitsbeispiele',
      intro:
        'Blattern Sie horizontal durch die Projekte. Neue Arbeiten konnen spater hinzugefugt werden, ohne die Seite langer zu machen.',
      previous: 'Vorheriges Projekt',
      next: 'Nachstes Projekt',
      openDemo: 'Demo in neuem Tab offnen',
      hostNote:
        'Die Demo wird je nach Hosting-Einstellungen moglicherweise nicht eingebettet angezeigt.',
      items: [
        {
          title: 'Garden Products Market',
          description:
            'Online-Shop fur Gartenprodukte mit Katalog und Produktprasentation.',
          url: 'https://garden-products-market.vercel.app/',
        },
        {
          title: 'Yona',
          description:
            'Landingpage mit klarer Produktprasentation und responsivem Interface.',
          url: 'https://yona-lovat.vercel.app/',
        },
        {
          title: 'Simple Web Page',
          description:
            'Простой лендинг для вашей компании с контактной информацией и описанием услуг.',
          url: 'https://simple-web-page-gamma.vercel.app/',
        },
      ],
    },
  },
  en: {
    siteTitle: 'My Service Website',
    nav: {
      home: 'Home',
      order: 'Order',
      contact: 'Contact',
    },
    language: {
      label: 'Language',
      names: {
        ru: 'Русский',
        de: 'Deutsch',
        en: 'English',
      },
    },
    home: {
      title: 'Home',
      intro:
        'This home page briefly explains which services you provide, the key benefits, and the main call to action.',
      details:
        'It is a good place for a short sales description and a link to the order page.',
    },
    order: {
      title: 'Order',
      intro:
        'This page helps customers request a project: it lists services, approximate prices, and how to contact you to clarify details.',
      servicesTitle: 'Services and Approximate Prices',
      services: [
        'Landing page creation - from 20,000 RUB',
        'Online store development - from 50,000 RUB',
        'Website redesign - from 15,000 RUB',
      ],
    },
    contact: {
      title: 'Contact',
      intro:
        'Here you can place your contact details: email, phone number, and social media links.',
      phone: 'Phone',
    },
    workExamples: {
      title: 'Work Examples',
      intro:
        'Browse projects horizontally. When you add more work later, this section will stay compact.',
      previous: 'Previous work',
      next: 'Next work',
      openDemo: 'Open demo in a new tab',
      hostNote: 'The demo may not appear inline because of host settings.',
      items: [
        {
          title: 'Garden Products Market',
          description:
            'An online store for garden products with a catalog and product showcase.',
          url: 'https://garden-products-market.vercel.app/',
        },
        {
          title: 'Yona',
          description:
            'A landing page with clean product presentation and a responsive interface.',
          url: 'https://yona-lovat.vercel.app/',
        },
        {
          title: 'Simple Web Page',
          description:
            'Простой лендинг для вашей компании с контактной информацией и описанием услуг.',
          url: 'https://simple-web-page-gamma.vercel.app/',
        },
      ],
    },
  },
}

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const storageKey = 'preferred-language'

function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'ru'
  }

  const savedLanguage = window.localStorage.getItem(storageKey) as Language | null

  if (savedLanguage && languages.includes(savedLanguage)) {
    return savedLanguage
  }

  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  const detectedLanguage = browserLanguages
    .map((language) => language.toLowerCase().split('-')[0])
    .find((language): language is Language =>
      languages.includes(language as Language),
    )

  return detectedLanguage ?? 'ru'
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguageState] = useState<Language>(getBrowserLanguage)

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    window.localStorage.setItem(storageKey, newLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
