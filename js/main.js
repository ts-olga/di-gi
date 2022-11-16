$(".owl-carousel1").owlCarousel({
  loop: true,
  dotsContainer: ".circles",
  navContainer: ".arrows",
  smartSpeed: 1200,
  responsive: {
    0: {
      items: 0,
      nav: false,
    },
    640: {
      items: 1,
      nav: true,
    },
  },
});

$(".owl-carousel2").owlCarousel({
  items: 1,
  loop: true,
  dotsContainer: ".circles2",
  nav: false,
  smartSpeed: 1200,
  autoplay: true,
  autoplayTimeout: 5000,
});
