"use client";

import { useEffect, useRef, useState } from "react";
import { languageStorageKey, pageTitles, translations } from "./i18n";

const revealSelector = [
  "[data-reveal]",
  ".intro-heading",
  ".work-heading",
  ".fit-section > h2",
  ".process > h2",
  ".process-grid article",
  ".experience-section > h2",
  ".experience-row",
  ".admin-list details",
  ".stack-section > h2",
  ".stack-lines > div",
  ".contact h2",
  ".contact-links a",
].join(",");

type LightboxState = {
  src: string;
  title: string;
};

export function ScrollReveal() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [orderOpen, setOrderOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLElement | null>(null);
  const activeOrderTriggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const originalText = new WeakMap<Text, string>();
    const originalAttrs = new WeakMap<Element, Map<string, string>>();
    const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

    const getTranslation = (value: string, lang: "ru" | "en") => {
      const normalized = normalize(value);
      if (!normalized) {
        return value;
      }
      if (lang === "ru") {
        return value;
      }
      return translations[normalized] ?? value;
    };

    const applyLanguage = (lang: "ru" | "en") => {
      document.documentElement.lang = lang;
      document.title = pageTitles[lang];
      document.querySelectorAll<HTMLButtonElement>("[data-lang-option]").forEach((button) => {
        const active = button.dataset.langOption === lang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", `${active}`);
      });

      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent || parent.closest("script, style")) {
            return NodeFilter.FILTER_REJECT;
          }
          return normalize(node.nodeValue ?? "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        },
      });

      let node = walker.nextNode() as Text | null;
      while (node) {
        const original = originalText.get(node) ?? node.nodeValue ?? "";
        originalText.set(node, original);
        const leading = original.match(/^\s*/)?.[0] ?? "";
        const trailing = original.match(/\s*$/)?.[0] ?? "";
        node.nodeValue = lang === "ru" ? original : `${leading}${getTranslation(original, lang)}${trailing}`;
        node = walker.nextNode() as Text | null;
      }

      document.querySelectorAll<HTMLElement>("[aria-label], [data-lightbox-title], [alt]").forEach((element) => {
        const attrs = originalAttrs.get(element) ?? new Map<string, string>();
        ["aria-label", "data-lightbox-title", "alt"].forEach((attr) => {
          const current = element.getAttribute(attr);
          if (!current) {
            return;
          }
          if (!attrs.has(attr)) {
            attrs.set(attr, current);
          }
          const original = attrs.get(attr) ?? current;
          element.setAttribute(attr, lang === "ru" ? original : getTranslation(original, lang));
        });
        originalAttrs.set(element, attrs);
      });
    };

    const saved = localStorage.getItem(languageStorageKey);
    const initialLang = saved === "en" ? "en" : "ru";
    applyLanguage(initialLang);

    const handleLanguageClick = (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const nextLang = button.dataset.langOption === "en" ? "en" : "ru";
      localStorage.setItem(languageStorageKey, nextLang);
      applyLanguage(nextLang);
    };

    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-lang-option]"));
    buttons.forEach((button) => button.addEventListener("click", handleLanguageClick));

    return () => {
      buttons.forEach((button) => button.removeEventListener("click", handleLanguageClick));
    };
  }, []);

  useEffect(() => {
    const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
    const nav = document.querySelector<HTMLElement>(".main-nav");
    if (!menuButton || !nav) return;

    const closeMenu = () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = document.documentElement.lang === "en" ? "MENU" : "МЕНЮ";
    };
    const toggleMenu = () => {
      const open = !nav.classList.contains("open");
      nav.classList.toggle("open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? (document.documentElement.lang === "en" ? "CLOSE" : "ЗАКРЫТЬ") : (document.documentElement.lang === "en" ? "MENU" : "МЕНЮ");
    };

    menuButton.addEventListener("click", toggleMenu);
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    return () => {
      menuButton.removeEventListener("click", toggleMenu);
      nav.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
    const cleanups = targets.map((target) => {
      const move = (event: PointerEvent) => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        target.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3.5}deg)`;
      };
      const leave = () => { target.style.transform = ""; };
      target.addEventListener("pointermove", move);
      target.addEventListener("pointerleave", leave);
      return () => { target.removeEventListener("pointermove", move); target.removeEventListener("pointerleave", leave); };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    root.classList.add("scroll-ready");

    items.forEach((item, index) => {
      item.classList.add("reveal-on-scroll");
      item.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 42, 252)}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    items.forEach((item) => revealObserver.observe(item));

    let progressFrame = 0;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(Math.max(progress, 0), 1)}`);
      progressFrame = 0;
    };

    const scheduleProgress = () => {
      if (progressFrame) {
        return;
      }

      progressFrame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleProgress, { passive: true });
    window.addEventListener("resize", scheduleProgress);

    return () => {
      revealObserver.disconnect();
      if (progressFrame) {
        window.cancelAnimationFrame(progressFrame);
      }
      window.removeEventListener("scroll", scheduleProgress);
      window.removeEventListener("resize", scheduleProgress);
      root.classList.remove("scroll-ready");
      root.style.removeProperty("--scroll-progress");
      items.forEach((item) => {
        item.classList.remove("reveal-on-scroll", "is-visible");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  useEffect(() => {
    const handleOrderClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const trigger = target?.closest<HTMLElement>("[data-order-trigger]");
      if (!trigger) {
        return;
      }

      event.preventDefault();
      activeOrderTriggerRef.current = trigger;
      setOrderOpen(true);
    };

    document.addEventListener("click", handleOrderClick);

    return () => {
      document.removeEventListener("click", handleOrderClick);
      activeOrderTriggerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!orderOpen) {
      return;
    }

    const closeButton = document.querySelector<HTMLButtonElement>(".order-modal-close");
    const modal = document.querySelector<HTMLElement>(".order-modal");
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOrderOpen(false);
        return;
      }

      if (event.key === "Tab" && modal) {
        const focusable = Array.from(modal.querySelectorAll<HTMLElement>("button, a[href]"));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!first || !last) {
          return;
        }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.classList.add("modal-open");
    closeButton?.focus();
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeydown);
      activeOrderTriggerRef.current?.focus();
    };
  }, [orderOpen]);

  useEffect(() => {
    const openLightbox = (trigger: HTMLElement) => {
      const src = trigger.dataset.lightboxSrc;
      if (!src) {
        return;
      }

      activeTriggerRef.current = trigger;
      setLightbox({
        src,
        title: trigger.dataset.lightboxTitle ?? trigger.getAttribute("aria-label") ?? "Скриншот проекта",
      });
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const trigger = target?.closest<HTMLElement>("[data-lightbox-src]");
      if (!trigger) {
        return;
      }

      event.preventDefault();
      openLightbox(trigger);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      activeTriggerRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!lightbox) {
      return;
    }

    const closeButton = document.querySelector<HTMLButtonElement>(".lightbox-close");

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    document.body.classList.add("modal-open");
    closeButton?.focus();
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", handleKeydown);
      activeTriggerRef.current?.focus();
    };
  }, [lightbox]);

  const closeLightbox = () => setLightbox(null);
  const closeOrder = () => setOrderOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div
        className={`order-modal ${orderOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Что можно заказать"
        hidden={!orderOpen}
        onClick={closeOrder}
      >
        <section className="order-modal-panel" onClick={(event) => event.stopPropagation()}>
          <button className="order-modal-close" type="button" aria-label="Закрыть окно заказа" onClick={closeOrder}>
            ×
          </button>
          <header className="order-modal-header">
            <span>Сайты и автоматизация</span>
            <h2>Что можно заказать</h2>
            <p>Выберите направление — я помогу уточнить задачу, предложу подход и оценю реализацию.</p>
          </header>
          <div className="order-options">
            <article className="order-option order-option-automation">
              <span className="order-option-number">01</span>
              <h3>Автоматизация</h3>
              <p>Для процессов, где ручную работу можно заменить понятным инструментом.</p>
              <ul>
                <li>Telegram- и API-боты</li>
                <li>Интеграции с маркетплейсами и сервисами</li>
                <li>Обработка файлов, отчетов и данных</li>
                <li>Внутренние сервисы и административные панели</li>
              </ul>
              <a className="order-option-action" href="https://t.me/vivesupport">
                Заказать автоматизацию <span aria-hidden="true">↗</span>
              </a>
            </article>
            <article className="order-option order-option-site">
              <span className="order-option-number">02</span>
              <h3>Разработка сайта</h3>
              <p>От лаконичного лендинга до интерактивной продуктовой презентации.</p>
              <ul>
                <li>Лендинги для услуг и продуктов</li>
                <li>Корпоративные сайты и портфолио</li>
                <li>Каталоги и продуктовые страницы</li>
                <li>Анимационные промо-сайты</li>
              </ul>
              <a className="order-option-action" href="https://t.me/vivesupport">
                Заказать сайт <span aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
          <a className="order-direct-link" href="https://t.me/vivesupport">
            Написать напрямую: @vivesupport
          </a>
        </section>
      </div>
      {lightbox ? (
        <div className="lightbox is-open" role="dialog" aria-modal="true" aria-label="Просмотр скриншота" onClick={closeLightbox}>
          <button className="lightbox-close" type="button" aria-label="Закрыть скриншот" onClick={closeLightbox}>
            ×
          </button>
          <figure className="lightbox-frame" onClick={(event) => event.stopPropagation()}>
            <img className="lightbox-image" src={lightbox.src} alt={lightbox.title} />
            <figcaption className="lightbox-caption">{lightbox.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
