(() => {
  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const mediaUrl = (fileName) => new URL(`media/${fileName}`, scriptUrl).href;

  const copy = window.BRAWLZERK_PRESSKIT_RUNTIME_COPY;

  const screenshots = [
    ["BRAWLZERK_Screenshot_01b.png", "media.screenshot1Alt", "shot1"],
    ["BRAWLZERK_Screenshot_02.png", "media.screenshot2Alt", "shot2"],
    ["BRAWLZERK_Screenshot_03.png", "media.screenshot3Alt", "shot3"],
    ["BRAWLZERK_Screenshot_06.png", "media.screenshot4Alt", "shot4"],
    ["BRAWLZERK_Screenshot_12.png", "media.screenshot5Alt", "shot5"]
  ];

  const getLocale = () => {
    const language = document.documentElement.lang;
    if (copy[language]) return language;
    const baseLocale = language.slice(0, 2).toLowerCase();
    return copy[baseLocale] ? baseLocale : "en";
  };

  const installHeader = () => {
    const localeSwitch = document.querySelector(".header-locale");
    if (!localeSwitch || localeSwitch.closest(".header-actions")) return;
    const actions = document.createElement("div");
    actions.className = "header-actions";
    localeSwitch.before(actions);
    actions.append(localeSwitch);

    const email = document.createElement("span");
    email.className = "header-email";
    email.textContent = "reforbli@gmail.com";
    actions.append(email);
  };

  const installTrailer = () => {
    const section = document.querySelector("#trailer");
    if (!section) return;
    const head = section.querySelector(".section-head");
    const eyebrow = head && head.querySelector(".eyebrow");
    if (head && eyebrow) {
      eyebrow.id = "trailer-section-title";
      head.replaceChildren(eyebrow);
      section.setAttribute("aria-labelledby", eyebrow.id);
    }

    const card = section.querySelector(".trailer-card");
    const embed = card && card.querySelector(".trailer-embed");
    if (!card || !embed) return;
    const intro = section.querySelector(".section-intro");
    if (intro && card.nextElementSibling !== intro) card.after(intro);
    card.querySelector(".trailer-copy")?.remove();
    embed.replaceChildren();

    if (/^https?:$/.test(window.location.protocol)) {
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/ul-CM7RlaXo?rel=0&playsinline=1";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      embed.append(iframe);
    } else {
      const video = document.createElement("video");
      video.className = "trailer-local-video";
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = mediaUrl("BRAWLZERK_Screenshot_01b.png");
      video.dataset.posterFallback = "shot1";
      const source = document.createElement("source");
      source.src = mediaUrl("BRAWLZERK_Official_Gameplay_Trailer_Web_720p.mp4");
      source.type = "video/mp4";
      video.append(source);
      embed.append(video);
    }
  };

  const createFeatureCard = (feature, localeCopy) => {
    const article = document.createElement("article");
    article.className = "feature-card";
    article.dataset.featureIndex = String(feature.index);

    const figure = document.createElement("figure");
    figure.className = "feature-media";
    const video = document.createElement("video");
    video.className = "feature-video";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = true;
    video.preload = "metadata";
    video.poster = mediaUrl(feature.poster);
    video.dataset.posterFallback = screenshots.find((item) => item[0] === feature.poster)?.[2] || "shot1";
    video.setAttribute("aria-label", feature.aria);
    const source = document.createElement("source");
    source.src = mediaUrl(feature.video);
    source.type = "video/webm";
    video.append(source, document.createTextNode(localeCopy.featureVideoFallback));
    figure.append(video);

    const content = document.createElement("div");
    content.className = "feature-copy";
    content.dataset.featureNumber = String(localeCopy.features.indexOf(feature) + 1).padStart(2, "0");
    const label = document.createElement("p");
    label.className = "feature-label";
    label.textContent = feature.label;
    const title = document.createElement("h3");
    title.textContent = feature.title;
    const summary = document.createElement("p");
    summary.textContent = feature.summary;
    content.append(label, title, summary);
    article.append(figure, content);
    return article;
  };

  const installFeatures = (localeCopy) => {
    const list = document.querySelector(".features-section .feature-list");
    if (!list) return;
    document.querySelector(".features-section .section-intro")?.remove();
    let cards = Array.from(list.querySelectorAll(".feature-card"));
    const needsBuild = cards.length !== localeCopy.features.length
      || cards.some((card, index) => card.dataset.featureIndex !== String(localeCopy.features[index].index));

    if (needsBuild) {
      list.replaceChildren(...localeCopy.features.map((feature) => createFeatureCard(feature, localeCopy)));
      cards = Array.from(list.querySelectorAll(".feature-card"));
    } else {
      cards.forEach((card, index) => {
        const feature = localeCopy.features[index];
        const label = card.querySelector(".feature-label");
        const title = card.querySelector(".feature-copy h3");
        const summary = card.querySelector(".feature-copy > p:last-child");
        const video = card.querySelector(".feature-video");
        if (label) label.textContent = feature.label;
        if (title) title.textContent = feature.title;
        if (summary) summary.textContent = feature.summary;
        if (video) {
          video.setAttribute("aria-label", feature.aria);
          const fallbackNode = Array.from(video.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
          if (fallbackNode) fallbackNode.nodeValue = localeCopy.featureVideoFallback;
        }
      });
    }

    const videos = list.querySelectorAll("video[autoplay]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videos.forEach((video) => {
        video.autoplay = false;
        video.pause();
      });
    } else if ("IntersectionObserver" in window) {
      const pendingVideos = Array.from(videos).filter((video) => video.dataset.visibilityObserved !== "true");
      if (pendingVideos.length) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.play().catch(() => {});
            else entry.target.pause();
          });
        }, { threshold: 0.25 });
        pendingVideos.forEach((video) => {
          video.dataset.visibilityObserved = "true";
          observer.observe(video);
        });
      }
    }
  };

  const createCarousel = () => {
    const carousel = document.createElement("div");
    carousel.className = "screenshot-carousel";
    carousel.dataset.screenshotCarousel = "";
    carousel.setAttribute("role", "region");
    carousel.tabIndex = 0;

    const stage = document.createElement("div");
    stage.className = "screenshot-stage";
    stage.setAttribute("aria-live", "polite");

    screenshots.forEach(([fileName, altKey, fallbackKey], index) => {
      const slide = document.createElement("div");
      slide.className = `screenshot-slide${index === 0 ? " is-active" : ""}`;
      slide.dataset.carouselSlide = "";
      if (index !== 0) slide.hidden = true;
      const image = document.createElement("img");
      image.src = mediaUrl(fileName);
      image.width = 1920;
      image.height = 1080;
      image.loading = index === 0 ? "eager" : "lazy";
      image.dataset.i18nAlt = altKey;
      image.dataset.inlineFallback = fallbackKey;
      slide.append(image);
      stage.append(slide);
    });

    const previous = document.createElement("button");
    previous.className = "screenshot-arrow screenshot-arrow-prev";
    previous.type = "button";
    previous.dataset.carouselPrev = "";
    previous.textContent = "‹";
    const next = document.createElement("button");
    next.className = "screenshot-arrow screenshot-arrow-next";
    next.type = "button";
    next.dataset.carouselNext = "";
    next.textContent = "›";
    stage.append(previous, next);

    const dots = document.createElement("div");
    dots.className = "screenshot-dots";
    dots.setAttribute("role", "group");
    screenshots.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `screenshot-dot${index === 0 ? " is-active" : ""}`;
      dot.type = "button";
      dot.dataset.carouselDot = String(index);
      if (index === 0) dot.setAttribute("aria-current", "true");
      dots.append(dot);
    });
    carousel.append(stage, dots);
    return carousel;
  };

  const installMedia = () => {
    const section = document.querySelector("#media");
    const gallery = section && section.querySelector(".media-gallery");
    if (!section || !gallery) return null;
    const carousel = createCarousel();
    gallery.replaceWith(carousel);
    section.querySelector(".trailer-card")?.setAttribute("hidden", "");
    return carousel;
  };

  const installContact = () => {
    const section = document.querySelector("#contact");
    if (!section) return;
    section.removeAttribute("aria-labelledby");
    section.setAttribute("aria-label", "Press contact email");
    const container = section.querySelector(".container");
    if (!container) return;
    container.className = "container contact-email-only";
    container.innerHTML = '<span class="contact-email">reforbli@gmail.com</span>';
  };

  const installSamePageLinks = () => {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start"
      });

      try {
        const url = new URL(window.location.href);
        url.hash = hash;
        window.history.pushState({}, "", url);
      } catch (error) {
        // Scrolling still works when URL history is unavailable, including some file previews.
      }
    });
  };

  const updateBrandAssets = (localeCopy) => {
    const section = document.querySelector(".brand-assets-section");
    const brandCopy = localeCopy.brandAssets;
    if (!section || !brandCopy) return;

    const eyebrow = section.querySelector(".eyebrow");
    const title = section.querySelector(".section-title");
    const intro = section.querySelector(".section-intro");
    if (eyebrow) eyebrow.textContent = brandCopy.eyebrow;
    if (title) title.innerHTML = brandCopy.title;
    if (intro) intro.innerHTML = brandCopy.intro;

    const carousel = section.querySelector("[data-brand-asset-carousel]");
    if (!carousel) return;
    carousel.setAttribute("aria-roledescription", localeCopy.carouselRole);
    carousel.setAttribute("aria-label", brandCopy.carousel);
    carousel.querySelector("[data-brand-asset-prev]")?.setAttribute("aria-label", brandCopy.previous);
    carousel.querySelector("[data-brand-asset-next]")?.setAttribute("aria-label", brandCopy.next);
    carousel.querySelector(".screenshot-dots")?.setAttribute("aria-label", brandCopy.picker);
    carousel.querySelector("[data-brand-asset-original]").textContent = brandCopy.original;

    const slides = Array.from(carousel.querySelectorAll("[data-brand-asset-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-brand-asset-dot]"));
    slides.forEach((slide, index) => {
      const item = brandCopy.items[index];
      if (!item) return;
      slide.dataset.assetTitle = item[0];
      const image = slide.querySelector("img");
      if (image) image.alt = item[1];
      dots[index]?.setAttribute("aria-label", `${item[0]} · ${localeCopy.view}`);
    });

    const activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
    const activeItem = brandCopy.items[activeIndex];
    if (activeItem) carousel.querySelector("[data-brand-asset-title]").textContent = activeItem[0];
  };

  const initCarousel = (carousel) => {
    if (!carousel) return;
    const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    let currentIndex = 0;

    const showSlide = (requestedIndex) => {
      currentIndex = (requestedIndex + slides.length) % slides.length;
      slides.forEach((slide, index) => {
        const active = index === currentIndex;
        slide.hidden = !active;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, index) => {
        const active = index === currentIndex;
        dot.classList.toggle("is-active", active);
        if (active) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    };

    carousel.querySelector("[data-carousel-prev]").addEventListener("click", () => showSlide(currentIndex - 1));
    carousel.querySelector("[data-carousel-next]").addEventListener("click", () => showSlide(currentIndex + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
      else if (event.key === "ArrowRight") showSlide(currentIndex + 1);
      else if (event.key === "Home") showSlide(0);
      else if (event.key === "End") showSlide(slides.length - 1);
      else return;
      event.preventDefault();
    });

    showSlide(0);
  };

  const updateLocalizedUi = () => {
    const localeCopy = copy[getLocale()];
    const heroLead = document.querySelector(".hero-lead");
    if (heroLead) heroLead.textContent = localeCopy.heroLead;
    const trailerIntro = document.querySelector("#trailer .section-intro");
    if (trailerIntro) trailerIntro.textContent = localeCopy.trailerIntro;
    const trailerFrame = document.querySelector("#trailer iframe, #trailer .trailer-local-video");
    if (trailerFrame) trailerFrame.setAttribute("title", localeCopy.trailerTitle);
    const mediaIntro = document.querySelector("#media .section-intro");
    if (mediaIntro) mediaIntro.innerHTML = localeCopy.mediaIntro;
    installFeatures(localeCopy);
    updateBrandAssets(localeCopy);

    const carousel = document.querySelector("[data-screenshot-carousel]");
    if (!carousel) return;
    carousel.setAttribute("aria-roledescription", localeCopy.carouselRole);
    carousel.setAttribute("aria-label", localeCopy.carousel);
    carousel.querySelector(".screenshot-dots").setAttribute("aria-label", localeCopy.picker);
    carousel.querySelector("[data-carousel-prev]").setAttribute("aria-label", localeCopy.previous);
    carousel.querySelector("[data-carousel-next]").setAttribute("aria-label", localeCopy.next);
    carousel.querySelectorAll("[data-carousel-dot]").forEach((dot, index) => {
      dot.setAttribute("aria-label", `${localeCopy.view} ${index + 1}`);
    });
  };

  installHeader();
  installTrailer();
  const carousel = installMedia();
  installContact();
  installSamePageLinks();
  initCarousel(carousel);
  updateLocalizedUi();

  new MutationObserver(updateLocalizedUi).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
})();
