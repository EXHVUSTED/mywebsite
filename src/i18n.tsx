/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

export type Language = 'ru' | 'de' | 'en'

type HomeCard = {
  title: string
  text: string
}

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
  theme: {
    toggle: string
    light: string
    dark: string
  }
  home: {
    eyebrow: string
    title: string
    intro: string
    primaryCta: string
    secondaryCta: string
    stats: HomeCard[]
    servicesTitle: string
    servicesIntro: string
    services: HomeCard[]
    processTitle: string
    process: HomeCard[]
    audienceTitle: string
    audience: string[]
    audienceCtaText: string
    audienceCtaButton: string
    ctaTitle: string
    ctaText: string
    ctaButton: string
    visualTitle: string
    visualSubtitle: string
    visualItems: string[]
  }
  order: {
    title: string
    intro: string
    servicesTitle: string
    chooseService: string
    services: {
      title: string
      price: string
      note: string
    }[]
    form: {
      title: string
      intro: string
      selectedService: string
      contactTitle: string
      emailLabel: string
      phoneLabel: string
      fileLabel: string
      fileHint: string
      commentLabel: string
      commentPlaceholder: string
      submit: string
      requiredNote: string
      emailSubject: string
      bodyLabels: {
        service: string
        price: string
        email: string
        phone: string
        file: string
        comment: string
      }
    }
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
    projectList: string
    currentProject: string
    fallbackTitle: string
    items: {
      title: string
      description?: string
      url: string
    }[]
  }
}

export const languages: Language[] = ['ru', 'de', 'en']

export const translations: Record<Language, Translation> = {
  ru: {
    siteTitle: 'Никита Гордеев · сайты для бизнеса',
    nav: {
      home: 'Главная',
      order: 'Услуги',
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
    theme: {
      toggle: 'Сменить тему',
      light: 'Светлая тема',
      dark: 'Темная тема',
    },
    home: {
      eyebrow: 'Сайты для бизнеса и самостоятельных специалистов',
      title: 'Помогаю сделать сайт понятным, аккуратным и удобным для ваших клиентов',
      intro:
        'Создаю новые сайты, обновляю существующие страницы и помогаю развивать их после запуска. Без сложных слов и лишнего шума: сначала разбираемся в вашем предложении, затем собираем страницу, которая выглядит профессионально и ведет клиента к контакту.',
      primaryCta: 'Обсудить проект',
      secondaryCta: 'Посмотреть работы',
      stats: [
        {
          title: 'Понятно',
          text: 'клиент быстро видит, чем вы занимаетесь, чем вы полезны и как с вами связаться',
        },
        {
          title: 'Аккуратно',
          text: 'страница выглядит современно, спокойно и подходит для европейского рынка',
        },
        {
          title: 'На связи',
          text: 'после запуска можно вносить правки, добавлять блоки и постепенно усиливать сайт',
        },
      ],
      servicesTitle: 'Что можно сделать для вашего бизнеса',
      servicesIntro:
        'Мы не начинаем с технических терминов. Сначала смотрим, какой результат нужен: больше доверия, понятная презентация услуги, удобный контакт или обновление текущего сайта.',
      services: [
        {
          title: 'Сайт с нуля',
          text: 'Для услуги, специалиста, локального бизнеса, нового проекта или небольшой компании.',
        },
        {
          title: 'Обновление сайта',
          text: 'Если страница уже есть, но выглядит устаревшей, перегруженной или не объясняет ваше предложение достаточно ясно.',
        },
        {
          title: 'Развитие после запуска',
          text: 'Новые разделы, формы, мобильная версия, тексты, портфолио, контакты и небольшие улучшения по мере роста проекта.',
        },
      ],
      processTitle: 'Как проходит работа',
      process: [
        {
          title: '1. Разговор о задаче',
          text: 'Разбираем ваш бизнес, клиентов, сильные стороны и то, что сайт должен объяснить посетителю.',
        },
        {
          title: '2. Структура и оформление',
          text: 'Собираем понятную страницу: главное сообщение, услуги, доверие, примеры, контакты и следующий шаг.',
        },
        {
          title: '3. Запуск и поддержка',
          text: 'После публикации можно постепенно добавлять новые блоки, улучшать тексты и адаптировать сайт под реальные запросы клиентов.',
        },
      ],
      audienceTitle: 'Узнаете свою ситуацию?',
      audience: [
        'У вас есть дело или услуга, но в интернете пока нет аккуратной страницы, которую не стыдно показать клиенту?',
        'Ваш текущий сайт выглядит устаревшим или не сразу объясняет, почему стоит обратиться именно к вам?',
        'Вы хотите работать с клиентами и партнерами из разных стран и выглядеть надежно с первого контакта?',
        'Вам важно, чтобы после запуска оставался человек, к которому можно обратиться за правками и улучшениями?',
      ],
      audienceCtaText:
        'Если хотя бы на один вопрос вы ответили “да”, скорее всего, мы можем быть полезны друг другу.',
      audienceCtaButton: 'Написать мне',
      ctaTitle: 'Начнем с короткого разговора',
      ctaText:
        'Расскажите, чем вы занимаетесь и что хотите улучшить. Я подскажу, какой формат сайта подойдет, сколько работы потребуется и с чего лучше начать.',
      ctaButton: 'Связаться',
      visualTitle: 'Сайт как уверенное первое впечатление',
      visualSubtitle: 'Понятно, спокойно, по делу',
      visualItems: ['Предложение', 'Доверие', 'Услуги', 'Контакт'],
    },
    order: {
      title: 'Услуги',
      intro:
        'Выберите направление, с которого хотите начать. Финальная стоимость зависит от объема страниц, текстов, дизайна, форм связи и дальнейшей поддержки.',
      servicesTitle: 'Услуги и примерные цены',
      chooseService: 'Выбрать услугу',
      services: [
        {
          title: 'Сайт с нуля',
          price: '200-300 €',
          note: 'Страница или небольшой сайт для услуги, специалиста, локального бизнеса или нового проекта. Цена обсуждается индивидуально.',
        },
        {
          title: 'Полноценный веб-маркет',
          price: 'от 500-700 €',
          note: 'Рабочий интернет-магазин с карточками товаров, полноценной корзиной и способом оплаты.',
        },
        {
          title: 'Обновление сайта',
          price: '100-200 €',
          note: 'Обновление внешнего вида, структуры, текстовых акцентов и удобства существующей страницы.',
        },
      ],
      form: {
        title: 'Оставить оффер',
        intro:
          'Выберите услугу, оставьте контакты и добавьте детали. После отправки откроется подготовленное письмо на мою почту.',
        selectedService: 'Выбранная услуга',
        contactTitle: 'Контактные данные',
        emailLabel: 'Email',
        phoneLabel: 'Номер телефона',
        fileLabel: 'Файл по желанию',
        fileHint:
          'Файл нельзя прикрепить автоматически из браузера без серверной отправки. Если файл выбран, его название попадет в письмо, а сам файл можно приложить в почтовом клиенте.',
        commentLabel: 'Комментарий',
        commentPlaceholder:
          'Расскажите коротко о проекте, текущем сайте, сроках или вопросах.',
        submit: 'Сформировать письмо',
        requiredNote: 'Email и телефон обязательны для связи.',
        emailSubject: 'Новый оффер с сайта',
        bodyLabels: {
          service: 'Услуга',
          price: 'Цена',
          email: 'Email клиента',
          phone: 'Телефон клиента',
          file: 'Файл',
          comment: 'Комментарий',
        },
      },
    },
    contact: {
      title: 'Контакты',
      intro:
        'Напишите коротко, чем занимаетесь и что хотите изменить на сайте. Я отвечу и предложу понятный следующий шаг.',
      phone: 'Телефон',
    },
    workExamples: {
      title: 'Примеры работ',
      intro:
        'Несколько проектов, по которым можно быстро оценить стиль, структуру и подход к интерфейсу.',
      previous: 'Предыдущая работа',
      next: 'Следующая работа',
      openDemo: 'Открыть демо',
      hostNote: 'Если предпросмотр не загрузился, откройте проект в новой вкладке.',
      projectList: 'Список проектов',
      currentProject: 'Текущий проект',
      fallbackTitle: 'Проект',
      items: [
        {
          title: 'Garden Products Market',
          description: 'Каталог товаров с понятной витриной и быстрым просмотром ассортимента.',
          url: 'https://garden-products-market.vercel.app/',
        },
        {
          title: 'Yona',
          description: 'Визуальный сайт с акцентом на атмосферу бренда и аккуратную подачу.',
          url: 'https://yona-lovat.vercel.app/',
        },
        {
          title: 'EK Glanz',
          description: 'Сайт услуги с чистой структурой, контактами и презентацией предложения.',
          url: 'https://ek-glanz.vercel.app/',
        },
      ],
    },
  },
  de: {
    siteTitle: 'Nikita Gordeev · Websites für Unternehmen',
    nav: {
      home: 'Start',
      order: 'Leistungen',
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
    theme: {
      toggle: 'Theme wechseln',
      light: 'Helles Theme',
      dark: 'Dunkles Theme',
    },
    home: {
      eyebrow: 'Websites für Unternehmen und Selbstständige',
      title: 'Ich helfe dabei, Ihre Website klar, professionell und kundenfreundlich zu machen',
      intro:
        'Ich erstelle neue Websites, überarbeite bestehende Seiten und begleite die Weiterentwicklung nach dem Start. Ohne komplizierte Begriffe: Wir klären zuerst Ihr Angebot und bauen dann eine Seite, die professionell wirkt und den Kontakt erleichtert.',
      primaryCta: 'Projekt besprechen',
      secondaryCta: 'Arbeiten ansehen',
      stats: [
        {
          title: 'Klar',
          text: 'Besucher verstehen schnell, was Sie anbieten, warum es relevant ist und wie sie Sie erreichen',
        },
        {
          title: 'Sorgfältig',
          text: 'Die Seite wirkt modern, ruhig und passend für den europäischen Markt',
        },
        {
          title: 'Erreichbar',
          text: 'Nach dem Start sind Anpassungen, neue Bereiche und laufende Verbesserungen möglich',
        },
      ],
      servicesTitle: 'Was wir für Ihr Business umsetzen können',
      servicesIntro:
        'Wir beginnen nicht mit technischen Begriffen. Zuerst geht es um das Ziel: mehr Vertrauen, eine klare Präsentation, einfache Kontaktaufnahme oder eine bessere bestehende Website.',
      services: [
        {
          title: 'Neue Website',
          text: 'Für eine Dienstleistung, Selbstständige, lokale Unternehmen, neue Projekte oder kleine Firmen.',
        },
        {
          title: 'Bestehende Seite verbessern',
          text: 'Wenn Ihre Website veraltet wirkt, überladen ist oder Ihr Angebot nicht klar genug erklärt.',
        },
        {
          title: 'Weiterentwicklung',
          text: 'Neue Bereiche, Formulare, mobile Optimierung, Texte, Referenzen, Kontaktwege und kleine Verbesserungen im laufenden Betrieb.',
        },
      ],
      processTitle: 'So läuft die Zusammenarbeit',
      process: [
        {
          title: '1. Gespräch über Ihr Ziel',
          text: 'Wir klären Ihr Business, Ihre Kunden, Ihre Stärken und was die Website beim Besucher auslösen soll.',
        },
        {
          title: '2. Struktur und Gestaltung',
          text: 'Wir bauen eine verständliche Seite mit Botschaft, Leistungen, Vertrauen, Beispielen, Kontakt und nächstem Schritt.',
        },
        {
          title: '3. Start und Betreuung',
          text: 'Nach der Veröffentlichung können neue Bereiche, bessere Texte und Anpassungen nach echten Kundenfragen ergänzt werden.',
        },
      ],
      audienceTitle: 'Erkennen Sie sich wieder?',
      audience: [
        'Haben Sie ein Angebot, aber noch keine professionelle Website, die Sie gern an Kunden weitergeben?',
        'Wirkt Ihre aktuelle Website veraltet oder erklärt sie nicht sofort, warum man sich an Sie wenden sollte?',
        'Möchten Sie Kunden oder Partner in verschiedenen Ländern erreichen und ab dem ersten Kontakt verlässlich wirken?',
        'Ist es Ihnen wichtig, auch nach dem Start jemanden für Anpassungen und Verbesserungen ansprechen zu können?',
      ],
      audienceCtaText:
        'Wenn Sie mindestens eine Frage mit “ja” beantwortet haben, passen wir wahrscheinlich gut zusammen.',
      audienceCtaButton: 'Nachricht schreiben',
      ctaTitle: 'Beginnen wir mit einem kurzen Gespräch',
      ctaText:
        'Schreiben Sie kurz, worum es geht und was verbessert werden soll. Ich helfe, den passenden Website-Umfang und den ersten sinnvollen Schritt zu finden.',
      ctaButton: 'Kontakt aufnehmen',
      visualTitle: 'Eine Website als sicherer erster Eindruck',
      visualSubtitle: 'Klar, ruhig, auf den Punkt',
      visualItems: ['Angebot', 'Vertrauen', 'Leistungen', 'Kontakt'],
    },
    order: {
      title: 'Leistungen',
      intro:
        'Wählen Sie einen Startpunkt. Der finale Preis hängt von Umfang, Texten, Gestaltung, Kontaktformularen und laufender Betreuung ab.',
      servicesTitle: 'Leistungen und Richtpreise',
      chooseService: 'Leistung wählen',
      services: [
        {
          title: 'Neue Website',
          price: '200-300 €',
          note: 'Eine Seite oder kleine Website für eine Dienstleistung, Selbstständige, lokale Unternehmen oder neue Projekte. Der Preis wird individuell besprochen.',
        },
        {
          title: 'Vollwertiger Web-Shop',
          price: 'ab 500-700 €',
          note: 'Funktionsfähiger Online-Shop mit Produktkarten, vollständigem Warenkorb und Zahlungsmöglichkeit.',
        },
        {
          title: 'Bestehende Seite verbessern',
          price: '100-200 €',
          note: 'Auffrischung von Erscheinungsbild, Struktur, Textfokus und Bedienbarkeit.',
        },
      ],
      form: {
        title: 'Anfrage senden',
        intro:
          'Wählen Sie eine Leistung, hinterlassen Sie Ihre Kontaktdaten und ergänzen Sie Details. Danach öffnet sich eine vorbereitete E-Mail an mich.',
        selectedService: 'Ausgewählte Leistung',
        contactTitle: 'Kontaktdaten',
        emailLabel: 'E-Mail',
        phoneLabel: 'Telefonnummer',
        fileLabel: 'Datei optional',
        fileHint:
          'Eine Datei kann ohne serverseitigen Versand nicht automatisch angehängt werden. Wenn eine Datei ausgewählt wurde, steht ihr Name in der E-Mail; die Datei kann anschließend im Mailprogramm angehängt werden.',
        commentLabel: 'Kommentar',
        commentPlaceholder:
          'Beschreiben Sie kurz das Projekt, die bestehende Website, den Zeitrahmen oder offene Fragen.',
        submit: 'E-Mail vorbereiten',
        requiredNote: 'E-Mail und Telefonnummer sind für die Kontaktaufnahme erforderlich.',
        emailSubject: 'Neue Anfrage über die Website',
        bodyLabels: {
          service: 'Leistung',
          price: 'Preis',
          email: 'E-Mail des Kunden',
          phone: 'Telefon des Kunden',
          file: 'Datei',
          comment: 'Kommentar',
        },
      },
    },
    contact: {
      title: 'Kontakt',
      intro:
        'Schreiben Sie kurz, worum es in Ihrem Business geht und was auf der Website verbessert werden soll.',
      phone: 'Telefon',
    },
    workExamples: {
      title: 'Arbeitsbeispiele',
      intro:
        'Einige Projekte, mit denen Sie Stil, Struktur und Interface-Ansatz einschätzen können.',
      previous: 'Vorheriges Projekt',
      next: 'Nächstes Projekt',
      openDemo: 'Demo öffnen',
      hostNote: 'Wenn die Vorschau nicht lädt, öffnen Sie das Projekt in einem neuen Tab.',
      projectList: 'Projektliste',
      currentProject: 'Aktuelles Projekt',
      fallbackTitle: 'Projekt',
      items: [
        {
          title: 'Garden Products Market',
          description: 'Produktkatalog mit klarer Präsentation und schneller Orientierung.',
          url: 'https://garden-products-market.vercel.app/',
        },
        {
          title: 'Yona',
          description: 'Visuelle Website mit Fokus auf Markenatmosphäre und ruhige Präsentation.',
          url: 'https://yona-lovat.vercel.app/',
        },
        {
          title: 'EK Glanz',
          description: 'Service-Website mit klarer Struktur, Kontaktweg und Leistungsdarstellung.',
          url: 'https://ek-glanz.vercel.app/',
        },
      ],
    },
  },
  en: {
    siteTitle: 'Nikita Gordeev · Websites for businesses',
    nav: {
      home: 'Home',
      order: 'Services',
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
    theme: {
      toggle: 'Change theme',
      light: 'Light theme',
      dark: 'Dark theme',
    },
    home: {
      eyebrow: 'Websites for businesses and self-employed professionals',
      title: 'I help make your website clear, professional, and easy for clients to use',
      intro:
        'I create new websites, improve existing pages, and support further development after launch. No complicated wording: first we clarify your offer, then build a page that feels professional and makes contact easy.',
      primaryCta: 'Discuss a project',
      secondaryCta: 'View work',
      stats: [
        {
          title: 'Clear',
          text: 'visitors quickly understand what you offer, why it matters, and how to reach you',
        },
        {
          title: 'Polished',
          text: 'the page feels modern, calm, and suitable for the European market',
        },
        {
          title: 'Available',
          text: 'after launch, we can add edits, new sections, and steady improvements',
        },
      ],
      servicesTitle: 'What we can build for your business',
      servicesIntro:
        'We do not start with technical labels. First we look at the result you need: more trust, a clearer presentation, easier contact, or a stronger existing website.',
      services: [
        {
          title: 'New website',
          text: 'For a service, self-employed professional, local business, new project, or small company.',
        },
        {
          title: 'Improve an existing site',
          text: 'If your current website feels outdated, overloaded, or does not explain your offer clearly enough.',
        },
        {
          title: 'Ongoing development',
          text: 'New sections, forms, mobile improvements, content, references, contact options, and steady refinements.',
        },
      ],
      processTitle: 'How the work goes',
      process: [
        {
          title: '1. Talk through the goal',
          text: 'We clarify your business, customers, strengths, and what the website should make visitors understand.',
        },
        {
          title: '2. Structure and design',
          text: 'We build a clear page with the main message, services, trust signals, examples, contact, and next step.',
        },
        {
          title: '3. Launch and support',
          text: 'After publishing, we can add new sections, improve text, and adjust the page around real client questions.',
        },
      ],
      audienceTitle: 'Does this sound familiar?',
      audience: [
        'Do you have a business or service, but no professional page you feel comfortable sending to clients?',
        'Does your current website feel outdated or fail to explain quickly why someone should contact you?',
        'Do you want to reach clients or partners across different countries and look reliable from the first contact?',
        'Do you want someone available for edits and improvements after the website is online?',
      ],
      audienceCtaText:
        'If you answered “yes” to at least one question, we are probably a good fit.',
      audienceCtaButton: 'Message me',
      ctaTitle: 'Let’s start with a short conversation',
      ctaText:
        'Send a short note about your business and what you want to improve. I will help define the right website scope and a realistic first step.',
      ctaButton: 'Contact me',
      visualTitle: 'A website as a confident first impression',
      visualSubtitle: 'Clear, calm, and focused',
      visualItems: ['Offer', 'Trust', 'Services', 'Contact'],
    },
    order: {
      title: 'Services',
      intro:
        'Choose a starting point. Final pricing depends on scope, content, design, contact forms, and ongoing support.',
      servicesTitle: 'Services and Guide Prices',
      chooseService: 'Choose service',
      services: [
        {
          title: 'New website',
          price: '€200-300',
          note: 'A page or small website for a service, self-employed professional, local business, or new project. The price is discussed individually.',
        },
        {
          title: 'Full web market',
          price: 'from €500-700',
          note: 'A working online shop with product cards, a fully functional cart, and a payment option.',
        },
        {
          title: 'Improve an existing site',
          price: '€100-200',
          note: 'Refreshing the look, structure, content focus, and usability of an existing page.',
        },
      ],
      form: {
        title: 'Send an offer request',
        intro:
          'Choose a service, leave your contact details, and add project notes. After submitting, a prepared email to me will open.',
        selectedService: 'Selected service',
        contactTitle: 'Contact details',
        emailLabel: 'Email',
        phoneLabel: 'Phone number',
        fileLabel: 'Optional file',
        fileHint:
          'A file cannot be attached automatically from the browser without server-side email sending. If selected, the file name will be included in the email, and the file can be attached in your mail app.',
        commentLabel: 'Comment',
        commentPlaceholder:
          'Briefly describe the project, current website, timeline, or questions.',
        submit: 'Prepare email',
        requiredNote: 'Email and phone number are required so I can contact you.',
        emailSubject: 'New offer request from the website',
        bodyLabels: {
          service: 'Service',
          price: 'Price',
          email: 'Client email',
          phone: 'Client phone',
          file: 'File',
          comment: 'Comment',
        },
      },
    },
    contact: {
      title: 'Contact',
      intro:
        'Send a short note about your business and what you want to improve on the website.',
      phone: 'Phone',
    },
    workExamples: {
      title: 'Work Examples',
      intro:
        'A few projects that show the style, structure, and interface approach.',
      previous: 'Previous work',
      next: 'Next work',
      openDemo: 'Open demo',
      hostNote: 'If the preview does not load, open the project in a new tab.',
      projectList: 'Project list',
      currentProject: 'Current project',
      fallbackTitle: 'Project',
      items: [
        {
          title: 'Garden Products Market',
          description: 'A product catalog with clear presentation and quick browsing.',
          url: 'https://garden-products-market.vercel.app/',
        },
        {
          title: 'Yona',
          description: 'A visual website focused on brand atmosphere and calm presentation.',
          url: 'https://yona-lovat.vercel.app/',
        },
        {
          title: 'EK Glanz',
          description: 'A service website with clean structure, contact flow, and offer presentation.',
          url: 'https://ek-glanz.vercel.app/',
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
