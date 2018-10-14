import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import Celulares from '@/components/Celulares';
import Computadores from '@/components/Computadores';
import Notebooks from '@/components/Notebooks';
import Consoles from '@/components/Consoles';
import Jogos from '@/components/Jogos';
import Perifericos from '@/components/Perifericos';
import Mouse from '@/components/Mouse';
import Teclado from '@/components/Teclado';
import Fones from '@/components/Fones';
import Entrar from '@/components/Entrar';
import Registrar from '@/components/Registrar';
import Minha_Conta from '@/components/MinhaConta';
import Carrinho from '@/components/Carrinho';
import Checkout from '@/components/Checkout';
import Produto from '@/components/Produto';
import FinalizarCompra from '@/components/FinalizarCompra';

Vue.use(Router);
/**
 * Talvez fazer 3 categorias principais, smartphones, informática e jogos
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/celulares/',
      name: 'Celulares',
      component: Celulares
    },
    {
      path: '/computadores/',
      name: 'Computadores',
      component: Computadores
    },
    {
      path: '/notebooks/',
      name: 'Notebooks',
      component: Notebooks
    },
    {
      path: '/consoles/',
      name: 'Consoles',
      component: Consoles
    },
    {
      path: '/jogos/',
      name: 'Jogos',
      component: Jogos
    },
    {
      path: '/perifericos/',
      name: 'Perifericos',
      component: Perifericos
    },
    {
      path: '/mouse/',
      name: 'Mouse',
      component: Mouse
    },
    {
      path: '/teclado/',
      name: 'Teclado',
      component: Teclado
    },
    {
      path: '/fones/',
      name: 'Fones',
      component: Fones
    },
    {
      path: '/entrar/',
      name: 'Entrar',
      component: Entrar
    },
    {
      path: '/registrar/',
      name: 'Registrar',
      component: Registrar
    },
    {
      path: '/minha-conta/',
      name: 'Minha Conta', //aqui tem alterar senha, alterar meus dados, endereço, meus pedidos. Talvez tenha q fazer uma rota pra cada
      component: Minha_Conta
    },
    {
      path: '/carrinho/',
      name: 'Carrinho',
      component: Carrinho
    },
    {
      path: '/checkout/',
      name: 'Finalizar Compra',
      component: Checkout
    },
    {
      path: '/produto/',
      name: 'Produto',
      component: Produto
    },
    {
      path: '/finalizar-compra/',
      name: 'FinalizarCompra',
      component: FinalizarCompra
    },
  ]
})
