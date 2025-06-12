$(document).ready(function () {
  // services slider
  const servicesSwiper = new Swiper(".services-section .swiper", {
    loop: true,
    // centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
  });

  // services slider
  const partnersSwiper = new Swiper(".partners-section .swiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
  });
});
