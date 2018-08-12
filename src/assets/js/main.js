$(document).ready(function () {
  /**
   * Carousel menu mobile
   */
  $('.menu_mobile').owlCarousel({
    responsiveClass: true,
    responsive: {
      0:{
        items: 3
      },
      400:{
        items: 4
      },
      500:{
        items: 5
      },
      600:{
        items: 6
      },
      700:{
        items: 7
      }
    }
  });

  /**
   * Carousel vitrine
   */
  $('.slider_carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoPlay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });
});
