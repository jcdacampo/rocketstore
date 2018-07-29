<style>
  /*CSS PRINCIPAL*/
  @import "../dist/css/main.min.css";
  /*Bulma*/
  @import "../dist/css/vendor/Bulma_v0.7.1/bulma.min.css";

</style>
<template>
  <div id="app">
    <div class="hero container is-fullhd header">
      <div class="header_infos">
        <div class="header_infos_social">
            <a class="is-pulled-left facebook"><i class="fab fa-facebook-f has-text-centered"></i></a>
            <a class="is-pulled-left twitter"><i class="fab fa-twitter has-text-centered"></i></a>
            <a class="is-pulled-left instagram"><i class="fab fa-instagram has-text-centered"></i></a>
            <a class="is-pulled-left youtube"><i class="fab fa-youtube has-text-centered"></i></a>
        </div>
        <div class="header_infos_contato is-pulled-right">
          <a class="tooltip is-tooltip-left is-hidden-desktop" data-tooltip="Precisa de ajuda?" href="">
            <i class="fas fa-question-circle"></i>
          </a>
          <button class="tooltip is-tooltip-left" data-tooltip="(49) 3323-6978"><i class="fa fa-phone"></i></button>
          <span class="has-text-weight-semibold">Converse conosco: (49) 3323-6978</span>
        </div>
      </div>
      <div class="columns header_header">
        <div class="column header_logo is-one-fifth is-flex is-vertical-center">
          <img class="image" src="../src/assets/images/logo.png">
        </div>
        <div class="column header_pesquisa hero">
          <form class="search-form">
            <input value="" placeholder="Esta procurando algo?" class="search-input">
            <button type="submit" class="search-button">
              <i class="fas fa-search"></i>
            </button>
            <div class="search-option">
              <div>
                <input name="type" type="radio" value="type-informatica" id="type-informatica">
                <label for="type-informatica">
                  <i class="fas fa-desktop"></i>
                  <span>Informática</span>
                </label>
              </div>
              <div>
                <input name="type" type="radio" value="type-celulares" id="type-celulares">
                <label for="type-celulares">
                  <i class="fas fa-mobile-alt"></i>
                  <span>Celulares</span>
                </label>
              </div>
              <div>
                <input name="type" type="radio" value="type-games" id="type-games">
                <label for="type-games">
                  <i class="fas fa-gamepad"></i>
                  <span>Games</span>
                </label>
              </div>
              <div>
                <input name="type" type="radio" value="type-perifericos" id="type-perifericos" checked="">
                <label for="type-perifericos">
                  <i class="fas fa-headphones"></i>
                  <span>Periféricos</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div class="column header_acoes is-one-quarter is-flex is-vertical-center">
          <div class="header_acoes_icones is-flex is-vertical-center">
            <div class="header_acoes_saudacao is-paddingless">
              <p>Boa tarde,</p>
              <p class="has-text-weight-bold">Jean</p>
            </div>
            <div class="header_acoes_icones_usuario">
              <router-link class="tooltip is-tooltip-bottom" data-tooltip="Minha conta" to="/minha-conta">
                <i class="fas fa-user"></i>
              </router-link>
            </div>
            <div class="header_acoes_icones_favs">
              <a class="tooltip is-tooltip-bottom" data-tooltip="Favoritos" href="">
                <i class="fas fa-heart"></i>
              </a>
            </div>
            <div class="header_acoes_icones_carrinho">
              <router-link to="/carrinho">
                <i class="badge fas fa-shopping-cart" data-badge="0"></i>
              </router-link>
            </div>
            <div class="header_acoes_total">
              <router-link to="/carrinho">
                <p>R$</p>
                <p class="has-text-weight-bold">0,00</p>
              </router-link>
            </div>
          </div>
          <div class="header_acoes_ajuda is-hidden-touch">
            <a class="tooltip is-tooltip-left" data-tooltip="Precisa de ajuda?" href="">
              <i class="fas fa-question-circle"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="columns header_menu">
        <ul>
          <li><router-link to="/">Inicio</router-link></li>
          <li><router-link to="/informatica">Informática</router-link></li>
          <li><router-link to="/computadores">Computadores</router-link></li>
          <li><router-link to="/notebooks">Notebooks</router-link></li>
          <li><router-link to="/games">Games</router-link></li>
          <li><router-link to="/consoles">Consoles</router-link></li>
          <li><router-link to="/jogos">Jogos</router-link></li>
          <li><router-link to="/perifericos">Perféricos</router-link></li>
          <li><router-link to="/mouse">Mouse</router-link></li>
          <li><router-link to="/teclado">Teclado</router-link></li>
          <li><router-link to="/fones">Fones</router-link></li>
          <li><router-link to="/entrar">Entrar</router-link></li>
          <li><router-link to="/registrar">Registrar</router-link></li>
          <li><router-link to="/checkout/">Checkout</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

