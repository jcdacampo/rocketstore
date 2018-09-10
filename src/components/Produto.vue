<template>
  <div class="container is-fullhd">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Smartphones</a></li>
        <li><a href="#">Apple</a></li>
        <li class="is-active"><a href="#" aria-current="page">iPhone X</a></li>
      </ul>
    </nav>
    <div class="produto columns">
      <div class="column is-5 produto_imagem">
        <div class="columns">
          <div class="column is-3 produto_imagem_miniaturas">
            <img class="imagem miniatura active" src="/static/images/produto01.jpg">
            <img class="imagem miniatura" src="/static/images/produto02.jpg">
            <img class="imagem miniatura" src="/static/images/produto03.png">
          </div>
          <div class="column produto_imagem_principal">
            <img class="imagem principal" id="zoom_image" src="/static/images/produto01.jpg" data-zoom-image="/static/images/produto01.jpg">
          </div>
        </div>
      </div>
      <div class="column is-7 produto_desc">
        desc
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Produto"
  }
</script>

<style scoped>

</style>