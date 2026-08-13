from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"

pdfmetrics.registerFont(TTFont("ResumeSans", FONT))
pdfmetrics.registerFont(TTFont("ResumeSansBold", FONT_BOLD))


def styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "title",
            parent=base["Title"],
            fontName="ResumeSansBold",
            fontSize=24,
            leading=28,
            textColor=colors.HexColor("#101614"),
            spaceAfter=5 * mm,
        ),
        "role": ParagraphStyle(
            "role",
            parent=base["Normal"],
            fontName="ResumeSansBold",
            fontSize=13,
            leading=17,
            textColor=colors.HexColor("#123f46"),
            spaceAfter=5 * mm,
        ),
        "body": ParagraphStyle(
            "body",
            parent=base["BodyText"],
            fontName="ResumeSans",
            fontSize=9.6,
            leading=13.4,
            textColor=colors.HexColor("#26352f"),
            spaceAfter=2.8 * mm,
        ),
        "section": ParagraphStyle(
            "section",
            parent=base["Heading2"],
            fontName="ResumeSansBold",
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#1f6f63"),
            spaceBefore=4 * mm,
            spaceAfter=2 * mm,
        ),
        "small": ParagraphStyle(
            "small",
            parent=base["BodyText"],
            fontName="ResumeSans",
            fontSize=8.4,
            leading=11,
            textColor=colors.HexColor("#5b675f"),
        ),
    }


def p(text, style):
    return Paragraph(text, style)


def section(title, items, s):
    flow = [p(title, s["section"])]
    for item in items:
        flow.append(p(item, s["body"]))
    return flow


def make_resume(filename, role, summary, focus_items, project_items, stack_items):
    s = styles()
    out = ROOT / "public" / filename
    doc = SimpleDocTemplate(
        str(out),
        pagesize=A4,
        rightMargin=17 * mm,
        leftMargin=17 * mm,
        topMargin=15 * mm,
        bottomMargin=15 * mm,
        title=f"Жихарев Глеб - {role}",
        author="Жихарев Глеб",
    )
    flow = [
        p("Жихарев Глеб", s["title"]),
        p(role, s["role"]),
        p("Telegram: @vivesupport | Email: zhikharev@sfuk.ru | GitHub: github.com/ncatofthe | Portfolio: ncatofthe.github.io/portfolio", s["small"]),
        Spacer(1, 4 * mm),
        p(summary, s["body"]),
    ]
    flow += section("Ключевой фокус", focus_items, s)
    flow += section("Проекты", project_items, s)
    flow += section("Опыт", [
        "<b>Системный администратор-программист.</b> Поддержка пользователей и рабочих мест, диагностика Windows/Linux, автоматизация внутренних процессов, разработка служебных инструментов и сопровождение внедренных решений.",
        "<b>Независимый разработчик.</b> Создание сайтов, внутренних сервисов, ботов, интеграций и прикладных утилит под задачи компаний, фрилансеров и небольших команд.",
    ], s)
    flow += section("Образование", [
        "Среднее профессиональное образование. Специальность: «Программирование компьютерных систем». Средний балл диплома: 4,75 из 5.",
    ], s)
    flow += section("Стек", [", ".join(stack_items)], s)

    doc.build(flow)
    docs_out = ROOT / "docs" / filename
    docs_out.write_bytes(out.read_bytes())


make_resume(
    "resume-developer.pdf",
    "Разработчик внутренних сервисов и автоматизации",
    "Создаю Service Desk, ботов, API-интеграции, административные панели и служебные приложения. Умею разбирать рабочий процесс, проектировать решение, писать frontend/backend и доводить продукт до внедрения.",
    [
        "Office ServiceDesk используют три компании.",
        "Автоматизация маркетплейсов сократила объем ручной работы для 37 сотрудников.",
        "AI Workbench используется в реальных фриланс-задачах и помогает управлять многоагентной разработкой.",
    ],
    [
        "<b>Office ServiceDesk.</b> Единый портал заявок с очередями исполнителей, базой знаний, вложениями, email-интеграцией, ролями доступа и административной панелью. Роль: анализ процессов, архитектура, БД, frontend/backend, интеграции, тестирование и сопровождение.",
        "<b>MarketplaceBot.</b> Desktop-приложение и боты для обработки отзывов Ozon/Wildberries: шаблоны по рейтингу, расписание, настройки, логирование и Windows-сборка.",
        "<b>AI Workbench.</b> Offline-first платформа для многоагентной разработки: планирование задач, локальный LLM-контур, сохранение запусков, approval-механизм, REST API и проверки.",
    ],
    ["Python", "TypeScript", "React", "Node.js", "FastAPI", "Express", "Fastify", "PostgreSQL", "SQLite", "REST API", "Prisma", "Docker", "Playwright", "Ollama"],
)

make_resume(
    "resume-admin.pdf",
    "Системный администратор-программист",
    "Совмещаю поддержку пользователей и инфраструктуры с разработкой служебных инструментов. Могу автоматизировать повторяющиеся процессы, собирать диагностические утилиты, работать с внутренними сервисами и быстрее переводить проблемы пользователей в технические решения.",
    [
        "Поддержка рабочих мест, диагностика Windows/Linux, доступы, сети и типовые офисные проблемы.",
        "PowerShell/WMI-автоматизация, сбор системной информации и инвентаризация оборудования.",
        "Понимание комплектующих ПК, сборки, апгрейда, драйверов, BIOS/UEFI и диагностики железа.",
    ],
    [
        "<b>SystemInfo.</b> PowerShell-скрипт для сбора ключевой информации о Windows 10/11 без прав администратора. Помогает ускорить первичную диагностику и инвентаризацию.",
        "<b>Inventory App.</b> Прикладная утилита для учета IT-оборудования, быстрого поиска записей и поддержки порядка в IT-активах.",
        "<b>Office ServiceDesk.</b> Внутренняя система заявок с ролями, очередями, базой знаний и административной панелью, применимая для поддержки пользователей.",
    ],
    ["PowerShell", "WMI", "Windows 10/11", "Linux", "RDP", "SSH", "Python", "SQLite", "PostgreSQL", "React", "TypeScript", "OSINT", "Wireshark", "Git"],
)
