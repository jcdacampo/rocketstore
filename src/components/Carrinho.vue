<template>
  <div class="carrinho container is-fullhd">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li class="is-active"><a href="#" aria-current="page">Meu Carrinho</a></li>
      </ul>
    </nav>
    <div class="meu_carrinho">
      <h1>Meu carrinho de compras</h1>
      <div class="carrinho_tabela columns">
        <div class="column is-4 tabela_produto">
          <div class="tabela_produto_titulo has-text-centered"><b>Produto</b></div>
          <div class="tabela_produto_conteudo">
            <img class="image" src="/static/images/produto01.jpg">
            <p>iPhone X 256gb Silver</p>
          </div>
        </div>
        <div class="column tabela_quantidade">
          <div class="tabela_quantidade_titulo has-text-centered"><b>Quantidade</b></div>
          <div class="tabela_quantidade_conteudo">
            <div>
              <i class="fas fa-minus"></i>
              <p>2</p>
              <i class="fas fa-plus"></i>
            </div>
            <div>
              <i class="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
        <div class="column tabela_valor-unitario">
          <div class="tabela_valor-unitario_titulo has-text-centered"><b>Valor Unit.</b></div>
          <div class="tabela_valor-unitario_conteudo"><p>R$ 4559,00</p></div>
        </div>
        <div class="column tabela_valor-total">
          <div class="tabela_valor-total_titulo has-text-centered"><b>Valor Total.</b></div>
          <div class="tabela_valor-total_conteudo"><p>R$ 9118,00</p></div>
        </div>
      </div>
      <hr>
      <div class="carrinho_segundo columns">
        <div class="column is-4-tablet is-offset-0-tablet is-3-desktop is-offset-3-desktop carrinho_garantia has-text-right">
          <p>Garantia estendida? </p>
          <div class="field">
            <div class="control">
              <div class="select is-small">
                <select>
                  <option>Quanto tempo?</option>
                  <option>3 meses</option>
                  <option>6 meses</option>
                  <option>1 ano</option>
                  <option>Não quero</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4-tablet is-3-desktop carrinho_frete has-text-right">
          <p>Cupom de desconto: </p>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Número do cupom">
              <span class="icon is-small is-left">
              <i class="fas fa-ticket-alt"></i>
              </span>
            </p>
          </div>
        </div>
        <div class="column is-4-tablet is-3-desktop carrinho_cupom has-text-right">
          <p>Calcule o frete: </p>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Digite o CEP">
              <span class="icon is-small is-left">
              <i class="fas fa-truck"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr>
      <div class="carrinho_tabela columns is-multiline">
        <div class="column is-3-desktop is-offset-9-desktop is-4-tablet is-offset-8-tablet carrinho_total has-text-right">
          <p>Subtotal: R$ <span>9118,00</span></p>
          <p>Frete: R$ <span>23,30</span></p>
          <p><b>TOTAL</b>: R$ <span class="total">9141.30</span></p>
          <p class="extra primeiro">Pague R$ <span class="pequeno">8999,00</span> no boleto</p>
          <p class="extra">ou R$ <span class="pequeno">9100,00</span> em 1x no cartão</p>
        </div>
        <div class="column is-12-desktop carrinho_acoes has-text-right">
          <button class="button continuar">Continuar comprando</button>
          <button class="button fechar">Fechar pedido</button>
        </div>
      </div>
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