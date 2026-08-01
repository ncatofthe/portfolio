"use client";

import { useEffect } from "react";

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

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    root.classList.add("scroll-ready");

    items.forEach((item, index) => {
      item.classList.add("reveal-on-scroll");
      item.style.setProperty("--reveal-delay", `${Math.min((index % 8) * 55, 385)}ms`);
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

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(Math.max(progress, 0), 1)}`);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      root.classList.remove("scroll-ready");
      root.style.removeProperty("--scroll-progress");
      items.forEach((item) => {
        item.classList.remove("reveal-on-scroll", "is-visible");
        item.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
