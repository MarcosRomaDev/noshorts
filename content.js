function hideShortsGuideEntry() {
  const guideEntries = document.querySelectorAll("ytd-guide-entry-renderer");
  const searchGridShelves = document.querySelectorAll("grid-shelf-view-model");

  guideEntries.forEach((entry) => {
    if (entry.textContent.includes("Shorts")) {
      entry.style.setProperty("display", "none", "important");
    }
  });

  searchGridShelves.forEach((entry) => {
    if (entry.textContent.includes("shorts")) {
      entry.style.setProperty("display", "none", "important");
    }
  });
}

// Oculta las entradas y secciones de Shorts que ya existen en la página.
hideShortsGuideEntry();

// YouTube añade contenido dinámicamente porque funciona como una SPA.
const observer = new MutationObserver(hideShortsGuideEntry);

observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
