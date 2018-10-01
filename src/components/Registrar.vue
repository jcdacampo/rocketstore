<template>
  <div class="registrar is-multiline">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li class="is-active"><a href="#" aria-current="page">Registrar</a></li>
      </ul>
    </nav>
    <div class="registrar_dados is-vertical-center">
      <h1 class="has-text-centered">Nos informe alguns dados</h1>
      <div class="registrar_dados_campos">
        <div class="field">
          <label>Seu email:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label>Defina uma senha:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Senha">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label>Repita a senha:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Confirme a senha">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="registrar_dados_campos">
        <div class="field">
          <label>Informe seu nome:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Nome">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label>Informe seu CPF:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="CPF">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field metade">
            <label>Data de nascimento:</label>
            <p class="control has-icons-left">
              <input class="input" type="email" placeholder="Data de nascimento">
              <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            </p>
          </div>
        <div class="field metade sexo">
            <label>Sexo:</label>
            <label class="radio">
              <input type="radio" name="answer">
              Masculino
            </label>
            <label class="radio">
              <input type="radio" name="answer">
              Feminino
            </label>

          </div>


      </div>
      <div class="registrar_dados_campos">
        <div class="field">
          <label>Telefone:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="Telefone">
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <label>Informe seu CEP:</label>
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="CEP">
            <span class="icon is-small is-left">
              <i class="fas fa-home"></i>
            </span>
          </p>
        </div>
      </div>
      <button class="button">Concluir</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Registrar"
  }
</script>

<style scoped>

</style>