<template>
  <div class="carrinho container is-fullhd">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li class="is-active"><a href="#" aria-current="page">Meu Carrinho</a></li>
      </ul>
    </nav>
    <h1>Meu carrinho de compras</h1>

    <div class="carrinho_tabela columns">
      <div class="column is-4 tabela_produto">produto</div>
      <div class="column tabela_quantidade">quantidade</div>
      <div class="column tabela_valor-unitario">valor unit</div>
      <div class="column tabela_valor-total">valor total</div>
      <div class="column tabela_remover">remover</div>
    </div>

    <div class="carrinho_segundo columns">
      <div class="column carrinho_frete">frete</div>
      <div class="column carrinho_cupom">cupom</div>
    </div>

    <div class="carrinho_tabela columns is-multiline">
      <div class="column is-12 carrinho_total">total</div>
      <div class="column is-12 carrinho_acoes">botoes</div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Carrinho"
  }
</script>

<style scoped>

</style>