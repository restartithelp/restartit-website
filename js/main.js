/* RestartIT — small UX helpers (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var nav = document.querySelector("[data-nav]");
  if (nav) {
    var toggle = nav.querySelector(".nav__toggle");
    var setOpen = function (open) {
      nav.setAttribute("data-open", open ? "true" : "false");
      if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    };
    if (toggle) {
      toggle.addEventListener("click", function () {
        setOpen(nav.getAttribute("data-open") !== "true");
      });
    }
    // Close when a link is tapped or on resize/escape
    nav.querySelectorAll(".nav__menu a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1000) setOpen(false);
    });
  }

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveals.forEach(function (el) { el.classList.add("is-visible"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---- Dynamic footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
