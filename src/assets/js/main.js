$(document).ready(function () {
  /**
   * Carousel principal
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
});
