import { ScrollReveal } from "./ScrollReveal";

const contacts = {
  displayTitle: "Внутренние сервисы и автоматизация",
  role: "Разработчик внутренних сервисов и автоматизации",
  telegram: "@vivesupport",
  email: "zhikharev@sfuk.ru",
  github: "https://github.com/ncatofthe",
  githubPages: "https://ncatofthe.github.io/portfolio/",
};

const proofPoints = [
  {
    value: "3 компании",
    label: "используют разработанный мной ServiceDesk",
  },
  {
    value: "Для 37 сотрудников",
    label: "сокращен объем повторяющейся работы с отзывами",
  },
  {
    value: "Полный цикл",
    label: "от анализа процесса и архитектуры до разработки, тестирования и внедрения",
  },
];

const aboutFacts = [
  { label: "Локация", text: "Москва · удалённо и гибридно" },
  { label: "Фокус", text: "Внутренние сервисы и автоматизация процессов" },
  { label: "В разработке", text: "независимо — с 2022 года" },
  { label: "Образование", text: "СПО «Программирование компьютерных систем», диплом 4.75 из 5" },
];

const aboutTimeline = [
  {
    tag: "старт",
    title: "Поддержка и инфраструктура",
    text: "Начинал с поддержки пользователей и рабочих мест: диагностика Windows/Linux, сети, рабочее окружение.",
  },
  {
    tag: "рост",
    title: "Первая автоматизация",
    text: "От PowerShell-скриптов для рутинных задач — к первым сайтам, ботам и интеграциям для реальных заказчиков.",
  },
  {
    tag: "сейчас",
    title: "Сервисы и системы",
    text: "Совмещаю разработку внутренних сервисов с системным администрированием — вижу задачу от инфраструктуры до кода.",
  },
];

const services = [
  {
    title: "Внутренние сервисы",
    text: "Service Desk, CRM, таск-трекеры, административные панели, роли доступа, отчеты и рабочие кабинеты.",
  },
  {
    title: "Автоматизация процессов",
    text: "Скрипты, обработка файлов, регламентные задачи, сбор данных, отчеты и утилиты под конкретный рабочий процесс.",
  },
  {
    title: "Боты и API-интеграции",
    text: "Telegram/API-боты, интеграции с маркетплейсами, внутренние API, обработчики сообщений и фоновые очереди.",
  },
  {
    title: "Frontend и backend",
    text: "React-интерфейсы, REST API, базы данных, авторизация, серверная логика, проверки и подготовка к внедрению.",
  },
];

const coreStack = [
  "Python",
  "TypeScript",
  "React",
  "Node.js",
  "FastAPI",
  "Express/Fastify",
  "PostgreSQL",
  "SQLite",
  "REST API",
  "Prisma",
  "Docker",
  "Playwright",
  "Ollama",
];

const additionalStack = [
  "PHP",
  "MySQL",
  "PowerShell",
  "Windows/Linux",
  "WMI",
  "TCP/IP",
  "DNS/DHCP",
  "VMware",
  "VirtualBox",
  "Windows Server",
  "Bitrix",
  "удаленная поддержка",
  "инвентаризация оборудования",
  "HDD/SSD",
  "SMART",
  "серверное оборудование",
  "восстановление данных",
  "OSINT",
  "Wireshark",
  "Hack The Box",
  "Unity",
  "Unreal Engine",
  "C#",
  "подбор комплектующих ПК",
];

const experience = [
  {
    title: "Системный администратор-программист",
    place: "2024 - настоящее время",
    text: "Поддержка пользователей и рабочих мест, диагностика Windows/Linux, автоматизация внутренних процессов, разработка служебных инструментов и сопровождение внедренных решений.",
  },
  {
    title: "Независимый разработчик",
    place: "2022 - настоящее время",
    text: "Создание сайтов, внутренних сервисов, ботов, интеграций и прикладных утилит под задачи компаний, фрилансеров и небольших команд.",
  },
];

const sysadminSkills = [
  {
    title: "Поддержка рабочих мест",
    text: "Помощь пользователям, первичная диагностика, настройка окружения, разбор типовых проблем Windows/Linux и рабочих приложений.",
  },
  {
    title: "Сети и доступность",
    text: "Понимание TCP/IP, DNS/DHCP, базовой маршрутизации, проверки доступности сервисов и поиска причин сетевых сбоев.",
  },
  {
    title: "PowerShell и автоматизация",
    text: "Скрипты для сбора информации о системе, диагностики, инвентаризации и сокращения повторяющихся админских действий.",
  },
  {
    title: "Windows Server и виртуализация",
    text: "Работа с Windows Server, VMware, VirtualBox и Bitrix-средой: тестовые стенды, окружения, сопровождение и разбор проблем.",
  },
  {
    title: "Инвентаризация и оборудование",
    text: "Учет IT-активов, подбор комплектующих, понимание серверного железа, накопителей, апгрейдов и базового обслуживания.",
  },
  {
    title: "Диагностика и безопасность",
    text: "HDD/SSD, SMART, перенос и первичное восстановление данных, Wireshark, OSINT-подход и аккуратная проверка гипотез.",
  },
];

const adminTags = [
  "Windows Server",
  "Bitrix",
  "VMware",
  "VirtualBox",
  "PowerShell",
  "WMI",
  "TCP/IP",
  "DNS/DHCP",
  "HDD/SSD",
  "SMART",
  "серверное оборудование",
  "восстановление данных",
];

const education = {
  title: "Среднее профессиональное образование",
  text: "СПО по специальности «Программирование компьютерных систем». Средний балл диплома: 4,75 из 5.",
};

const projects = [
  {
    title: "Office ServiceDesk",
    featured: true,
    tag: "внутренний сервис",
    result: "используется 3 компаниями",
    headline: "Внутренняя система управления заявками, которую используют три компании.",
    task:
      "Обращения сотрудников поступали через мессенджеры, почту и внешние helpdesk-сервисы. Заявки было сложно распределять, отслеживать и контролировать.",
    solution:
      "Разработал единый портал с очередями исполнителей, базой знаний, комментариями, вложениями, email-интеграцией, ролями доступа, уведомлениями и административной панелью.",
    role:
      "Анализ рабочих процессов, проектирование архитектуры и базы данных, frontend- и backend-разработка, интеграции, тестирование, развёртывание и сопровождение.",
    outcome:
      "Система помогает централизованно регистрировать, распределять и обрабатывать внутренние обращения вместо разрозненных чатов.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Playwright"],
    link: "https://github.com/ncatofthe/office-servicedesk",
    cover: {
      src: "/screenshots/servicedesk-dashboard-cover.png",
      caption: "Главная панель ServiceDesk",
      width: 1920,
      height: 1080,
    },
    screenshots: [
      {
        src: "/screenshots/servicedesk-dashboard.png",
        caption: "Главная панель с метриками",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/servicedesk-tickets.png",
        caption: "Список заявок и фильтры",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/servicedesk-queue.png",
        caption: "Очередь исполнителей",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/servicedesk-admin.png",
        caption: "Настройки и роли",
        width: 1920,
        height: 1080,
      },
    ],
  },
  {
    title: "MarketplaceBot",
    featured: true,
    tag: "автоматизация маркетплейсов",
    result: "меньше ручной работы для 37 сотрудников",
    headline: "Desktop-приложение и боты для автоматической обработки отзывов Ozon и Wildberries.",
    task:
      "Сотрудникам приходилось вручную просматривать отзывы, выбирать шаблон ответа и повторять однотипные действия в маркетплейсах.",
    solution:
      "Собрал приложение с GUI, шаблонами ответов по рейтингу, расписанием обработки, хранением настроек, логированием и подготовкой Windows-сборки.",
    role:
      "Проектирование сценариев, разработка Python-приложения, интеграции с API маркетплейсов, настройка сборки и проверка рабочих модулей.",
    outcome:
      "Автоматизация маркетплейсов сократила объём ручной работы для 37 сотрудников и ускорила обработку повторяющихся отзывов.",
    stack: ["Python", "Tkinter", "Ozon API", "Wildberries API", "PyInstaller"],
    link: "https://github.com/ncatofthe/MarketplaceBot",
    cover: {
      src: "/screenshots/marketplacebot-product.png",
      caption: "Наглядный экран логики MarketplaceBot",
      width: 1600,
      height: 1000,
    },
    screenshots: [
      {
        src: "/screenshots/marketplacebot-product.png",
        caption: "Настройки API, шаблоны и журнал обработки",
        width: 1600,
        height: 1000,
      },
      {
        src: "/screenshots/marketplacebot-compile.png",
        caption: "Техническая проверка модулей без API-ключей",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    title: "AI Workbench",
    featured: true,
    tag: "AI-инструмент",
    result: "используется в реальных фриланс-задачах",
    headline: "Локальная offline-first платформа для многоагентной разработки.",
    task:
      "Нужно было ускорить проектную разработку: сохранять контекст задачи, формировать план, распределять работу между агентами и проверять результат.",
    solution:
      "Собрал платформу с локальным LLM-контуром, REST API, сохранением запусков, approval-механизмом и интерфейсом для управления задачами.",
    role:
      "Архитектура продукта, backend, frontend, сценарии работы агентов, интеграция Ollama, хранение данных и проверки через pytest/Playwright.",
    outcome:
      "Платформа принимает задачу, формирует план, распределяет этапы между агентными ролями, сохраняет историю выполнения и проверяет созданные приложения через API- и браузерные сценарии.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "Ollama"],
    link: "https://github.com/ncatofthe/ai-workbench",
    screenshots: [
      {
        src: "/screenshots/ai-workbench.jpg",
        caption: "Dashboard локальной платформы",
        width: 1280,
        height: 720,
      },
      {
        src: "/screenshots/ai-workbench-new-task.png",
        caption: "Создание новой задачи",
        width: 1600,
        height: 1173,
      },
      {
        src: "/screenshots/ai-workbench-workflow.png",
        caption: "План, агентные роли, шаги выполнения и проверки",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    title: "MAX Summary Bot",
    featured: false,
    tag: "бот и обработка текста",
    result: "архитектура готова к демонстрации",
    headline: "Бот для создания кратких выжимок из текста, ссылок и файлов.",
    task:
      "Нужен был сервис, который принимает материалы из мессенджера, нормализует входные данные и возвращает структурированную выжимку.",
    solution:
      "Разделил messenger gateway и core-processing: gateway принимает payload, обращается к внутреннему API и возвращает единый формат ответа.",
    role:
      "Проектирование модулей, TypeScript-реализация gateway, API-слой, очереди, типизация и технические проверки.",
    outcome:
      "Получилась понятная основа для бота, которую можно расширять под файлы, ссылки, фоновые задачи и разные каналы доставки.",
    stack: ["TypeScript", "Fastify", "pnpm workspaces", "BullMQ", "Python extractor"],
    link: "https://github.com/ncatofthe/max_summary_bot",
    cover: {
      src: "/screenshots/max-summary-architecture.png",
      caption: "Архитектура gateway и processing pipeline",
      width: 1600,
      height: 1000,
    },
    screenshots: [
      {
        src: "/screenshots/max-summary-architecture.png",
        caption: "Поток обработки текста, ссылок и файлов",
        width: 1600,
        height: 1000,
      },
      {
        src: "/screenshots/max-summary-typecheck.png",
        caption: "Техническая проверка gateway и интеграций",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    title: "SystemInfo",
    featured: false,
    tag: "администрирование",
    result: "быстрый сбор данных о ПК",
    headline: "PowerShell-утилита для диагностики и инвентаризации Windows-рабочих станций.",
    task:
      "Для поддержки пользователей нужно быстро получать сведения о системе без установки дополнительных программ и без прав администратора.",
    solution:
      "Собрал PowerShell-скрипт, который получает ключевые параметры Windows 10/11 и помогает быстрее оценить состояние рабочей станции.",
    role: "Разработка скрипта, подбор WMI-запросов, оформление README и сценариев применения для IT-поддержки.",
    outcome:
      "Инструмент сокращает первичный сбор информации при диагностике и помогает стандартизировать инвентаризацию.",
    stack: ["PowerShell", "WMI", "Windows"],
    link: "https://github.com/ncatofthe/SystemInfo",
    cover: {
      src: "/screenshots/systeminfo-cover.png",
      caption: "Пример отчета SystemInfo",
      width: 1600,
      height: 1000,
    },
    screenshots: [
      {
        src: "/screenshots/systeminfo-proof.png",
        caption: "Пример технического отчета",
        width: 1600,
        height: 1963,
      },
    ],
  },
  {
    title: "Inventory App",
    featured: false,
    tag: "учет оборудования",
    result: "прикладная IT-утилита",
    headline: "Приложение для учета IT-оборудования и быстрых инвентаризационных задач.",
    task:
      "Нужен был понятный инструмент для фиксации оборудования, поиска записей и поддержки порядка в IT-активах.",
    solution:
      "Собрал приложение для локального учета техники с понятной структурой данных и рабочим сценарием для IT-поддержки.",
    role: "Разработка приложения, структура данных, проверка entrypoint и оформление репозитория.",
    outcome:
      "Проект показывает умение закрывать прикладные задачи без лишнего усложнения архитектуры.",
    stack: ["Python", "SQLite", "Tkinter", "IT support"],
    link: "https://github.com/ncatofthe/inventory_app",
    cover: {
      src: "/screenshots/inventory-dashboard.png",
      caption: "Наглядный экран учета оборудования",
      width: 1600,
      height: 1000,
    },
    screenshots: [
      {
        src: "/screenshots/inventory-dashboard.png",
        caption: "Дашборд, фильтры и таблица инвентаризации",
        width: 1600,
        height: 1000,
      },
      {
        src: "/screenshots/inventory-compile.png",
        caption: "Техническая проверка entrypoint приложения",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    title: "MarkiPoisk",
    featured: true,
    tag: "автоматизация маркировки",
    result: "обработка PDF и DataMatrix",
    headline: "Утилита для обработки маркировки табачной продукции в процессах, связанных с «Честным знаком».",
    task:
      "Нужно было быстро извлекать данные из PDF с маркировкой, находить нужные коды и готовить результаты для дальнейшей работы сотрудников.",
    solution:
      "Разработал CLI- и GUI-инструмент: распознавание DataMatrix/QR, разбор GS1-полей, поиск по индексу и экспорт в CSV/JSON/Excel.",
    role:
      "Проектирование сценария обработки, Python-разработка, работа с PDF и кодами, интерфейс на Tkinter, тесты и подготовка Windows-сборки.",
    outcome:
      "Рутинный разбор маркировки превращен в повторяемый локальный процесс с поиском и выгрузкой структурированных данных.",
    stack: ["Python", "Tkinter", "PyMuPDF", "ZXing", "GS1", "openpyxl"],
    link: "https://github.com/ncatofthe/marki-poisk",
    cover: {
      src: "/screenshots/marki-poisk-dashboard.png",
      caption: "MarkiPoisk: поиск по маркировке",
      width: 1600,
      height: 1000,
    },
    screenshots: [
      {
        src: "/screenshots/marki-poisk-dashboard.png",
        caption: "Поиск, таблица результатов и экспорт",
        width: 1600,
        height: 1000,
      },
    ],
  },
  {
    title: "PC Inventory v9",
    featured: false,
    tag: "инвентаризация рабочих станций",
    result: "анализ отчетов и проблем",
    headline: "Локальное приложение для сбора, анализа и экспорта сведений о Windows-компьютерах.",
    task:
      "Нужно было свести разрозненные TXT-отчеты по рабочим станциям в понятную картину по ОС, процессорам, памяти, дискам и установленному ПО.",
    solution:
      "Собрал Tkinter-приложение с загрузкой папок, фильтрами, статистикой, проверкой свободного места и ресурсов, журналом и экспортом CSV/Excel.",
    role:
      "Архитектура локальной утилиты, парсинг отчетов, диагностика порогов, интерфейс, визуализация и подготовка сценария запуска.",
    outcome:
      "Инструмент помогает быстрее проводить инвентаризацию и находить рабочие станции, которым нужна проверка или обновление.",
    stack: ["Python", "Tkinter", "pandas", "matplotlib", "CSV", "Excel"],
    link: "https://github.com/ncatofthe/pc-inventory-v9",
    cover: {
      src: "/screenshots/pc-inventory-dashboard.png",
      caption: "PC Inventory v9: статистика и фильтры",
      width: 1600,
      height: 1000,
    },
    screenshots: [
      {
        src: "/screenshots/pc-inventory-dashboard.png",
        caption: "Статистика по станциям, ресурсам и дискам",
        width: 1600,
        height: 1000,
      },
    ],
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

const websiteProjects = [
  {
    title: "Veld Co template",
    tag: "коммерческий шаблон",
    result: "каталог и публичные страницы",
    headline:
      "Коммерческий сайт-шаблон для каталога детских товаров с главной страницей, категориями, карточками и базовой серверной частью.",
    task:
      "Нужно было подготовить основу публичного сайта с каталогом, преимуществами, витриной товаров и возможностью дальнейшей настройки под бизнес.",
    solution:
      "Собрал адаптивные HTML/CSS-страницы, добавил структуру каталога, интерактивные элементы, Node.js server и SQL-схему для данных.",
    role:
      "Верстка, структура страниц, базовый backend, подготовка репозитория, безопасные примеры настроек и документация запуска.",
    outcome:
      "Кейс показывает умение быстро собрать коммерческий сайт под реальную нишу и оставить основу для развития проекта.",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
    link: "https://github.com/ncatofthe/veldco-template",
    cover: {
      src: "/screenshots/veldco-cover.png",
      caption: "Главная страница Veld Co",
      width: 1920,
      height: 1080,
    },
    screenshots: [
      {
        src: "/screenshots/veldco-cover.png",
        caption: "Главная страница Veld Co",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/veldco-full.png",
        caption: "Полный скрин страницы",
        width: 1920,
        height: 4724,
      },
    ],
  },
  {
    title: "ESSE — 30 лет качества и инноваций",
    tag: "презентационный сайт",
    result: "брендовая страница",
    headline: "Промо-сайт бренда с крупной типографикой, продуктовой линейкой и плавной frontend-анимацией.",
    task: "Нужно было собрать выразительную страницу, которая сразу показывает продукт и ощущается как брендовая презентация, а не обычный шаблон.",
    solution: "Сверстал адаптивный лендинг, добавил продуктовые блоки, анимации появления, визуальные акценты и подготовил сборку на Vite.",
    role: "Frontend-разработка, адаптив, работа с визуальными материалами, анимации, финальная сборка и проверка отображения.",
    outcome: "Получилась аккуратная брендовая страница, которую можно показывать как пример коммерческого frontend и визуальной подачи продукта.",
    stack: ["Vite", "JavaScript", "CSS", "Responsive", "Animation"],
    link: "https://github.com/ncatofthe/esse-cold-black",
    live: "https://ncatofthe.github.io/esse-cold-black/",
    cover: {
      src: "/screenshots/esse-original-cover.png",
      caption: "Главная страница ESSE",
      width: 1920,
      height: 1080,
    },
    screenshots: [
      {
        src: "/screenshots/esse-original-cover.png",
        caption: "Главная страница ESSE",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/esse-original-full.jpg",
        caption: "Полный скрин страницы",
        width: 1920,
        height: 6480,
      },
    ],
  },
  {
    title: "ESSE Sense Himalaya",
    tag: "scroll-презентация",
    result: "кинематографичный сценарий",
    headline: "Иммерсивная scroll-страница с атмосферой, продуктовой линейкой и последовательными акцентами на деталях.",
    task: "Нужно было показать продукт через последовательный визуальный сценарий с ощущением глубины и движения.",
    solution: "Собрал отдельную страницу с pinned-секциями, staged-анимациями, продуктовой линейкой и аккуратным fallback для мобильных экранов.",
    role: "Frontend, GSAP-сценарии, responsive states, оптимизация ассетов, проверка scroll-поведения и кадров.",
    outcome: "Страница показывает умение делать сложные промо-сценарии, где frontend работает как интерактивная презентация.",
    stack: ["Vite", "GSAP", "JavaScript", "CSS", "Responsive"],
    link: "https://github.com/ncatofthe/esse-cold-black",
    live: "https://ncatofthe.github.io/esse-cold-black/himalaya.html",
    cover: {
      src: "/screenshots/esse-himalaya-cover.png",
      caption: "Himalaya scroll-сцена",
      width: 1920,
      height: 1080,
    },
    screenshots: [
      {
        src: "/screenshots/esse-himalaya-cover.png",
        caption: "Himalaya scroll-сцена",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/esse-himalaya-full.jpg",
        caption: "Полный скрин страницы",
        width: 1920,
        height: 6480,
      },
    ],
  },
  {
    title: "Cold Black Element",
    tag: "кинетический лендинг",
    result: "продуктовая страница",
    headline: "Кинетическая версия продуктовой страницы с акцентом на форму, контраст и технологичный разбор продукта.",
    task: "Нужно было сделать более резкую и технологичную вариацию страницы, где продукт находится в центре первого экрана.",
    solution: "Собрал отдельный visual route с темной сценой, масками, продуктовой композицией, интерактивной линейкой и scroll-анимациями.",
    role: "Верстка, CSS-маски, работа с изображениями, анимационная логика, адаптив и финальное визуальное QA.",
    outcome: "Кейс усиливает портфолио по сайтам: показывает не только интерфейсы, но и умение делать дорогую визуальную подачу.",
    stack: ["Vite", "GSAP", "CSS masks", "JavaScript", "Visual QA"],
    link: "https://github.com/ncatofthe/esse-cold-black",
    live: "https://ncatofthe.github.io/esse-cold-black/element.html",
    cover: {
      src: "/screenshots/esse-kinetic-cover.png",
      caption: "Кинетическая версия",
      width: 1920,
      height: 1080,
    },
    screenshots: [
      {
        src: "/screenshots/esse-kinetic-cover.png",
        caption: "Кинетическая версия",
        width: 1920,
        height: 1080,
      },
      {
        src: "/screenshots/esse-kinetic-full.jpg",
        caption: "Полный скрин страницы",
        width: 1920,
        height: 6480,
      },
    ],
  },
  {
    title: "Lukoil Redesign Concept",
    tag: "дизайн-концепт",
    result: "неофициальный концепт сайта",
    headline: "Иммерсивный концепт корпоративного сайта с выразительной типографикой, контрастной сценой и scroll-анимациями.",
    task: "Нужно было показать, как можно переосмыслить подачу крупной компании через современный визуальный сценарий и понятную навигацию.",
    solution: "Собрал чистый HTML/CSS/JS-концепт с preloader, прогрессом прокрутки, адаптивной навигацией, canvas-эффектом и последовательными секциями.",
    role: "Визуальная концепция, frontend-разработка, motion-логика, адаптив и подготовка самостоятельного репозитория без сборочных зависимостей.",
    outcome: "Кейс показывает умение создавать не только прикладные интерфейсы, но и дорогую презентационную подачу для бренда.",
    stack: ["HTML", "CSS", "JavaScript", "Canvas", "Responsive", "Motion"],
    link: "https://github.com/ncatofthe/lukoil-redesign-concept",
    cover: {
      src: "/screenshots/lukoil-concept-cover.png",
      caption: "Lukoil redesign concept",
      width: 2560,
      height: 1440,
    },
    screenshots: [
      {
        src: "/screenshots/lukoil-concept-cover.png",
        caption: "Первый экран неофициального концепта",
        width: 2560,
        height: 1440,
      },
    ],
  },
];

type PortfolioProject = (typeof projects)[number] | (typeof websiteProjects)[number];

function projectDomain(project: PortfolioProject) {
  const slug = project.link.replace("https://github.com/ncatofthe/", "");
  return "live" in project && project.live ? project.live.replace(/^https?:\/\//, "") : `github.com/ncatofthe/${slug}`;
}

function ProjectCase({ project, index }: { project: PortfolioProject; index: number }) {
  const mainShot = project.cover ?? project.screenshots[0];

  return (
    <article className={`project ${index % 3 === 0 ? "project-wide" : ""}`} data-reveal>
      <a
        className="browser-frame"
        href={mainShot.src}
        data-lightbox-src={mainShot.src}
        data-lightbox-title={`${project.title} - ${mainShot.caption}`}
        data-tilt
        aria-label={`Открыть полный скриншот проекта ${project.title}`}
      >
        <div className="browser-frame-bar" aria-hidden="true">
          <i /><i /><i />
          <em>{projectDomain(project)}</em>
        </div>
        <div className="project-visual">
          <img
            src={mainShot.src}
            alt={`Скриншот проекта ${project.title}: ${mainShot.caption}`}
            width={mainShot.width}
            height={mainShot.height}
            loading={index < 2 ? "eager" : "lazy"}
          />
          <span className="visual-code mono">PROJECT / {String(index + 1).padStart(2, "0")}</span>
          <span className="project-shot-open">Открыть</span>
        </div>
      </a>
      <div className="project-meta-line mono">
        <span>{project.tag}</span>
        <span>{project.result}</span>
      </div>
      <div className="project-title-row">
        <h3>{project.title}</h3>
        <span aria-hidden="true">↗</span>
      </div>
      <p className="project-headline">{project.headline}</p>
      <div className="project-links mono">
        <a href={project.link} target="_blank" rel="noreferrer">КОД ↗</a>
        {"live" in project && project.live ? <a href={project.live} target="_blank" rel="noreferrer">САЙТ ↗</a> : null}
      </div>
      <details className="project-details">
        <summary className="mono">ПОДРОБНЕЕ +</summary>
        <div className="project-detail-grid">
          <div><span>Задача</span><p>{project.task}</p></div>
          <div><span>Решение</span><p>{project.solution}</p></div>
          <div><span>Моя роль</span><p>{project.role}</p></div>
          <div><span>Результат</span><p>{project.outcome}</p></div>
        </div>
        <div className="stack-list mono">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="shot-strip">
          {project.screenshots.map((shot) => (
            <a href={shot.src} key={shot.src} data-lightbox-src={shot.src} data-lightbox-title={`${project.title} - ${shot.caption}`}>
              <img src={shot.src} alt={shot.caption} width={shot.width} height={shot.height} loading="lazy" />
              <span>{shot.caption}</span>
            </a>
          ))}
        </div>
      </details>
    </article>
  );
}

export default function Home() {
  const selectedProjects: PortfolioProject[] = [...featuredProjects, ...websiteProjects, ...otherProjects];
  const totalCases = selectedProjects.length;

  return (
    <main className="site-shell">
      <ScrollReveal />
      <header className="topbar" id="top">
        <a className="brand" href="#top" aria-label="На главную">
          <strong>NCAT</strong><span className="mono">DEV / AUTOMATION</span>
        </a>
        <button className="menu-toggle mono" type="button" aria-expanded="false" aria-controls="main-nav">МЕНЮ</button>
        <nav className="main-nav mono" id="main-nav" aria-label="Главная навигация">
          <a href="#about">Обо мне</a><a href="#projects">Проекты</a><a href="#services">Услуги</a><a href="#experience">Опыт</a><a href="#stack">Стек</a><a href="#contacts">Контакты</a>
        </nav>
        <div className="topbar-actions">
          <div className="language-switch mono" role="group" aria-label="Language">
            <button type="button" data-lang-option="ru" aria-pressed="true">RU</button>
            <button type="button" data-lang-option="en" aria-pressed="false">EN</button>
          </div>
          <button className="topbar-cta mono" type="button" data-order-trigger>ОБСУДИТЬ ПРОЕКТ ↗</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-bg-grid" aria-hidden="true" />
        <img
          className="hero-bg-photo"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1400&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          loading="eager"
        />
        <div className="hero-kicker mono">NCAT / DEVELOPMENT &amp; AUTOMATION / 2026</div>
        <div className="hero-status mono"><i /> ОТКРЫТ К ПРОЕКТНОЙ РАБОТЕ</div>
        <h1 className="hero-title">
          <span>АВТОМАТИЗИРУЮ</span>
          <span className="accent-word">ВАШИ ПРОЦЕССЫ.</span>
        </h1>
        <p className="hero-copy">Внутренние сервисы, сайты, боты и автоматизация под реальные рабочие процессы.</p>
        <div className="hero-actions-row">
          <button className="btn btn-solid" type="button" data-order-trigger>ЗАКАЗАТЬ РЕШЕНИЕ ↗</button>
          <a className="btn btn-outline" href="#projects">СМОТРЕТЬ ПРОЕКТЫ</a>
          <a className="btn btn-outline" href="https://t.me/vivesupport">TELEGRAM ↗</a>
        </div>
        <div className="hero-metrics">
          <div><strong>3</strong><span className="mono">КОМПАНИИ ИСПОЛЬЗУЮТ SERVICE DESK</span></div>
          <div><strong>{totalCases}</strong><span className="mono">ГОТОВЫХ ПРОЕКТОВ В ПОРТФОЛИО</span></div>
          <div><strong>01</strong><span className="mono">ИСПОЛНИТЕЛЬ ПОЛНЫЙ ЦИКЛ</span></div>
        </div>
        <div className="hero-terminal" aria-hidden="true">
          <div className="hero-terminal-bar">
            <i /><i /><i /><span className="mono">bash — ncat.dev</span>
          </div>
          <pre>
            <span className="t-muted">$</span> whoami{"\n"}
            <span className="t-muted">&gt; developer · sysadmin · automation</span>{"\n\n"}
            <span className="t-muted">$</span> ls ./projects{"\n"}
            office-servicedesk/  marketplacebot/  ai-workbench/{"\n\n"}
            <span className="t-muted">$</span> ./deploy.sh --project office-servicedesk{"\n"}
            <span className="t-blue">building</span>… <span className="t-accent">done</span> in 1.4s{"\n"}
            <span className="t-accent">✓</span> queues, roles, email sync — <span className="t-muted">live</span>{"\n\n"}
            <span className="t-muted">$</span> echo $FOCUS{"\n"}
            &quot;результат вместо лишнего&quot;<span className="t-cursor" />
          </pre>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>
        <span>ВНУТРЕННИЕ СЕРВИСЫ ✦ САЙТЫ ✦ АВТОМАТИЗАЦИЯ ✦ API ✦ БОТЫ ✦</span>
        <span>ВНУТРЕННИЕ СЕРВИСЫ ✦ САЙТЫ ✦ АВТОМАТИЗАЦИЯ ✦ API ✦ БОТЫ ✦</span>
      </div></div>

      <section className="about" id="about">
        <div className="section-label mono">01 / ОБО МНЕ</div>
        <div className="about-heading" data-reveal><h2>НЕ ТОЛЬКО КОД.<br /><em>ЕЩЁ И ИНФРАСТРУКТУРА.</em></h2></div>
        <div className="about-body" data-reveal>
          <p className="about-lead">
            Совмещаю системное администрирование и разработку. С 2022 года веду проекты как независимый разработчик,
            параллельно работаю системным администратором-программистом: поддерживаю рабочие места, автоматизирую
            внутренние процессы и довожу собственные сервисы до внедрения. Такой опыт на стыке ролей помогает видеть
            задачу целиком — от инфраструктуры и рабочих мест до кода, который эту инфраструктуру разгружает.
          </p>
          <div className="about-facts">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <p>{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-visual" data-reveal>
          <div className="about-badge">
            <strong>2022</strong>
            <span>Независимый разработчик</span>
          </div>
          <figure className="about-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
              alt="Экран с кодом и терминалом — рабочий процесс разработки и автоматизации"
              loading="lazy"
            />
            <figcaption className="about-photo-caption">
              <strong>Фокус на результате</strong>
              Код, автоматизация и инфраструктура — в одной связке, без лишних абстракций.
            </figcaption>
          </figure>
        </div>
        <div className="about-timeline">
          {aboutTimeline.map((stage) => (
            <article key={stage.title} data-reveal>
              <span className="mono">{stage.tag}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="intro" id="services">
        <div className="section-label mono">02 / ЧТО ДЕЛАЮ</div>
        <div className="intro-heading"><h2>ОДИН ПОДХОД.<br /><em>РЕШЕНИЕ</em> ПОД ЗАДАЧУ.</h2></div>
        <div className="scope-list">
          {services.map((service, index) => (
            <article className="scope-row" key={service.title} data-reveal>
              <span className="mono">{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.text}</p><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="projects">
        <div className="section-label mono">03 / ВЫБРАННЫЕ ПРОЕКТЫ</div>
        <div className="work-heading"><h2>РАБОТЫ,<br />КОТОРЫЕ <em>РАБОТАЮТ.</em></h2><p>Полные кейсы: задача, решение, роль, результат и живые скриншоты.</p></div>
        <div className="project-grid">{selectedProjects.map((project, index) => <ProjectCase project={project} index={index} key={project.title} />)}</div>
      </section>

      <section className="fit-section">
        <div className="section-label mono">04 / РЕЗУЛЬТАТЫ</div>
        <h2>ПОЛЬЗА,<br /><em>КОТОРУЮ ВИДНО.</em></h2>
        <div className="fit-grid">
          {proofPoints.map((point, index) => <article key={point.value}><span className="mono">0{index + 1}</span><strong>{point.value}</strong><p>{point.label}</p></article>)}
          <aside><span className="mono">ПОДХОД</span><p>Не обещаю магию. Уточняю задачу, показываю работающий результат и честно обозначаю ограничения.</p></aside>
        </div>
      </section>

      <section className="process">
        <div className="section-label mono">05 / ПРОЦЕСС</div>
        <h2>ОТ ЗАДАЧИ<br />ДО <em>ЗАПУСКА.</em></h2>
        <div className="process-grid">
          <article><span className="mono">01</span><h3>РАЗБОР</h3><p>Фиксирую цель, пользователей, ограничения и ожидаемый результат.</p></article>
          <article><span className="mono">02</span><h3>ПРОТОТИП</h3><p>Проектирую сценарии, интерфейс и техническую архитектуру.</p></article>
          <article><span className="mono">03</span><h3>РАЗРАБОТКА</h3><p>Собираю продукт, интеграции и проверяю критические сценарии.</p></article>
          <article><span className="mono">04</span><h3>ВНЕДРЕНИЕ</h3><p>Разворачиваю, документирую и сопровождаю после запуска.</p></article>
        </div>
      </section>

      <section className="offer-section" id="order">
        <div className="offer-dark"><span className="mono">06 / ЗАКАЗАТЬ</span><h2>НУЖЕН САЙТ<br />ИЛИ <em>АВТОМАТИЗАЦИЯ?</em></h2><p>Покажу подходящие примеры, уточню объем и предложу понятный следующий шаг.</p></div>
        <div className="offer-paper"><span className="mono">СТАРТ ПРОЕКТА</span><strong>ОБСУДИМ<br />ЗАДАЧУ</strong><p>Сайты, боты, интеграции, скрипты, внутренние сервисы и небольшие приложения.</p><button type="button" data-order-trigger className="offer-button mono">ВЫБРАТЬ РЕШЕНИЕ ↗</button><a href="https://t.me/vivesupport" className="mono">TELEGRAM / @VIVESUPPORT ↗</a></div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-label mono">07 / ОПЫТ</div>
        <h2>РАЗРАБОТКА<br />И <em>ИНФРАСТРУКТУРА.</em></h2>
        <div className="experience-list">
          {experience.map((item, index) => <article className="experience-row" key={item.title}><span className="mono">0{index + 1}</span><div><small>{item.place}</small><h3>{item.title}</h3></div><p>{item.text}</p></article>)}
          <article className="experience-row"><span className="mono">03</span><div><small>ОБРАЗОВАНИЕ</small><h3>{education.title}</h3></div><p>{education.text}</p></article>
        </div>
        <p className="admin-kicker mono">СИСТЕМНОЕ АДМИНИСТРИРОВАНИЕ / ПОДРОБНО</p>
        <div className="admin-list">
          {sysadminSkills.map((skill) => <details key={skill.title}><summary><span>{skill.title}</span><b>+</b></summary><p>{skill.text}</p></details>)}
        </div>
      </section>

      <section className="stack-section" id="stack">
        <div className="section-label mono">08 / СТЕК</div>
        <h2>ИНСТРУМЕНТЫ<br /><em>ДЛЯ РЕЗУЛЬТАТА.</em></h2>
        <div className="stack-lines">
          <div><span className="mono">ОСНОВНОЙ</span><p>{coreStack.join(" / ")}</p></div>
          <div><span className="mono">ДОПОЛНИТЕЛЬНО</span><p>{additionalStack.join(" / ")}</p></div>
          <div><span className="mono">АДМИНИСТРИРОВАНИЕ</span><p>{adminTags.join(" / ")}</p></div>
        </div>
      </section>

      <section className="contact" id="contacts">
        <div className="section-label mono">09 / КОНТАКТ</div>
        <p className="mono">ЕСТЬ ЗАДАЧА?</p><h2>ДАВАЙТЕ<br /><em>ОБСУДИМ.</em></h2>
        <div className="contact-links">
          <a href="https://t.me/vivesupport"><span>TELEGRAM</span><strong>@VIVESUPPORT</strong><b>↗</b></a>
          <a href={`mailto:${contacts.email}`}><span>EMAIL</span><strong>{contacts.email}</strong><b>↗</b></a>
          <a href={contacts.github} target="_blank" rel="noreferrer"><span>GITHUB</span><strong>NCATOFTHE</strong><b>↗</b></a>
          <a href="/resume-developer.pdf" download><span>РЕЗЮМЕ</span><strong>СКАЧАТЬ PDF</strong><b>↓</b></a>
        </div>
      </section>

      <footer className="site-footer"><strong>NCAT</strong><div className="mono"><span>DEVELOPMENT / AUTOMATION / 2026</span><a href="#top">НАВЕРХ ↑</a></div></footer>
    </main>
  );
}
