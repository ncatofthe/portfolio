const contacts = {
  name: "Жихарев Глеб",
  role: "Разработчик внутренних сервисов, сайтов, скриптов и ботов",
  telegram: "@karameliew",
  email: "zhikharev@sfuk.ru",
  phone: "+7 995 004-84-77",
  github: "https://github.com/ncatofthe",
  githubPages: "https://ncatofthe.github.io/portfolio/",
};

const highlights = [
  "ServiceDesk используют 3 компании",
  "боты сократили ручную работу 3 сотрудникам",
  "AI Workbench используют друзья-фрилансеры",
  "проекты довожу от идеи до внедрения",
];

const services = [
  {
    title: "Сайты и интерфейсы",
    text: "Лендинги, многостраничные сайты, личные кабинеты, админки и адаптивная верстка по макету или с нуля.",
  },
  {
    title: "Боты и интеграции",
    text: "Telegram-боты, обработчики сообщений, интеграции с API, автоматизация маркетплейсов и внутренних процессов.",
  },
  {
    title: "Скрипты и утилиты",
    text: "Python/PowerShell-скрипты, небольшие desktop-приложения, парсинг, обработка файлов, макросы и вспомогательные инструменты.",
  },
  {
    title: "Внутренние сервисы",
    text: "Service Desk, CRM, таск-трекеры, роли доступа, REST API, базы данных, отчеты, вложения и рабочие панели.",
  },
];

const projects = [
  {
    title: "Office ServiceDesk",
    tag: "внутренний сервис",
    result: "используется 3 компаниями",
    description:
      "Портал для заявок сотрудников, очередей исполнителей, базы знаний, вложений, комментариев, email intake/reply, ролей доступа и администрирования. Проект вырос из task manager в ServiceDesk для офиса 50-60 человек и заменяет хаотичный поток обращений в мессенджерах и Freshdesk.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Playwright"],
    link: "https://github.com/ncatofthe/office-servicedesk",
    visual: "queue",
    screenshots: [
      {
        src: "/screenshots/servicedesk-dashboard.png",
        caption: "Главная панель с метриками",
      },
      {
        src: "/screenshots/servicedesk-tickets.png",
        caption: "Список заявок и фильтры",
      },
      {
        src: "/screenshots/servicedesk-queue.png",
        caption: "Очередь исполнителей",
      },
      {
        src: "/screenshots/servicedesk-admin.png",
        caption: "Настройки и роли",
      },
    ],
  },
  {
    title: "AI Workbench",
    tag: "AI-инструмент",
    result: "используют друзья-фрилансеры",
    description:
      "Локальная offline-first платформа для многоагентной разработки: пользователь описывает задачу, система формирует план, распределяет работу между агентами, сохраняет состояние запусков и помогает проверять результат. AI-направление развиваю практично: как инструмент для ускорения разработки, а не как абстрактную R&D-игрушку.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "SQLite", "Ollama"],
    link: "https://github.com/ncatofthe/ai-workbench",
    visual: "agents",
    screenshots: [
      {
        src: "/screenshots/ai-workbench.jpg",
        caption: "Dashboard локальной платформы",
      },
      {
        src: "/screenshots/ai-workbench-new-task.png",
        caption: "Создание новой задачи",
      },
    ],
  },
  {
    title: "MarketplaceBot",
    tag: "автоматизация маркетплейсов",
    result: "сократил ручную работу 3 сотрудникам",
    description:
      "Desktop-приложение и боты для автоматических ответов на отзывы Ozon и Wildberries. Есть GUI, шаблоны ответов по рейтингу, расписание обработки, хранение настроек, логирование и подготовка Windows-сборки.",
    stack: ["Python", "Tkinter", "Ozon API", "Wildberries API", "PyInstaller"],
    link: "https://github.com/ncatofthe/MarketplaceBot",
    visual: "market",
    screenshots: [
      {
        src: "/screenshots/marketplacebot-compile.png",
        caption: "Проверка модулей без API-ключей",
      },
    ],
  },
  {
    title: "MAX Summary Bot",
    tag: "бот и обработка текста",
    result: "demo-ready архитектура",
    description:
      "Бот для создания кратких выжимок из текста, ссылок и файлов. Репозиторий разделяет слой мессенджера и core-processing: gateway принимает payload, нормализует данные, обращается к внутреннему API и возвращает структурированный ответ.",
    stack: ["TypeScript", "Fastify", "pnpm workspaces", "BullMQ", "Python extractor"],
    link: "https://github.com/ncatofthe/max_summary_bot",
    visual: "summary",
    screenshots: [
      {
        src: "/screenshots/max-summary-typecheck.png",
        caption: "Typecheck gateway и интеграции",
      },
    ],
  },
  {
    title: "SystemInfo",
    tag: "администрирование",
    result: "быстрый сбор данных о ПК",
    description:
      "PowerShell-скрипт для сбора ключевой информации о Windows 10/11 без прав администратора. Полезен для диагностики, поддержки пользователей и инвентаризации рабочих станций.",
    stack: ["PowerShell", "WMI", "Windows"],
    link: "https://github.com/ncatofthe/SystemInfo",
    visual: "system",
    screenshots: [
      {
        src: "/screenshots/systeminfo-proof.png",
        caption: "Preview Windows PowerShell-скрипта",
      },
    ],
  },
  {
    title: "Inventory App",
    tag: "учет оборудования",
    result: "прикладная IT-утилита",
    description:
      "Приложение для инвентаризации IT-оборудования. Проект показывает прикладной подход: не усложнять архитектуру там, где бизнес-задачу можно закрыть простым рабочим инструментом.",
    stack: ["Python", "учет", "IT support"],
    link: "https://github.com/ncatofthe/inventory_app",
    visual: "inventory",
    screenshots: [
      {
        src: "/screenshots/inventory-compile.png",
        caption: "Проверка entrypoint приложения",
      },
    ],
  },
];

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "HTML/CSS",
  "PHP 8",
  "REST API",
  "JWT/RBAC",
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "Prisma",
  "Express",
  "Fastify",
  "Telegram/API bots",
  "Ozon/WB API",
  "PowerShell",
  "Linux/Windows",
  "Git",
  "Ollama/local LLM",
  "Playwright",
  "Figma",
];

function ProjectVisual({ type }: { type: string }) {
  const rows = type === "agents" ? ["Planner", "Frontend", "Backend", "QA"] : ["Новая", "В работе", "Готово", "Отчет"];
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-top">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid">
        <div className="visual-sidebar">
          {rows.map((row) => (
            <span key={row}>{row}</span>
          ))}
        </div>
        <div className="visual-main">
          <div className="visual-line wide" />
          <div className="visual-line" />
          <div className="visual-cards">
            <span />
            <span />
            <span />
          </div>
          <div className="visual-table">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="topbar" aria-label="Главная навигация">
          <a href="#projects">Проекты</a>
          <a href="#services">Услуги</a>
          <a href="#stack">Стек</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Портфолио для найма и фриланса</p>
            <h1>{contacts.name}</h1>
            <p className="lead">
              {contacts.role}. Беру прикладные задачи, разбираюсь в процессе,
              собираю понятное решение и довожу его до рабочего состояния.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                Смотреть проекты
              </a>
              <a className="secondary-action" href={`mailto:${contacts.email}`}>
                Написать на email
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="status-card">
              <span className="status-label">Фокус</span>
              <strong>сервисы, сайты, боты, автоматизация</strong>
              <p>
                Подхожу для задач, где нужно быстро собрать полезный инструмент:
                сайт, скрипт, простое приложение, интеграцию или внутреннюю
                панель.
              </p>
            </div>
            <div className="metric-grid">
              {highlights.map((item) => (
                <div className="metric" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="section-kicker">Обо мне</p>
          <h2>Не привязан к одной узкой нише: решаю задачи кодом.</h2>
        </div>
        <p>
          Работаю системным администратором-программистом и параллельно
          разрабатываю собственные и коммерческие проекты. Умею разговаривать с
          заказчиком без подробного ТЗ, переводить проблему в техническую
          структуру, делать frontend/backend, подключать API, работать с базами
          данных и проверять результат. AI-инструменты использую как практичный
          способ ускорять разработку и автоматизацию, без завышенных обещаний.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="section-kicker">Что могу сделать</p>
          <h2>Задачи для работы, фриланса и внутренней автоматизации</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Главные проекты</p>
          <h2>Кейсы, где важен рабочий результат, а не только код</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              {project.screenshots?.length ? (
                <div className="project-shot">
                  <img
                    src={project.screenshots[0].src}
                    alt={`Скриншот проекта ${project.title}: ${project.screenshots[0].caption}`}
                  />
                </div>
              ) : (
                <ProjectVisual type={project.visual} />
              )}
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.tag}</span>
                  <span>{project.result}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                {project.link ? (
                  <a className="project-link" href={project.link}>
                    Открыть GitHub
                  </a>
                ) : (
                  <span className="project-note">Локальный/демо-проект</span>
                )}
                {project.screenshots?.length ? (
                  <details className="screenshot-gallery">
                    <summary>Скриншоты и проверки</summary>
                    <div className="shot-strip">
                      {project.screenshots.map((shot) => (
                        <a href={shot.src} key={shot.src} target="_blank">
                          <img src={shot.src} alt={shot.caption} />
                          <span>{shot.caption}</span>
                        </a>
                      ))}
                    </div>
                  </details>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack" id="stack">
        <div className="section-heading">
          <p className="section-kicker">Технологии</p>
          <h2>Стек, с которым уже работал на практике</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacts">
        <div>
          <p className="section-kicker">Контакты</p>
          <h2>Открыт к найму, проектной работе и фрилансу</h2>
          <p>
            Можно писать по задачам: сайт, бот, скрипт, небольшое приложение,
            автоматизация, внутренняя CRM/ServiceDesk или доработка существующего
            проекта.
          </p>
        </div>
        <div className="contact-card">
          <a href="https://t.me/karameliew">Telegram: {contacts.telegram}</a>
          <a href={`mailto:${contacts.email}`}>Email: {contacts.email}</a>
          <a href="tel:+79950048477">Телефон: {contacts.phone}</a>
          <a href={contacts.github}>GitHub: ncatofthe</a>
          <a href={contacts.githubPages}>GitHub Pages: portfolio</a>
        </div>
      </section>
    </main>
  );
}
