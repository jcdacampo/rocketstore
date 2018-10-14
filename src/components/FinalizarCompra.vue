<template>
  <div class="container is-fullhd finalizar-compra">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Meu Carrinho</a></li>
        <li class="is-active"><a href="#" aria-current="page">Finalizando compra</a></li>
      </ul>
    </nav>
    <div id="wizard">
      <h3>Nos conte sobre você</h3>
      <section class="infos">
        <p class="obs">Neste momento, precisamos somente de alguns dados pessoais.</p>
        <form id="form-pagamento" action="#">
          <div class="control columns is-multiline">
            <div class="column is-half">
              <label for="userName">Email *</label>
              <input id="userName" name="userName" class="input required" type="text" placeholder="Digite seu email">
            </div>
            <div class="column is-half">
              <label>Nome</label>
              <input class="input" required type="text" placeholder="Informe seu nome">
            </div>
            <div class="column is-half">
              <label>CPF / CNPJ *</label>
              <input class="input" required type="text" placeholder="Digite seu CPF ou CNPJ">
            </div>
            <div class="column is-half">
              <label>Telefone</label>
              <input class="input" required type="text" placeholder="Informe um telefone de contato">
            </div>
            <p class="aviso">Campos marcados por * são obrigatórios.</p>
          </div>
        </form>
      </section>
      <h3>Endereço de entrega</h3>
      <section class="endereco">
        <p class="obs">Agora, precisamos de um endereço para entregar sua encomenda.</p>
        <div class="control columns is-multiline">
          <div class="column is-3">
            <label>CEP</label>
            <a>nao sei meu cep</a>
            <input class="input" required type="text" placeholder="Informe seu CEP">
          </div>
          <div class="column is-7">
            <label>Rua</label>
            <input class="input" required type="text" placeholder="Informe sua rua">
          </div>
          <div class="column is-2">
            <label>Número</label>
            <input class="input" required type="number" placeholder="Número">
          </div>
          <div class="column is-half">
            <label>Referência</label>
            <input class="input" required type="text" placeholder="Fica perto de que?">
          </div>
          <div class="column is-half">
            <label>Bairro</label>
            <input class="input" required type="text" placeholder="Informe seu bairro">
          </div>
          <div class="column is-half">
            <label>Cidade</label>
            <input class="input" required type="text" placeholder="Digite sua cidade">
          </div>
          <div class="column is-half">
            <label>Estado</label>
            <input class="input" required type="text" placeholder="Informe seu estado">
          </div>
          <div class="column escolhe-frete is-12">
            <label>Selecione o tipo do frete:</label>
            <div>
              <label class="radio">
                <input type="radio" name="rsvp">
                <b>Sedex</b>  - R$ 45,00 - Até 4 dias úteis
              </label>
            </div>
            <div>
              <label class="radio">
                <input type="radio" name="rsvp">
                <b>PAC</b>  - R$ 23,00 - Até 10 dias úteis
              </label>
            </div>
            <div>
              <label class="radio">
                <input type="radio" name="rsvp">
                <b>Transportadora</b>  - R$ 32,00 - Até 7 dias úteis
              </label>
            </div>
          </div>
        </div>
      </section>
      <h3>Como você deseja pagar?</h3>
      <section class="pgtos">
        <p class="desc">Para finalizar, veja o resumo da compra e informe como você gostaria de realizar o pagamento</p>
        <div class="columns">
          <div class="column is-half">
            <b class="titulo">Produtos</b>
            <p>Produtos (3 itens) <b>R$ 536,93</b></p>
            <p>Frete (Chapecó SC) <b>R$ 36,00</b></p>
            <p>TOTAL <b class="grande">R$ 572,93</b></p>
          </div>
          <div class="is-divider-vertical" data-content=""></div>
          <div class="column is-half">
            <b class="titulo">Endereço de entrega</b>
            <p>Wesley Bonfim Sartori</p>
            <p>Rua dos Esportes - 153</p>
            <p>Centro - São Carlos - SC</p>
            <p>CEP: 89850-000</p>
          </div>
        </div>
        <ul class="accordeon">
          <li class="accordeon_item">
            <h4 class="accordeon_title"><i class="fas fa-credit-card"></i>Cartão de crédito -<span> R$ 523,20 em 1x</span> ou 589,50 em 6x</h4>
            <div class="accordeon_content">
              <div class="card-wrapper"></div>
              <form id="form-pgto">
                <div class="columns is-multiline">
                  <div class="column is-8">
                    <label>Número do cartão</label>
                    <input class="input" name="number" id="card-number" type="text" placeholder="Número do cartão">
                  </div>
                  <div class="column is-4">
                    <label>Código de segurança</label>
                    <input class="input" name="cvc" type="text" placeholder="Número do cartão">
                  </div>
                  <div class="column is-3">
                    <label>Data de vencimento</label>
                    <input class="input" name="expiry" type="text" placeholder="Número do cartão">
                  </div>
                  <div class="column is-2">
                    <label>Parcelas</label>
                    <div class="field">
                      <div class="control">
                        <div class="select is-small">
                          <select>
                            <option>1x</option>
                            <option>2x</option>
                            <option>3x</option>
                            <option>4x</option>
                            <option>5x</option>
                            <option>6x</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-7">
                    <label>Nome</label>
                    <input class="input" name="name" type="text" placeholder="Nome completo">
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li class="accordeon_item">
            <h4 class="accordeon_title"><i class="fas fa-credit-card"></i>Cartão de débito -<span> R$ 499,20</span></h4>
            <div class="accordeon_content">
              <div class="columns is-multiline">
                <div class="column is-8">
                  <label>Número do cartão</label>
                  <input class="input" name="number" type="text" placeholder="Número do cartão">
                </div>
                <div class="column is-4">
                  <label>Código de segurança</label>
                  <input class="input" name="cvc" type="text" placeholder="Número do cartão">
                </div>
                <div class="column is-4">
                  <label>Data de vencimento</label>
                  <input class="input" name="expiry" type="text" placeholder="Número do cartão">
                </div>
                <div class="column is-8">
                  <label>Nome</label>
                  <input class="input" name="name" type="text" placeholder="Nome completo">
                </div>
              </div>
            </div>
          </li>
          <li class="accordeon_item">
            <h4 class="accordeon_title"><i class="fas fa-barcode"></i>Boleto -<span> R$ 499,20</span></h4>
            <div class="accordeon_content">
              <p><i class="fas fa-caret-right"></i>Ao confirmar a compra, seu boleto será exibido na próxima página. Ele pode ser impresso e pago em uma agência bancária ou o pagamento pode ser feito através da internet, utilizando o código de barras do boleto.</p>
              <p><i class="fas fa-caret-right"></i>O prazo de validade do boleto é de 2 dias úteis. Se o pagamento não for efetuado até a data de vencimento, seu pedido será cancelado automaticamente.</p>
              <p><i class="fas fa-caret-right"></i>O prazo de entrega começa a contar após a confirmação do pagamento, processo que pode levar até 3 dias úteis após a data em que o boleto foi pago. Para a compra de produtos digitais, o conteúdo será disponibilizado em até 1 dia útil após a confirmação do pagamento.</p>
              <b>Clique para imprimir o boleto.</b>
              <img class="image" width="100px" src="/static/images/boleto.png">
            </div>
          </li>
        </ul>


      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Finalizar-compra"
  }
</script>

<style scoped>

</style>