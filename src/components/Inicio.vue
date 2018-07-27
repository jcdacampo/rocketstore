<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Ínicio</h1>
      <i class="fa fa-camera-retro"></i>
    </div>
  </section>

</template>

<script>
  import {Main} from '../assets/js/class/Main';

  var main = new Main();

  main.teste('Inicio');

  export default {
    name: 'Inicio'
  }
</script>
