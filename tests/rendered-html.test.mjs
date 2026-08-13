import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the portfolio page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Портфолио разработчика внутренних сервисов<\/title>/i);
  assert.match(html, /АВТОМАТИЗИРУЮ/);
  assert.match(html, /ВАШИ ПРОЦЕССЫ\./);
  assert.match(html, /Внутренние сервисы, сайты, боты и автоматизация/);
  assert.match(html, /Office ServiceDesk/);
  assert.match(html, /MarketplaceBot/);
  assert.match(html, /Veld Co template/);
  assert.match(html, /ESSE — 30 лет качества и инноваций/);
  assert.match(html, /ESSE Sense Himalaya/);
  assert.match(html, /Cold Black Element/);
  assert.match(html, /MarkiPoisk/);
  assert.match(html, /PC Inventory v9/);
  assert.match(html, /Lukoil Redesign Concept/);
  assert.match(html, /data-lang-option="en"/);
  assert.match(html, /data-order-trigger="true"/);
  assert.match(html, /Что можно заказать/);
  assert.match(html, /Заказать автоматизацию/);
  assert.match(html, /Заказать сайт/);
  assert.match(html, /https:\/\/t\.me\/vivesupport/);
  assert.match(html, /Системное администрирование/);
  assert.match(html, /ОТКРЫТ К ПРОЕКТНОЙ РАБОТЕ/);
  assert.match(html, /Системное администрирование/i);
  assert.match(html, /10\+ компаний/);
  assert.match(html, /100\+ сотрудников/);
  assert.match(html, /получили сайты, сервисы и автоматизацию/);
  assert.match(html, /PowerShell и автоматизация/);
  assert.match(html, /Windows Server и виртуализация/);
  assert.match(html, /Инвентаризация и оборудование/);
  assert.match(html, /Диагностика и безопасность/);
  assert.match(html, /marketplacebot-product\.png/);
  assert.match(html, /max-summary-architecture\.png/);
  assert.match(html, /inventory-dashboard\.png/);
  assert.match(html, /работают с внедренными инструментами/);
  assert.match(html, /02 \/ ЧТО ДЕЛАЮ/);
  assert.match(html, /03 \/ ВЫБРАННЫЕ ПРОЕКТЫ/);
  assert.match(html, /09 \/ КОНТАКТ/);
  assert.doesNotMatch(html, /Жихарев Глеб/);
  assert.doesNotMatch(html, /karameliew/i);
  assert.doesNotMatch(html, /Task Manager|task_bogdan/i);
  assert.doesNotMatch(html, /видео|video/i);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site|codex-preview/i);
});

test("keeps the GitHub Pages build polished and lightweight", async () => {
  const [docsHtml, scrollReveal, globals] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../app/ScrollReveal.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(docsHtml, /servicedesk-dashboard-cover\.png/);
  assert.match(docsHtml, /servicedesk-dashboard-cover\.png"[^>]+width="1920" height="1080"/);
  assert.match(docsHtml, /servicedesk-queue\.png"[^>]+width="1920" height="1080"/);
  assert.match(docsHtml, /marketplacebot-product\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /max-summary-architecture\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /inventory-dashboard\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /marki-poisk-dashboard\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /pc-inventory-dashboard\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /lukoil-concept-cover\.png"[^>]+width="2560" height="1440"/);
  assert.match(docsHtml, /site\.js/);
  assert.match(docsHtml, /i18n\.js/);
  assert.match(docsHtml, /data-lang-option="ru"/);
  assert.match(docsHtml, /data-lang-option="en"/);
  assert.match(docsHtml, /data-order-trigger/);
  assert.match(docsHtml, /class="order-modal\s/);
  assert.match(docsHtml, /Заказать автоматизацию/);
  assert.match(docsHtml, /Заказать сайт/);
  assert.ok((docsHtml.match(/https:\/\/t\.me\/vivesupport/g) ?? []).length >= 4);
  assert.match(docsHtml, /Veld Co template/);
  assert.match(docsHtml, /veldco-cover\.png"[^>]+width="1920" height="1080"/);
  assert.match(docsHtml, /esse-original-cover\.png"[^>]+width="1920" height="1080"/);
  assert.match(docsHtml, /esse-himalaya-cover\.png"[^>]+width="1920" height="1080"/);
  assert.match(docsHtml, /esse-kinetic-cover\.png"[^>]+width="1920" height="1080"/);
  assert.match(docsHtml, /hero-title/);
  assert.match(docsHtml, /ticker/);
  assert.match(docsHtml, /project-grid/);
  assert.match(docsHtml, /order-modal/);
  assert.match(docsHtml, /data-lightbox-src="\/portfolio\/screenshots\/servicedesk-dashboard-cover\.png"/);
  assert.match(docsHtml, /Системное администрирование/i);
  assert.match(docsHtml, /10\+ компаний/);
  assert.match(docsHtml, /100\+ сотрудников/);
  assert.match(docsHtml, /DNS\/DHCP/);
  assert.match(docsHtml, /VMware/);
  assert.match(docsHtml, /восстановление данных/);
  assert.doesNotMatch(docsHtml, /Жихарев Глеб/);
  assert.doesNotMatch(docsHtml, /karameliew/i);
  assert.doesNotMatch(docsHtml, /Task Manager|task_bogdan/i);
  assert.doesNotMatch(docsHtml, /видео|video/i);
  assert.doesNotMatch(docsHtml, /class="shot-main"[^>]+target="_blank"/);
  assert.match(scrollReveal, /requestAnimationFrame/);
  assert.match(scrollReveal, /data-lightbox-src/);
  assert.match(scrollReveal, /data-order-trigger/);
  assert.match(scrollReveal, /order-modal-close/);
  assert.match(globals, /--bg:\s*#f5f3ec/);
  assert.match(globals, /--accent:\s*#3a56f0/);
  assert.match(globals, /Space Grotesk/);
  assert.match(globals, /ticker 32s linear infinite/);
  assert.match(globals, /lightbox-frame/);
  assert.match(globals, /object-fit:\s*contain/);

  await Promise.all([
    access(new URL("../docs/screenshots/servicedesk-dashboard-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/marketplacebot-product.png", import.meta.url)),
    access(new URL("../docs/screenshots/max-summary-architecture.png", import.meta.url)),
    access(new URL("../docs/screenshots/inventory-dashboard.png", import.meta.url)),
    access(new URL("../docs/screenshots/marki-poisk-dashboard.png", import.meta.url)),
    access(new URL("../docs/screenshots/pc-inventory-dashboard.png", import.meta.url)),
    access(new URL("../docs/screenshots/lukoil-concept-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/veldco-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/veldco-full.png", import.meta.url)),
    access(new URL("../docs/screenshots/esse-original-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/esse-himalaya-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/esse-kinetic-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/esse-original-full.jpg", import.meta.url)),
    access(new URL("../docs/screenshots/esse-himalaya-full.jpg", import.meta.url)),
    access(new URL("../docs/screenshots/esse-kinetic-full.jpg", import.meta.url)),
    access(new URL("../docs/i18n.js", import.meta.url)),
    access(new URL("../docs/screenshots/systeminfo-cover.png", import.meta.url)),
    access(new URL("../docs/resume-developer.pdf", import.meta.url)),
    access(new URL("../docs/resume-admin.pdf", import.meta.url)),
  ]);
});
