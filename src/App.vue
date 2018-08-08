<style>
  /*CSS PRINCIPAL*/
  @import "../dist/css/main.min.css";
</style>
<template>
  <div id="app">
    <div class="hero header">
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
          <router-link to="/"><img class="image" src="../src/assets/images/logo.png"></router-link>
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
      <div class="columns header_menu is-hidden-mobile is-vertical-center">
        <nav class="navbar" role="navigation" aria-label="dropdown navigation">
          <div class="navbar-menu is-vertical-center">
            <div class="navbar">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Informática
                </a>
                <div class="navbar-dropdown">
                  <router-link class="navbar-item" to="/computadores">Computadores</router-link>
                  <router-link class="navbar-item" to="/notebooks">Notebooks</router-link>
                </div>
              </div>
            </div>
            <div class="navbar">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Games
                </a>
                <div class="navbar-dropdown is-hoverable">
                  <router-link class="navbar-item" to="/consoles">Consoles</router-link>
                  <router-link class="navbar-item" to="/jogos">Jogos</router-link>
                </div>
              </div>
            </div>
            <div class="navbar">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Periféricos
                </a>
                <div class="navbar-dropdown is-hoverable">
                  <router-link class="navbar-item" to="/mouse">Mouse</router-link>
                  <router-link class="navbar-item" to="/teclado">Teclado</router-link>
                  <router-link class="navbar-item" to="/fones">Headsets</router-link>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>
      <div class="columns owl-carousel menu_mobile is-flex is-vertical-center is-hidden-tablet">
        <div class="column menu_mobile_computador has-text-centered">
          <i class="fas fa-desktop"></i>
          <p>Computadores</p>
        </div>
        <div class="column menu_mobile_notebook has-text-centered">
          <i class="fas fa-laptop"></i>
          <p>Notebooks</p>
        </div>
        <div class="column menu_mobile_console has-text-centered">
          <i class="fas fa-gamepad"></i>
          <p>Consoles</p>
        </div>
        <div class="column menu_mobile_jogo has-text-centered">
          <i class="fas fa-rocket"></i>
          <p>Jogos</p>
        </div>
        <div class="column menu_mobile_mouse has-text-centered">
          <i class="fas fa-mouse-pointer"></i>
          <p>Mouse</p>
        </div>
        <div class="column menu_mobile_teclado has-text-centered">
          <i class="fas fa-keyboard"></i>
          <p>Teclados</p>
        </div>
        <div class="column menu_mobile_fone has-text-centered">
          <i class="fas fa-headphones"></i>
          <p>Headsets</p>
        </div>
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

