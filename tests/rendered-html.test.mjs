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
  assert.match(html, /<title>Жихарев Глеб - разработчик внутренних сервисов<\/title>/i);
  assert.match(html, /Разработчик внутренних сервисов и автоматизации/);
  assert.match(html, /Office ServiceDesk/);
  assert.match(html, /AI Workbench/);
  assert.match(html, /MarketplaceBot/);
  assert.match(html, /Системный администратор-программист/);
  assert.match(html, /Москва · удаленно \/ гибридно · открыт к проектной работе/);
  assert.match(html, /Системное администрирование/);
  assert.match(html, /Для 3 сотрудников/);
  assert.match(html, /Полный цикл/);
  assert.match(html, /PowerShell и автоматизация/);
  assert.match(html, /Windows Server и виртуализация/);
  assert.match(html, /Инвентаризация и оборудование/);
  assert.match(html, /Диагностика и безопасность/);
  assert.match(html, /marketplacebot-product\.png/);
  assert.match(html, /ai-workbench-workflow\.png/);
  assert.match(html, /max-summary-architecture\.png/);
  assert.match(html, /inventory-dashboard\.png/);
  assert.match(html, /Портфолио обновлено в августе 2026 года/);
  assert.match(html, /используют разработанный мной ServiceDesk/);
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
  assert.match(docsHtml, /ai-workbench-workflow\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /max-summary-architecture\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /inventory-dashboard\.png"[^>]+width="1600" height="1000"/);
  assert.match(docsHtml, /requestAnimationFrame/);
  assert.match(docsHtml, /premium-shadow/);
  assert.match(docsHtml, /orbit-frame/);
  assert.match(docsHtml, /class="lightbox"/);
  assert.match(docsHtml, /data-lightbox-src="screenshots\/servicedesk-dashboard-cover\.png"/);
  assert.match(docsHtml, /body\.lightbox-open/);
  assert.match(docsHtml, /Системное администрирование/);
  assert.match(docsHtml, /DNS\/DHCP/);
  assert.match(docsHtml, /VMware/);
  assert.match(docsHtml, /восстановление данных/);
  assert.match(docsHtml, /Портфолио обновлено в августе 2026 года/);
  assert.match(docsHtml, /object-fit:\s*contain/);
  assert.doesNotMatch(docsHtml, /видео|video/i);
  assert.doesNotMatch(docsHtml, /class="shot-main"[^>]+target="_blank"/);
  assert.doesNotMatch(docsHtml, /object-fit:\s*cover/);
  assert.doesNotMatch(docsHtml, /filter:\s*blur\(8px\)/);
  assert.match(scrollReveal, /requestAnimationFrame/);
  assert.match(scrollReveal, /data-lightbox-src/);
  assert.match(globals, /clip-path:\s*inset\(0 0 8% 0 round 8px\)/);
  assert.match(globals, /lightbox-frame/);
  assert.match(globals, /object-fit:\s*contain/);
  assert.doesNotMatch(globals, /object-fit:\s*cover/);
  assert.doesNotMatch(globals, /filter:\s*blur\(8px\)/);

  await Promise.all([
    access(new URL("../docs/screenshots/servicedesk-dashboard-cover.png", import.meta.url)),
    access(new URL("../docs/screenshots/marketplacebot-product.png", import.meta.url)),
    access(new URL("../docs/screenshots/ai-workbench-workflow.png", import.meta.url)),
    access(new URL("../docs/screenshots/max-summary-architecture.png", import.meta.url)),
    access(new URL("../docs/screenshots/inventory-dashboard.png", import.meta.url)),
    access(new URL("../docs/screenshots/systeminfo-cover.png", import.meta.url)),
    access(new URL("../docs/resume-developer.pdf", import.meta.url)),
    access(new URL("../docs/resume-admin.pdf", import.meta.url)),
  ]);
});
