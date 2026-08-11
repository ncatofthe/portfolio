(() => {
  const root = document.documentElement;
  const i18n = window.portfolioI18n;
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const normalize = (value) => value.replace(/\s+/g, " ").trim();

  function applyLanguage(lang) {
    root.lang = lang;
    document.title = i18n.pageTitles[lang];
    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      const active = button.dataset.langOption === lang;
      button.setAttribute("aria-pressed", String(active));
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement && !node.parentElement.closest("script, style") && normalize(node.nodeValue || "")
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    let node = walker.nextNode();
    while (node) {
      const original = originalText.get(node) || node.nodeValue || "";
      originalText.set(node, original);
      const key = normalize(original);
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      node.nodeValue = lang === "en" && i18n.translations[key] ? `${leading}${i18n.translations[key]}${trailing}` : original;
      node = walker.nextNode();
    }

    document.querySelectorAll("[aria-label], [data-lightbox-title], [alt]").forEach((element) => {
      const attrs = originalAttrs.get(element) || new Map();
      ["aria-label", "data-lightbox-title", "alt"].forEach((name) => {
        const current = element.getAttribute(name);
        if (!current) return;
        if (!attrs.has(name)) attrs.set(name, current);
        const original = attrs.get(name);
        element.setAttribute(name, lang === "en" && i18n.translations[normalize(original)] ? i18n.translations[normalize(original)] : original);
      });
      originalAttrs.set(element, attrs);
    });
  }

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langOption === "en" ? "en" : "ru";
      localStorage.setItem(i18n.storageKey, lang);
      applyLanguage(lang);
    });
  });
  applyLanguage(localStorage.getItem(i18n.storageKey) === "en" ? "en" : "ru");

  const menu = document.querySelector(".main-nav");
  const menuButton = document.querySelector(".menu-toggle");
  const closeMenu = () => {
    menu?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.textContent = root.lang === "en" ? "MENU" : "МЕНЮ";
  };
  menuButton?.addEventListener("click", () => {
    const open = !menu?.classList.contains("open");
    menu?.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? (root.lang === "en" ? "CLOSE" : "ЗАКРЫТЬ") : (root.lang === "en" ? "MENU" : "МЕНЮ");
  });
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  const orderModal = document.querySelector(".order-modal");
  const closeOrder = () => {
    if (!orderModal) return;
    orderModal.classList.remove("is-open");
    orderModal.hidden = true;
    document.body.classList.remove("modal-open");
  };
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest?.("[data-order-trigger]");
    if (!trigger || !orderModal) return;
    event.preventDefault();
    orderModal.hidden = false;
    requestAnimationFrame(() => orderModal.classList.add("is-open"));
    document.body.classList.add("modal-open");
    orderModal.querySelector(".order-modal-close")?.focus();
  });
  orderModal?.querySelector(".order-modal-close")?.addEventListener("click", closeOrder);
  orderModal?.addEventListener("click", (event) => { if (event.target === orderModal) closeOrder(); });

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Просмотр скриншота");
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Закрыть скриншот">×</button><figure class="lightbox-frame"><img class="lightbox-image" alt=""><figcaption class="lightbox-caption"></figcaption></figure>';
  document.body.append(lightbox);
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.hidden = true;
    document.body.classList.remove("modal-open");
  };
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest?.("[data-lightbox-src]");
    if (!trigger) return;
    event.preventDefault();
    const title = trigger.dataset.lightboxTitle || "Скриншот проекта";
    const image = lightbox.querySelector(".lightbox-image");
    image.src = trigger.dataset.lightboxSrc;
    image.alt = title;
    lightbox.querySelector(".lightbox-caption").textContent = title;
    lightbox.hidden = false;
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    document.body.classList.add("modal-open");
    lightbox.querySelector(".lightbox-close").focus();
  });
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeOrder();
    closeLightbox();
  });

  const revealItems = document.querySelectorAll("[data-reveal], .intro-heading, .work-heading, .fit-section > h2, .process > h2, .process-grid article, .experience-section > h2, .experience-row, .admin-list details, .stack-section > h2, .stack-lines > div, .contact h2, .contact-links a");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: .1 });
  revealItems.forEach((item) => observer.observe(item));

  let frame = 0;
  const updateProgress = () => {
    const scrollable = root.scrollHeight - innerHeight;
    root.style.setProperty("--scroll-progress", String(scrollable > 0 ? scrollY / scrollable : 0));
    frame = 0;
  };
  addEventListener("scroll", () => { if (!frame) frame = requestAnimationFrame(updateProgress); }, { passive: true });
  updateProgress();

  if (matchMedia("(hover: hover) and (pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("[data-tilt]").forEach((target) => {
      target.addEventListener("pointermove", (event) => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        target.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3.5}deg)`;
      });
      target.addEventListener("pointerleave", () => { target.style.transform = ""; });
    });
  }
})();
