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
      <div class="column is-6 produto_imagem">
        <div class="columns">
          <div class="column is-3 produto_imagem_miniaturas">
            <img class="imagem miniatura active" src="/static/images/produto01.jpg">
            <img class="imagem miniatura" src="/static/images/produto02.jpg">
            <img class="imagem miniatura" src="/static/images/produto03.png">
          </div>
          <div class="column produto_imagem_principal has-text-centered">
            <img class="imagem principal" id="zoom_image" src="/static/images/produto01.jpg" data-zoom-image="/static/images/produto01.jpg">
            <div class="produto_imagem_principal_dots">
              <i class="fas fa-circle active"></i>
              <i class="fas fa-circle"></i>
              <i class="fas fa-circle"></i>
            </div>
            <button class="button"><i class="fas fa-heart"></i>Adicionar aos favoritos</button>
            <button class="button"><i class="fas fa-bell"></i> Alerta de preço</button>
            <button class="button"><i class="fas fa-exchange-alt"></i>Comparar</button>
          </div>
        </div>
      </div>
      <div class="column is-6 produto_desc">
        <div class="produto_desc_titulo is-flex">
          <h1>iPhone X 256gb Silver</h1>
          <div class="produto_desc_titulo_avaliacao">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>
        <hr>
        <div class="produto_desc_preco">
          <div class="linha_um is-flex is-space-between">
            <div class="produto_desc_preco_antigo">
              <strike>R$ 5999,00</strike>
            </div>
            <div class="produto_desc_preco_porcentagem">
              <span>-17%</span>
            </div>
          </div>
          <div class="linha_dois">
            <div class="produto_desc_preco_atual_boleto">
              <i class="fas fa-barcode"></i>
              <span>R$ 4999,00</span> á vista no boleto
            </div>
          </div>
          <div class="linha_tres">
            <div class="produto_desc_preco_atual_cartao_prazo">
              <i class="fas fa-credit-card"></i>
              <span>R$ 5290,00</span> em até 5x de <b>R$ 1058,00</b> sem juros
            </div>
            ou
            <div class="produto_desc_preco_atual_cartao_prazo_uma is-flex is-space-between">
              <div>
                <i class="fas fa-credit-card"></i>
                <span>R$ 5050,00</span> em <b>1x</b> no cartão
              </div>
              <a>Ver parcelas</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="produto_desc_acoes is-flex is-space-between">
          <div class="is-flex">
            <div class="produto_desc_acoes_cor">
            Cor
            <div></div>
          </div>
            <div class="produto_desc_acoes_qtd">
            Quantidade
            <div class="seletor_quantidade">
              <div class="field">
                <div class="control">
                  <div class="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <div class="produto_desc_acoes_comprar">
            <button class="button">
              <i class="fas fa-shopping-cart"></i>
              Comprar
            </button>
          </div>
            <div class="produto_desc_acoes_comprar_clique">
              <button class="button">Compre com 1 clique!</button>
            </div>
          </div>
          <div class="produto_desc_acoes_frete">
              <span>Calcular frete</span>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="email" placeholder="CEP">
                <span class="icon is-left">
                  <i class="fas fa-truck"></i>
                </span>
                <span class="icon is-right">
                  <i class="fas fa-check"></i>
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="kit columns">
      <h1>Aproveite e leve junto!</h1>
    </div>
    <section class="accordions">
      <article class="accordion">
        <div class="accordion-header toggle">
          <p>Descrição</p>
          <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </div>
      </article>
      <article class="accordion">
        <div class="accordion-header">
          <p>Especificações</p>
          <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </div>
      </article>
      <article class="accordion">
        <div class="accordion-header">
          <p>Quem comprou, compra também</p>
          <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </div>
      </article>
      <article class="accordion">
        <div class="accordion-header">
          <p>O que vem na caixa?</p>
          <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </div>
      </article>
      <article class="accordion">
        <div class="accordion-header">
          <p>Comentários e avaliações</p>
          <button class="toggle" aria-label="toggle"></button>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
          </div>
        </div>
      </article>
    </section>

  </div>
</template>
<script>
  export default {
    name: "Produto"
  }
</script>

<style scoped>

</style>