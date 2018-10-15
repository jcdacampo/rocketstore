<template>
  <div class="container is-fullhd notebooks">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li class="is-active"><a href="#" aria-current="page">Notebooks</a></li>
      </ul>
    </nav>
    <div class="columns categoria_notebook">
      <div class="column is-3 categoria_filtro">
        <div class="faixa-de-preco">
          <span><i class="fas fa-dollar-sign"></i> Faixa de preço</span>
          <label class="checkbox">
            <input type="checkbox">
            Até R$ 1500,00
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Entre R$ 1500,00 e R$ 2000,00
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Entre R$ 2000,00 e R$ 2500,00
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Superior a R$ 2500,00
          </label>
        </div>
        <div class="tamanho-tela">
          <span><i class="fas fa-desktop"></i> Tamanho da tela</span>
          <label class="checkbox">
            <input type="checkbox">
            Até 13,9"
          </label>
          <label class="checkbox">
            <input type="checkbox">
            De 14" a 15"
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Acima de 15"
          </label>
        </div>
        <div class="processador">
          <span><i class="fas fa-microchip"></i>Processador</span>
          <label class="checkbox">
            <input type="checkbox">
            Intel Core i3
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Intel Core i5
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Intel Core i7
          </label>
          <label class="checkbox">
            <input type="checkbox">
            AMD
          </label>
        </div>
        <div class="memoria">
          <span><i class="fas fa-microchip"></i>Memória</span>
          <label class="checkbox">
            <input type="checkbox">
            2GB
          </label>
          <label class="checkbox">
            <input type="checkbox">
            4GB
          </label>
          <label class="checkbox">
            <input type="checkbox">
            6GB
          </label>
          <label class="checkbox">
            <input type="checkbox">
            8GB
          </label>
          <label class="checkbox">
            <input type="checkbox">
            16GB
          </label>
        </div>
        <div class="marca">
          <span><i class="fas fa-laptop"></i>Marca</span>
          <label class="checkbox">
            <input type="checkbox">
            Acer
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Apple
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Dell
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Lenovo
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Asus
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Samsung
          </label>
          <label class="checkbox">
            <input type="checkbox">
            HP
          </label>
        </div>
        <div class="cor">
          <span><i class="fas fa-square"></i>Cor</span>
          <label class="checkbox">
            <input type="checkbox">
            Preto
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Cinza
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Prata
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Branco
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Vermelho
          </label>
        </div>
        <div class="tipo">
          <span><i class="fas fa-laptop"></i>Tipo</span>
          <label class="checkbox">
            <input type="checkbox">
            Notebook
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Ultrabook
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Macbook
          </label>
          <label class="checkbox">
            <input type="checkbox">
            Chromebook
          </label>
        </div>
      </div>
      <div class="column is-9 categoria_produtos">
        <div class="classificacao">
          <div class="produtos_encontrados">
            418 produtos encontrados
          </div>
          <div class="control">
            <div class="select">
              <select>
                <option>Mais populares</option>
                <option>Lançamentos</option>
                <option>Maior preço</option>
                <option>Menor preço</option>
                <option>Maiores descontos</option>
              </select>
            </div>
          </div>
          <div class="itens_pagina">
            <div class="control is-flex is-vertical-center">
              Mostrando
              <div class="select">
                <select>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                  <option>30</option>
                </select>
              </div>
              itens por página
            </div>
          </div>

          <div class="comparar">
            <button class="button">
              Comparar
            </button>
          </div>
        </div>
        <div class="produtos columns is-multiline is-mobile">
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook1.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook Dell 4GB</b></div>
              <p class="preco-antigo">de <strike>R$ 2350,00</strike> por</p>
              <p class="preco-real">R$ 1950,00</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook2.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook Dell i5 8GB</b></div>
              <p class="preco-antigo">de <strike>R$ 2999,00</strike> por</p>
              <p class="preco-real">R$ 2249,00</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook3.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook Acer Vermelho</b></div>
              <p class="preco-antigo">de <strike>R$ 2150,00</strike> por</p>
              <p class="preco-real">R$ 1775,00</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook4.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook Acer i7 16GB</b></div>
              <p class="preco-antigo">de <strike>R$ 3780,00</strike> por</p>
              <p class="preco-real">R$ 3333,50</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook5.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Macbook i5 8GB</b></div>
              <p class="preco-antigo">de <strike>R$ 4780,00</strike> por</p>
              <p class="preco-real">R$ 4200,50</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook6.jpg">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Macbook PRO</b></div>
              <p class="preco-antigo">de <strike>R$ 5780,00</strike> por</p>
              <p class="preco-real">R$ 5533,50</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook7.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook Samsung i3 4GB</b></div>
              <p class="preco-antigo">de <strike>R$ 1780,00</strike> por</p>
              <p class="preco-real">R$ 1500,50</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook8.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook Samsung i7 2400G 3.6GHZ 16GB</b></div>
              <p class="preco-antigo">de <strike>R$ 6780,00</strike> por</p>
              <p class="preco-real">R$ 6253,20</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
          <div class="column produto_box_produto is-4-desktop is-6-mobile has-text-centered">
            <div class="produto_box_produto_image">
              <img class="image" src="/static/images/notebook9.png">
            </div>
            <div class="produto_box_produto_desc">
              <div class="nome is-flex is-vertical-center"><b>Notebook HP I5 8GB Prata</b></div>
              <p class="preco-antigo">de <strike>R$ 2780,00</strike> por</p>
              <p class="preco-real">R$ 2533,50</p>
              <button class="button hvr-grow">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Notebooks"
  }
</script>

<style scoped>

</style>