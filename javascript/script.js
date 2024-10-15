// Registering ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Scroll-based background color changes
window.addEventListener("load", function () {
  const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
  scrollColorElems.forEach((colorSection, i) => {
    const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
    const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

    ScrollTrigger.create({
      trigger: colorSection,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () =>
        gsap.to("body", {
          backgroundColor: colorSection.dataset.bgcolor,
          color: colorSection.dataset.textcolor,
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to("body", {
          backgroundColor: prevBg,
          color: prevText,
          overwrite: "auto",
        }),
    });
  });
});

// Reveal sections on scroll
gsap.utils.toArray(".gs-reveal").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    onEnter: function () {
      gsap.to(elem, { duration: 0.6, opacity: 1, y: 0 });
    },
    onLeaveBack: function () {
      gsap.to(elem, { duration: 0.6, opacity: 0, y: 30 });
    },
  });
});
