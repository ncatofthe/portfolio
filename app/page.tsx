import { ScrollReveal } from "./ScrollReveal";

const contacts = {
  name: "Жихарев Глеб",
  role: "Разработчик внутренних сервисов и автоматизации",
  telegram: "@karameliew",
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
    value: "3 сотрудника",
    label: "получили меньше ручной работы за счет автоматизации отзывов",
  },
  {
    value: "от анализа до запуска",
    label: "самостоятельно веду прикладные проекты и проверяю результат",
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
    place: "текущий практический опыт",
    text: "Поддержка пользователей и рабочих мест, диагностика Windows/Linux, автоматизация внутренних процессов, разработка служебных инструментов и сопровождение внедренных решений.",
  },
  {
    title: "Независимый разработчик",
    place: "проектная работа и собственные продукты",
    text: "Создание сайтов, внутренних сервисов, ботов, интеграций и прикладных утилит под задачи компаний, фрилансеров и небольших команд.",
  },
];

const education = {
  title: "Среднее профессиональное образование",
  text: "Специальность: «Программирование компьютерных систем». Средний балл диплома: 4,75 из 5.",
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
      width: 1274,
      height: 796,
    },
    screenshots: [
      {
        src: "/screenshots/servicedesk-dashboard.png",
        caption: "Главная панель с метриками",
        width: 1274,
        height: 1433,
      },
      {
        src: "/screenshots/servicedesk-tickets.png",
        caption: "Список заявок и фильтры",
        width: 1274,
        height: 1874,
      },
      {
        src: "/screenshots/servicedesk-queue.png",
        caption: "Очередь исполнителей",
        width: 1274,
        height: 3124,
      },
      {
        src: "/screenshots/servicedesk-admin.png",
        caption: "Настройки и роли",
        width: 1274,
        height: 1583,
      },
    ],
  },
  {
    title: "MarketplaceBot",
    featured: true,
    tag: "автоматизация маркетплейсов",
    result: "меньше ручной работы для 3 сотрудников",
    headline: "Desktop-приложение и боты для автоматической обработки отзывов Ozon и Wildberries.",
    task:
      "Сотрудникам приходилось вручную просматривать отзывы, выбирать шаблон ответа и повторять однотипные действия в маркетплейсах.",
    solution:
      "Собрал приложение с GUI, шаблонами ответов по рейтингу, расписанием обработки, хранением настроек, логированием и подготовкой Windows-сборки.",
    role:
      "Проектирование сценариев, разработка Python-приложения, интеграции с API маркетплейсов, настройка сборки и проверка рабочих модулей.",
    outcome:
      "Автоматизация маркетплейсов сократила объём ручной работы для трёх сотрудников и ускорила обработку повторяющихся отзывов.",
    stack: ["Python", "Tkinter", "Ozon API", "Wildberries API", "PyInstaller"],
    link: "https://github.com/ncatofthe/MarketplaceBot",
    screenshots: [
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
      "Инструмент помогает быстрее разбирать задачи, фиксировать план действий и проводить разработку в более управляемом режиме.",
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
    screenshots: [
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
    screenshots: [
      {
        src: "/screenshots/inventory-compile.png",
        caption: "Техническая проверка entrypoint приложения",
        width: 1600,
        height: 1000,
      },
    ],
  },
];

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ProjectCard({ project, compact = false }: { project: (typeof projects)[number]; compact?: boolean }) {
  const mainShot = project.cover ?? project.screenshots[0];

  return (
    <article className={`project-card ${compact ? "project-card-compact" : "project-card-featured"}`}>
      <div className="project-shot">
        <img
          src={mainShot.src}
          alt={`Скриншот проекта ${project.title}: ${mainShot.caption}`}
          width={mainShot.width}
          height={mainShot.height}
          loading={compact ? "lazy" : "eager"}
        />
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.tag}</span>
          <span>{project.result}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-headline">{project.headline}</p>
        <div className="project-detail-grid">
          <div>
            <span>Задача</span>
            <p>{project.task}</p>
          </div>
          <div>
            <span>Решение</span>
            <p>{project.solution}</p>
          </div>
          <div>
            <span>Моя роль</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>Результат</span>
            <p>{project.outcome}</p>
          </div>
        </div>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-actions">
          <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
            Исходный код
          </a>
          <details className="screenshot-gallery">
            <summary>Скриншоты</summary>
            <div className="shot-strip">
              {project.screenshots.map((shot) => (
                <a href={shot.src} key={shot.src} target="_blank" rel="noreferrer">
                  <img src={shot.src} alt={shot.caption} width={shot.width} height={shot.height} loading="lazy" />
                  <span>{shot.caption}</span>
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <section className="hero">
        <nav className="topbar" aria-label="Главная навигация">
          <a href="#projects">Кейсы</a>
          <a href="#services">Чем полезен</a>
          <a href="#experience">Опыт</a>
          <a href="#stack">Стек</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Внутренние сервисы, автоматизация и интеграции</p>
            <h1>{contacts.name}</h1>
            <p className="hero-role">{contacts.role}</p>
            <p className="lead">
              Создаю Service Desk, ботов, интеграции, административные панели и служебные приложения для компаний.
              Разбираюсь в рабочем процессе, проектирую решение, разрабатываю frontend и backend и довожу продукт до
              внедрения.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                Посмотреть проекты
              </a>
              <a className="secondary-action" href="https://t.me/karameliew">
                Обсудить задачу в Telegram
              </a>
              <a className="secondary-action" href="/resume-developer.pdf" download>
                Скачать резюме
              </a>
            </div>
          </div>

          <div className="hero-panel">
            <div className="status-card">
              <span className="status-label">Фокус</span>
              <strong>прикладные инструменты под рабочие процессы</strong>
              <p>
                Основной профиль - внутренние сервисы, автоматизация, API-интеграции и служебные приложения. Опыт
                системного администрирования помогает лучше понимать пользователей, инфраструктуру и реальные ограничения
                бизнеса.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section results-strip" aria-label="Ключевые результаты">
        {proofPoints.map((point) => (
          <article className="result-card" key={point.value}>
            <strong>{point.value}</strong>
            <span>{point.label}</span>
          </article>
        ))}
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Главные проекты</p>
          <h2>Кейсы, которые показывают коммерческую пользу и личный вклад</h2>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="section-kicker">Чем могу быть полезен</p>
          <h2>Разрабатываю инструменты, которые закрывают конкретные рабочие задачи</h2>
        </div>
        <div className="services-grid services-grid-focused">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <p className="section-kicker">Опыт и база</p>
          <h2>Разработка плюс понимание IT-инфраструктуры</h2>
        </div>
        <div className="experience-grid">
          {experience.map((item) => (
            <article className="experience-card" key={item.title}>
              <span>{item.place}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
          <article className="experience-card education-card">
            <span>образование</span>
            <h3>{education.title}</h3>
            <p>{education.text}</p>
          </article>
        </div>
      </section>

      <section className="section projects other-projects" id="other-projects">
        <div className="section-heading">
          <p className="section-kicker">Дополнительные проекты</p>
          <h2>Утилиты, боты и инструменты для прикладных задач</h2>
        </div>
        <div className="project-list">
          {otherProjects.map((project) => (
            <ProjectCard project={project} compact key={project.title} />
          ))}
        </div>
      </section>

      <section className="section stack" id="stack">
        <div className="section-heading">
          <p className="section-kicker">Стек</p>
          <h2>Основные технологии и дополнительные компетенции</h2>
        </div>
        <div className="stack-groups">
          <article className="stack-group">
            <h3>Основной стек</h3>
            <div className="skill-cloud">
              {coreStack.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
          <article className="stack-group extra-card">
            <h3>Дополнительные компетенции</h3>
            <p>
              Не выношу это в основное позиционирование, но могу подключаться к задачам, где помогает опыт
              администрирования, анализа трафика, игровых движков и понимания железа.
            </p>
            <div className="skill-cloud">
              {additionalStack.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contacts">
        <div>
          <p className="section-kicker">Контакты</p>
          <h2>Открыт к работе и проектным задачам</h2>
          <p>
            Интересны задачи в области внутренних сервисов, автоматизации, API-интеграций и служебных приложений.
            Опишите задачу - помогу определить подход и оценить реализацию.
          </p>
        </div>
        <div className="contact-card">
          <a href="https://t.me/karameliew">Обсудить задачу в Telegram: {contacts.telegram}</a>
          <a href={`mailto:${contacts.email}`}>Написать на email: {contacts.email}</a>
          <a href="/resume-developer.pdf" download>
            Скачать резюме разработчика
          </a>
          <a href="/resume-admin.pdf" download>
            Скачать резюме сисадмина-программиста
          </a>
          <a href={contacts.github} target="_blank" rel="noreferrer">
            GitHub: ncatofthe
          </a>
          <a href={contacts.githubPages}>GitHub Pages: portfolio</a>
        </div>
      </section>
    </main>
  );
}
