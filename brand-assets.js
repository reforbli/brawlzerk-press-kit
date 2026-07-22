(() => {
  const script = document.querySelector("script[data-brand-assets-script]");
  const mediaBase = script?.dataset.mediaBase || "assets/media/";
  const downloads = document.getElementById("downloads");
  const hostSection = downloads?.closest("section");

  if (!hostSection || document.querySelector(".brand-assets-section, .press-brand-assets")) {
    return;
  }

  const assets = [
    ["BRAWLZERK_Press_KeyArt_3840x2160.png", "3840 × 2160 · PNG"],
    ["BRAWLZERK_Press_KeyArt_Logo_3840x2160.png", "3840 × 2160 · PNG"],
    ["BRAWLZERK_store_main_1232x706.png", "1232 × 706 · PNG"],
    ["BRAWLZERK_store_header_920x430.png", "920 × 430 · PNG"],
    ["BRAWLZERK_store_small_462x174.png", "462 × 174 · PNG"],
    ["BRAWLZERK_store_vertical_748x896.png", "748 × 896 · PNG"],
    ["BRAWLZERK_library_logo_1280x375_transparent.png", "1280 × 375 · PNG"]
  ];

  const copy = window.BRAWLZERK_PRESSKIT_RUNTIME_COPY;

  const section = document.createElement("section");
  section.className = "section press-brand-assets";
  section.id = "brand-assets";
  section.setAttribute("aria-labelledby", "brand-assets-title");
  section.innerHTML = `
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow" data-brand-eyebrow></p>
          <h2 class="section-title" id="brand-assets-title" data-brand-title></h2>
        </div>
        <p class="section-intro" data-brand-intro></p>
      </div>
      <div class="press-brand-carousel" data-brand-carousel role="region" aria-roledescription="carousel" tabindex="0">
        <div class="press-brand-stage" aria-live="polite">
          ${assets.map(([file], index) => `
            <figure class="press-brand-slide${index === 0 ? " is-active" : ""}" data-brand-slide data-index="${index}"${index === 0 ? "" : " hidden"}>
              <img src="${mediaBase}${file}" loading="lazy" alt="">
            </figure>`).join("")}
          <button class="press-brand-arrow press-brand-arrow-prev" type="button" data-brand-prev>‹</button>
          <button class="press-brand-arrow press-brand-arrow-next" type="button" data-brand-next>›</button>
        </div>
        <div class="press-brand-meta">
          <div class="press-brand-meta-copy">
            <strong data-brand-current-title></strong>
            <span data-brand-dimensions></span>
          </div>
          <a class="press-brand-original" data-brand-original target="_blank" rel="noopener"></a>
        </div>
        <div class="press-brand-dots" data-brand-dots role="group">
          ${assets.map((_, index) => `<button class="press-brand-dot${index === 0 ? " is-active" : ""}" type="button" data-brand-dot="${index}"${index === 0 ? " aria-current=\"true\"" : ""}></button>`).join("")}
        </div>
      </div>
    </div>`;
  hostSection.insertAdjacentElement("afterend", section);

  const carousel = section.querySelector("[data-brand-carousel]");
  const slides = Array.from(section.querySelectorAll("[data-brand-slide]"));
  const dots = Array.from(section.querySelectorAll("[data-brand-dot]"));
  const currentTitle = section.querySelector("[data-brand-current-title]");
  const dimensions = section.querySelector("[data-brand-dimensions]");
  const original = section.querySelector("[data-brand-original]");
  let currentIndex = 0;

  const locale = () => {
    const language = document.documentElement.lang;
    if (copy[language]) return language;
    const baseLocale = language.slice(0, 2).toLowerCase();
    return copy[baseLocale] ? baseLocale : "en";
  };

  const updateCopy = () => {
    const localeCopy = copy[locale()];
    const text = localeCopy.brandAssets;
    section.querySelector("[data-brand-eyebrow]").textContent = text.eyebrow;
    section.querySelector("[data-brand-title]").innerHTML = text.title;
    section.querySelector("[data-brand-intro]").innerHTML = text.intro;
    carousel.setAttribute("aria-label", text.carousel);
    section.querySelector("[data-brand-prev]").setAttribute("aria-label", text.previous);
    section.querySelector("[data-brand-next]").setAttribute("aria-label", text.next);
    section.querySelector("[data-brand-dots]").setAttribute("aria-label", text.picker);
    slides.forEach((slide, index) => {
      slide.querySelector("img").alt = text.items[index][1];
      dots[index].setAttribute("aria-label", `${text.items[index][0]} ${localeCopy.view}`);
    });
    currentTitle.textContent = text.items[currentIndex][0];
    original.textContent = text.original;
  };

  const showAsset = (requestedIndex) => {
    currentIndex = (requestedIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const active = index === currentIndex;
      slide.hidden = !active;
      slide.classList.toggle("is-active", active);
      dots[index].classList.toggle("is-active", active);
      if (active) {
        dots[index].setAttribute("aria-current", "true");
      } else {
        dots[index].removeAttribute("aria-current");
      }
    });
    currentTitle.textContent = copy[locale()].brandAssets.items[currentIndex][0];
    dimensions.textContent = assets[currentIndex][1];
    original.href = `${mediaBase}${assets[currentIndex][0]}`;
  };

  section.querySelector("[data-brand-prev]").addEventListener("click", () => showAsset(currentIndex - 1));
  section.querySelector("[data-brand-next]").addEventListener("click", () => showAsset(currentIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => showAsset(index)));
  carousel.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    event.preventDefault();
    showAsset(currentIndex + (event.key === "ArrowRight" ? 1 : -1));
  });

  new MutationObserver(updateCopy).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
  updateCopy();
  showAsset(0);
})();
