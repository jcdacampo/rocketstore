<style>
  /*CSS PRINCIPAL*/
  @import "../dist/css/main.min.css";
  /*Bulma*/
  @import "../dist/css/vendor/Bulma_v0.7.1/bulma.min.css";

</style>
<template>
  <div id="app">
    <div class="hero is-fullhd header">
      <div class="header_infos">
        <div class="header_infos_social">
            <a class="is-pulled-left facebook"><i class="fab fa-facebook-f has-text-centered"></i></a>
            <a class="is-pulled-left twitter"><i class="fab fa-twitter has-text-centered"></i></a>
            <a class="is-pulled-left instagram"><i class="fab fa-instagram has-text-centered"></i></a>
            <a class="is-pulled-left youtube"><i class="fab fa-youtube has-text-centered"></i></a>
        </div>
        <div class="header_infos_contato is-pulled-right">
          <i class="fa fa-phone"></i>
          <span class="has-text-weight-semibold">Converse conosco: (49) 3323-6978</span>
        </div>
      </div>
      <div class="columns header_header">
        <div class="column header_logo is-one-quarter">
          <img class="image" src="../src/assets/images/logo.png">
        </div>
        <div class="column header_pesquisa is-half">

        </div>
        <div class="column header_acoes is-one-quarter">

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
          <li><router-link to="/minha-conta">Minha conta</router-link></li>
          <li><router-link to="/carrinho">Carrinho</router-link></li>
          <li><router-link to="/checkout/">Checkout</router-link></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import {ClassFuncoes} from '../dist/js/class/ClassFuncoes.min';
  let funcoes = new ClassFuncoes;

  export default {
    name: 'App'
  }
</script>

