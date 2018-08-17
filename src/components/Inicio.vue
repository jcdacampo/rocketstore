<template>
  <div class="conteudo">
    <section class="slider">
      <div class="container is-fluid is-marginless">
        <div class="owl-carousel slider_carousel">
          <div>
            <img class="image is-12" src="http://via.placeholder.com/1350x350">
          </div>
          <div>
            <img class="image is-12" src="http://via.placeholder.com/1350x350">
          </div>
          <div>
            <img class="image is-12" src="http://via.placeholder.com/1350x350">
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <section class="columns is-multiline is-mobile descontos">
        <div class="column is-half-mobile is-paddingless desconto_primeiro">
          <img src="http://via.placeholder.com/200x140">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 10%</span>
          </div>
        </div>
        <div class="column is-half-mobile is-paddingless desconto_segundo">
          <img src="http://via.placeholder.com/200x140">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 30%</span>
          </div>
        </div>
        <div class="column is-full-mobile is-paddingless desconto_terceiro">
          <img src="http://via.placeholder.com/200x140">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 20%</span>
          </div>
        </div>
        <div class="column is-full-mobile is-paddingless desconto_quarto">
          <img src="http://via.placeholder.com/200x140">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 50%</span>
          </div>
        </div>
      </section>
      <section class="columns is-multiline promocoes is-vertical-center">
        <div class="column promocoes_desc is-2-desktop is-12-mobile has-text-centered is-vertical-center">
          <span><b>Promoções</b> do dia </span>
        </div>
        <div class="column promocoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
        <div class="column promocoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
        <div class="column promocoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
      </section>
      <section class="columns is-multiline is-mobile produtos_ate">
        <div class="column has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 59,90</b>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 99,90</b>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 159,90</b>
          </div>
        </div>
        <div class="column has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 259,90</b>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Inicio'
  }
</script>
