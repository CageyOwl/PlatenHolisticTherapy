const mobRefs = {
  mobNav: document.querySelector(".nav-mobile"),
  mobNavLinksList: document.querySelector(".mobile__links"),
  openBtn: document.querySelector(".ico-mobile-open"),
  closeBtn: document.querySelector(".ico-mobile-close"),
};

mobRefs.openBtn.addEventListener("click", () => {
  mobRefs.mobNav.classList.toggle("hidden");
});
mobRefs.closeBtn.addEventListener("click", () => {
  mobRefs.mobNav.classList.toggle("hidden");
});

mobRefs.mobNavLinksList.addEventListener("click", event => {
    if (!event.target.classList.contains("section-link")) return;
    mobRefs.mobNav.classList.toggle("hidden");
});
