<template>
  <div class="entrar columns is-multiline">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><a href="#">Início</a></li>
        <li class="is-active"><a href="#" aria-current="page">Entrar</a></li>
      </ul>
    </nav>
    <span class="column is-12 has-text-centered aviso"><i class="fa fa-lock"></i>A rocketstore <b>nunca</b> irá pedir seus dados de acesso.</span>
    <div class="column cliente is-vertical-center">
      <h1 class="has-text-centered">Já sou cliente cliente Rocketstore</h1>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="email" placeholder="Digite seu email ou CPF">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="password" placeholder="Digite sua senha">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <label class="checkbox">
        <input type="checkbox">
        Entrar automaticamente
      </label>
      <button class="button">
        Entrar
      </button>
      <a>Esqueci minha senha</a>
      <span class="entrarcomspan">Entrar com</span>
      <div class="entrarcom">
        <i class="fab fa-google"></i>
        <i class="fab fa-facebook-f"></i>
      </div>
    </div>
    <div class="is-divider-vertical" data-content="OU"></div>
    <div class="column naocliente is-vertical-center">
      <h1 class="has-text-centered">Quero ser cliente Rocketstore</h1>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="email" placeholder="Digite seu email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <router-link class="button" to="/registrar">
          Continuar cadastro
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Entrar"
  }
</script>

<style scoped>

</style>