<template>
  <div class="conteudo">
    <section class="slider">
      <div class="container is-fluid is-marginless">
        <div class="owl-carousel slider_carousel">
          <div>
            <img class="image is-12" src="/static/images/banner-01.jpg">
          </div>
          <div>
            <img class="image is-12" src="/static/images/banner-02.jpg">
          </div>
          <div>
            <img class="image is-12" src="/static/images/banner-04.jpg">
          </div>
        </div>
      </div>
    </section>
    <div class="container is-fullhd">
      <section class="descontos columns is-multiline is-mobile">
        <div class="column is-half-mobile is-paddingless desconto_primeiro">
          <img src="/static/images/desconto-01.png">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 10%</span>
          </div>
        </div>
        <div class="column is-half-mobile is-paddingless desconto_segundo">
          <img src="/static/images/desconto-02.png">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 30%</span>
          </div>
        </div>
        <div class="column is-full-mobile is-paddingless desconto_terceiro">
          <img src="/static/images/desconto-03.png">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 20%</span>
          </div>
        </div>
        <div class="column is-full-mobile is-paddingless desconto_quarto">
          <img src="/static/images/desconto-04.png">
          <div class="desconto_desc is-vertical-center has-text-centered">
            <span>Descontos 50%</span>
          </div>
        </div>
      </section>
      <section class="promocoes columns is-multiline is-vertical-center">
        <div class="column promocoes_desc is-2-desktop is-12-mobile has-text-centered is-vertical-center">
          <span><b>Promoções</b> do dia </span>
        </div>
        <div class="column promocoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
        <div class="column promocoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
        <div class="column promocoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
      </section>
      <section class="produtos_ate columns is-mobile is-multiline">
        <div class="column is-3-desktop is-6-mobile has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 59,90</b>
          </div>
        </div>
        <div class="column is-3-desktop is-6-mobile has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 99,90</b>
          </div>
        </div>
        <div class="column is-3-desktop is-6-mobile has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 159,90</b>
          </div>
        </div>
        <div class="column is-3-desktop is-6-mobile has-text-centered">
          <div class="produtos_ate_box">
            <span class="produtos_ate_box_desc">Produtos</span>
            <p>por até</p>
            <b>R$ 259,90</b>
          </div>
        </div>
      </section>
      <section class="sugestoes columns is-multiline is-vertical-center">
        <div class="column sugestoes_desc is-2-desktop is-12-mobile has-text-centered is-vertical-center">
          <span><b>Sugestões</b> para você </span>
        </div>
        <div class="column sugestoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
        <div class="column sugestoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
        <div class="column sugestoes_img is-3-desktop is-3-mobile is-vertical-center">
          <img src="http://via.placeholder.com/180x140">
        </div>
      </section>
      <section class="marcas columns is-multiline owl-carousel">
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/intel.png">
        </div>
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/razer.png">
        </div>
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/apple.png">
        </div>
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/cm.png">
        </div>
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/sony.png">
        </div>
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/samsung.png">
        </div>
        <div class="column is-3-desktop is-6-mobile">
          <img src="/static/images/hyperx.png">
        </div>
      </section>
      <section class="lancamento ">
        <h1 class="lancamento_titulo has-text-centered">Último lançamento</h1>
        <div class="columns is-multiline">
          <div class="column image lancamento_imagem is-offset-1-desktop is-4-desktop is-12-mobile">
            <img src="/static/images/iphone.jpg">
            <div class="lancamento_imagem_acoes">
              <div class="lancamento_imagem_acoes_preco has-text-centered">
                <p>Apenas</p>
                R$ 4999,00
              </div>
              <div class="lancamento_imagem_acoes_botao has-text-centered">
                <a class="button is-hovered">Eu quero!</a>
              </div>
            </div>
          </div>
          <div class="column lancamento_desc is-6-desktop is-12-mobile">
            <h2>iPhone X</h2>
            <span>
              O Apple iPhone X é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização.
            </span>
            <div class="lancamento_desc_caracteristicas">
              <div class="columns is-mobile is-multiline">
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-broadcast-tower"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Rede</p>
                    <b>LTE 4G</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-microchip"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>6 Core</p>
                    <b>2.1 GHZ</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-memory"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Memória</p>
                    <b>256 GB</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-tint"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Resistência</p>
                    <b>Sim</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fab fa-apple"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Apple</p>
                    <b>iOS 11</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-mobile"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Display</p>
                    <b>5.8</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-camera"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Foto</p>
                    <b>12 mpx</b>
                  </div>
                </div>
                <div class="column is-3-desktop is-6-tablet is-6-mobile">
                  <i class="fas fa-video"></i>
                  <div class="lancamento_desc_caracteristicas_texto">
                    <p>Video</p>
                    <b>4K</b>
                  </div>
                </div>
              </div>
            </div>
            <div class="lancamento_desc_acoes is-flex">
              <div class="lancamento_desc_acoes_preco has-text-centered">
                <p>Apenas</p>
                R$ 4999,00
              </div>
              <div class="lancamento_desc_acoes_botao has-text-centered">
                <router-link class="button is-hovered" to="/produto">
                  Eu quero!
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="features is-flex is-vertical-center is-fullhd">
        <div class="feature_frete">
          <i class="fas fa-truck"></i>
          <p>Entrega rápida</p>
        </div>
        <div class="feature_promo">
          <i class="fas fa-star"></i>
          <p>Promoções</p>
        </div>
        <div class="feature_atendimento">
          <i class="fas fa-headset"></i>
          <p>Atendimento 24/7</p>
        </div>
        <div class="feature_qualidade">
          <i class="fas fa-medal"></i>
          <p>Qualidade</p>
        </div>
        <div class="feature_parcelas">
          <span><b>10x</b></span>
          <p>sem juros</p>
        </div>
        <div class="feature_seguranca">
          <i class="fas fa-lock"></i>
          <p>Segurança</p>
        </div>
        <div class="feature_gameficacao">
          <i class="fas fa-trophy"></i>
          <p>Prêmios</p>
        </div>
      </section>
      <section class="tendencias">
        <h1 class="tendencias_titulo has-text-centered">Tendências</h1>
        <div class="tendencias_botoes has-text-centered">
          <a class="button tendencias_botoes_vendidos selected">mais vendidos</a>
          <a class="button tendencias_botoes_vistos">mais vistos</a>
        </div>
        <div class="tendencias_box">
          <div class="columns is-multiline is-mobile tendencias_box_vendidos">
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vendido01.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>Headphone Bluetooth Edifier Hi-Fi W800BT</b></div>
                <p class="preco-antigo">de <strike>R$ 350,00</strike> por</p>
                <p class="preco-real">R$ 250,00</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vendido02.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>Smartphone Samsung Galaxy J7 Pro 64GB J730</b></div>
                <p class="preco-antigo">de <strike>R$ 1199,00</strike> por</p>
                <p class="preco-real">R$ 1049,00</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vendido03.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>Mouse Gamer Mesh Gear Horus 4.000dpi LED RGB</b></div>
                <p class="preco-antigo">de <strike>R$ 150,00</strike> por</p>
                <p class="preco-real">R$ 75,00</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vendido04.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>Processador AMD Ryzen 5 2400G 3.6GHZ Cache 6MB</b></div>
                <p class="preco-antigo">de <strike>R$ 780,00</strike> por</p>
                <p class="preco-real">R$ 533,50</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
          </div>
          <div class="columns is-multiline is-mobile tendencias_box_vistos is-hidden">
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vistos01.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>Smartphone Samsung Galaxy S9 G9600 Cinza</b></div>
                <p class="preco-antigo">de <strike>R$ 3199,00</strike> por</p>
                <p class="preco-real">R$ 2549,00</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vistos02.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>Processador Intel Core i7-7700 3.6GHz Cache 8MB</b></div>
                <p class="preco-antigo">de <strike>R$ 1899,00</strike> por</p>
                <p class="preco-real">R$ 1549,00</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vistos03.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>God of War 4 para PlayStation 4</b></div>
                <p class="preco-antigo">de <strike>R$ 150,00</strike> por</p>
                <p class="preco-real">R$ 75,00</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
            <div class="column tendencia_box_produto is-3-desktop is-6-mobile has-text-centered">
              <div class="tendencia_box_produto_image">
                <img class="image" src="/static/images/mais-vistos04.jpg">
              </div>
              <div class="tendencia_box_produto_desc">
                <div class="nome is-flex is-vertical-center"><b>DmC: Devil May Cry Definitive Edition para PlayStation 4</b></div>
                <p class="preco-antigo">de <strike>R$ 200,00</strike> por</p>
                <p class="preco-real">R$ 133,50</p>
                <button class="button hvr-grow">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Inicio'
  }
</script>
