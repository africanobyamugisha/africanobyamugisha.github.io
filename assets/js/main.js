/***************************************************
==================== JS INDEX ======================
****************************************************


01. Hero Slider One
02. Team Slider One
03. service Slider One
04. Counter Js
05. Testimonial Slider One
06. Testimonial Slider two
07. magnificPopup video view
08. Sticky Header-1 Js
09. Sticky Header-2 Js
10. Sidebar Js
11. PreLoader Js
12. Mobile Menu Js
13. Body overlay Js
14. Wow Js
15. Sidebar Js
16. Data CSS Js

****************************************************/

(function ($) {
  "use strict";

  var windowOn = $(window);

  //! 01. Hero Slider One

  var heroSliderOne = new Swiper(".hero-slider-init-one", {
    spaceBetween: 0,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 6000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //! 02. Team Slider One
  if (jQuery(".team-one").length > 0) {
    var TeamOne = new Swiper(".team-one", {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 2,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".team-version-one-pagination",
        type: "bullets",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          // pagination: false,
          slidesPerGroup: 1,
        },
        576: {
          slidesPerView: 2,
          // pagination: false,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });
  }
  //! 03. service Slider One
  if (jQuery(".service-one").length > 0) {
    var serviceOne = new Swiper(".service-one", {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".team-version-one-pagination",
        type: "bullets",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: false,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        500: {
          slidesPerView: 1,
          pagination: false,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }

  //! 04. Counter Js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //! 05. Testimonial Slider One
  if (jQuery(".testimonial-one").length > 0) {
    var testimonialOne = new Swiper(".testimonial-one", {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        nextEl: ".testimonialOne-button-next",
        prevEl: ".testimonialOne-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: false,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        500: {
          slidesPerView: 1,
          pagination: false,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    });
  }
  //! 06. Testimonial Slider two
  if (jQuery(".testimonial-two").length > 0) {
    var testimonialOne = new Swiper(".testimonial-two", {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        nextEl: ".testimonialOne-button-next",
        prevEl: ".testimonialOne-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: false,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        500: {
          slidesPerView: 1,
          pagination: false,
          spaceBetween: 20,
          slidesPerGroup: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }

  //! 07. magnificPopup video view
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  //! 08. Sticky Header-1 Js
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky").removeClass("header__sticky");
    } else {
      $("#header-sticky").addClass("header__sticky");
    }
  });

  //! 09. Sticky Header-2 Js
  windowOn.on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
      $("#header-sticky-2").removeClass("header__sticky");
    } else {
      $("#header-sticky-2").addClass("header__sticky");
    }
  });

  //! 10. Sidebar Js
  $(".sidebar-toggle").on("click", function () {
    $(".sidebar-right").addClass("sidebar-opened");
  });

  $(".sidebar-close").on("click", function () {
    $(".sidebar-right").removeClass("sidebar-opened");
  });

  //! 11. PreLoader Js
  windowOn.on("load", function () {
    $(".preloader").fadeOut(1000);
  });

  //! 12. Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  //! 13. Body overlay Js
  $(".body-overlay").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  //! 14. Wow Js
  new WOW().init();

  //! 15. Sidebar Js
  $(".sidebar-toggle-btn").on("click", function () {
    $(".sidebar__area").addClass("sidebar-opened");
    $(".body-overlay").addClass("opened");
  });
  $(".sidebar__close-btn").on("click", function () {
    $(".sidebar__area").removeClass("sidebar-opened");
    $(".body-overlay").removeClass("opened");
  });

  //! 16. Data CSS Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });
})(jQuery);
