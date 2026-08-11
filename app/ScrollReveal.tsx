"use client";

import { useEffect, useRef, useState } from "react";
import { languageStorageKey, pageTitles, translations } from "./i18n";

const revealSelector = [
  ".section",
  ".status-card",
  ".result-card",
  ".metric",
  ".service-card",
  ".experience-card",
  ".admin-item",
  ".tool-group",
  ".stack-group",
  ".other-project-card",
  ".project-card",
  ".skill-cloud span",
  ".contact-card",
].join(",");

type LightboxState = {
  src: string;
  title: string;
};

export function ScrollReveal() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const activeTriggerRef = useRef<HTMLElement | null>(null);

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

    document.body.classList.add("lightbox-open");
    closeButton?.focus();
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.classList.remove("lightbox-open");
      document.removeEventListener("keydown", handleKeydown);
      activeTriggerRef.current?.focus();
    };
  }, [lightbox]);

  const closeLightbox = () => setLightbox(null);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      {lightbox ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Просмотр скриншота" onClick={closeLightbox}>
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
