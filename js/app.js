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
