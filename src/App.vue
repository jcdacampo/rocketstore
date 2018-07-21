<style>
  @import "../dist/css/main.min.css";
</style>

<template>
  <div id="app">
    <div class="">
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/celulares">Celulares</router-link></li>

      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

