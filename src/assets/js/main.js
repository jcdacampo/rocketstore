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
    autoplay:true,
    dots: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
  });

  /**
   * Carousel marcas
   */
  $('.marcas').owlCarousel({
    items: 4,
    loop: true,
    autoplay:true,
    dots: false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 2
      },
      340:{
        items: 3
      },
      440:{
        items: 4
      }
    }
  });

  /**
   * Seleção de tendencias
   * (da pra simplificar com o vue)
   */
   //Ao clicar no botao + vistos
  $('.tendencias_botoes_vistos').click(function () {
    $('.tendencias_botoes_vendidos').removeClass('selected');
    $('.tendencias_botoes_vistos').addClass('selected');
    $('.tendencias_box_vistos').removeClass('is-hidden');
    $('.tendencias_box_vendidos').addClass('is-hidden');
  });
  //Ao clicar no botao + vendidos
   $('.tendencias_botoes_vendidos').click(function () {
    $('.tendencias_botoes_vistos').removeClass('selected');
    $('.tendencias_botoes_vendidos').addClass('selected');
    $('.tendencias_box_vendidos').removeClass('is-hidden');
    $('.tendencias_box_vistos').addClass('is-hidden');
  });

  /**
   * Zoom imagem produto
   */
  $("#zoom_image").elevateZoom();
});

