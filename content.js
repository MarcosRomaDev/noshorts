function hideShortsGuideEntry() {
  const guideEntries = document.querySelectorAll("ytd-guide-entry-renderer");

  guideEntries.forEach((entry) => {
    if (entry.textContent.includes("Shorts")) {
      entry.style.setProperty("display", "none", "important");
    }
  });
}

hideShortsGuideEntry();

const observer = new MutationObserver(hideShortsGuideEntry);
observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
