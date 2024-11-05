// Window Load screen

$(window).on("load", function () {
  // Loading Page
  $(".spinner")
    .delay(500)
    .fadeOut(400, function () {
      document.documentElement.style.setProperty(
        "--backRightIn",
        "translateX(100%)"
      );
      document.documentElement.style.setProperty(
        "--backLefttIn",
        "translateX(-100%)"
      );
      $(".loader").fadeOut(300);
    });
  $("body").css("overflow-y", "auto");

  // $(".sliderHome img, .main-body-slider").height($(document).height());

  // Animation Page
  AOS.init();
});

$(document).ready(function () {
  // $(".fix-up").hide();

  // Scroll Fix Header
  $(window).scroll(function () {
    if ($(window).width() > 767) {
    }
    if ($(this).scrollTop() > 30) {
      $(".fix-up").show();
    } else {
      $(".fix-up").hide();
    }
  });

  // Click Add class Link
  $(document).on("click", "nav ul li", function (e) {
    e.preventDefault();
    $(this).addClass("active").siblings().removeClass("active");
  });

  // Click Scroll Up Page
  $(document).on("click", ".fix-up", function () {
    $(window).scrollTop(0);
  });

  // Show More List
  $(document).on("click", ".show-more-list", function () {
    $(".list-services").toggleClass("!h-auto");
    $(".fa-angles-down").toggleClass("fa-angles-up");
    if ($(".fa-angles-down").hasClass("fa-angles-up")) {
      console.log("up");
    } else {
      const targetElement = $("#Services");
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top - 70,
        },
        50
      );
    }
  });

  // Scroll For Section
  $(document).on(
    "click",
    "nav ul li a, .list-footer li a, .info-tab a",
    function (e) {
      $("html, body").animate(
        {
          scrollTop: $("#" + $(this).data("value")).offset().top - 70,
        },
        50
      );
      e.preventDefault();
      if ($(window).width() < 990) {
        $(".handle").toggleClass("closed");
        $(".list-head").toggleClass("back");
        $(".overlay").toggleClass("back");
      }
    }
  );

  // Click Open Nav Mobile
  $(document).on("click", ".click-nav", function () {
    $(".handle").toggleClass("closed");
    $(".list-head").toggleClass("back");
    $(".overlay").toggleClass("back");
    $("body").toggleClass("!overflow-hidden");
  });

  // Slider Home
  $(".sliderHome").owlCarousel({
    loop: true,
    margin: 1000,
    center: false,
    autoplay: true,
    touchDrag: false,
    mouseDrag: false,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: true,
    nav: false,
    navText: [
      '<i class="icon-arrow-left"></i>',
      '<i class="icon-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // Slider Partners
  $("#sliderPartners").owlCarousel({
    loop: true,
    margin: 0,
    center: false,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: false,
    nav: false,
    navText: [
      '<i class="icon-arrow-left"></i>',
      '<i class="icon-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  // Slider Customer
  $("#sliderCustomer").owlCarousel({
    loop: true,
    margin: 0,
    center: false,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: false,
    nav: false,
    navText: [
      '<i class="icon-arrow-left"></i>',
      '<i class="icon-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // Slider Projects
  $("#sliderProjects").owlCarousel({
    loop: true,
    margin: 0,
    center: false,
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    animateOut: "fadeOut",
    dragEndSpeed: 7000,
    pagination: false,
    nav: false,
    navText: [
      '<i class="icon-arrow-left"></i>',
      '<i class="icon-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});
