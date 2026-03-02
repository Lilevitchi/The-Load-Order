/* =====================================================
   GLOBAL SCROLL PROGRESS BAR
===================================================== */
(function () {
  const progressBar = document.querySelector(".progress-bar");
  if (!progressBar) return;

  let ticking = false;

  const updateProgressBar = () => {
    const winScroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

    progressBar.style.width = scrolled + "%";
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgressBar();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateProgressBar();
})();
