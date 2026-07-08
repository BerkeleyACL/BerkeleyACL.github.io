// Accessible mobile navigation toggle.
// The nav is visible by default (no-JS friendly); JS only adds the
// collapse/expand behavior on small screens.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  var mq = window.matchMedia("(max-width: 47rem)");

  function applyState(expanded) {
    toggle.setAttribute("aria-expanded", String(expanded));
    nav.hidden = !expanded;
  }

  function syncToViewport() {
    if (mq.matches) {
      applyState(false);
    } else {
      nav.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }
  }

  toggle.addEventListener("click", function () {
    var expanded = toggle.getAttribute("aria-expanded") === "true";
    applyState(!expanded);
  });

  mq.addEventListener("change", syncToViewport);
  syncToViewport();
})();

// Respect reduced-motion: stop autoplaying videos and show their poster image.
(function () {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("video[autoplay]").forEach(function (v) {
    v.removeAttribute("autoplay");
    v.pause();
    try { v.currentTime = 0; v.load(); } catch (e) { /* poster fallback */ }
  });
})();

// Lightweight depth cue for project diagrams.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll("[data-project-tilt]").forEach(function (el) {
    el.addEventListener("pointermove", function (event) {
      var rect = el.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--project-tilt-x", (x * 4).toFixed(2) + "deg");
      el.style.setProperty("--project-tilt-y", (y * -3).toFixed(2) + "deg");
    });

    el.addEventListener("pointerleave", function () {
      el.style.setProperty("--project-tilt-x", "0deg");
      el.style.setProperty("--project-tilt-y", "0deg");
    });
  });
})();
