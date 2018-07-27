<style>
  /*CSS PRINCIPAL*/
  @import "../dist/css/main.min.css";
  /*Bulma*/
  @import "../dist/css/vendor/Bulma_v0.7.1/bulma.min.css";

</style>
<template>
  <div id="app">
    <div class="">
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

    <div class="container-fluid header">
      <div class="columns header_acoes">

      </div>
      <div class="columns header_menu">

      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  // import Main from '../dist/js/main.min.js'

  export default {
    name: 'App'
  }
</script>

