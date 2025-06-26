$(document).ready(function () {
  // services slider
  const servicesSwiper = new Swiper(".services-section .swiper", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 2.9,
        centeredSlides: false,
      },
    },
  });

  const partnersSwiper = new Swiper(".partners-section .swiper", {
    loop: true,
    slidesPerView: 1.9,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 5,
        centeredSlides: false,
      },
    },
  });

  $("#mobile_menu_btn").on("click", function () {
    console.log("Mobile menu button clicked");
    $("#mobile_menu").toggleClass("open");
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#mobile_menu, #mobile_menu_btn").length) {
      $("#mobile_menu").removeClass("open");
    }
  });
});
