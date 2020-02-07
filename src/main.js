import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    products: [
      {
        id: 0,
        name: "Juice",
        image: "1.jpeg",
        description: "Вкуснейший сок",
        price: 100,
        desc: "Свежевыжатый сок из мандаринов поможет вам справиться с чувством усталости и избавит вас от осенней депрессии.",
      },
      {
        id: 1,
        name: "Snacks",
        image: "2.jpeg",
        description: "Чипсы из активированного угля",
        price: 95,
        desc: "Оригинальные чипсы со стильным дизайном мгновенно утолят ваше чувство голода, при этом не оставив следов на вашей фигуре.",
      },
      {
        id: 2,
        name: "Laptop",
        image: "3.jpg",
        description: "Ноутбук игровой. 2 ядра + 2 гига",
        price: 50000,
        desc: "Я не придумал описание...",
      },
      {
        id: 3,
        name: "IPhone",
        image: "4.jpeg",
        description: "3(!) камеры",
        price: 999999,
        desc: "Флагманский телефон для крутых ребят из Казахстана и не только!",
      },
      {
        id: 4,
        name: "Jeans",
        image: "5.jpeg",
        description: "Джинсы Виктора Цоя",
        price: 10000,
        desc: "Джинсы легендарного певца, покорившего сердца всех слушателей СССР.",
      },
      {
        id: 5,
        name: "Sneakers",
        image: "6.jpg",
        description: "Кроссовки, снятые с Тупака",
        price: 24000,
        desc: "Кроссовки легенды рэп сцены западного побережья США, снятые с него сразу после убийства.",
      },
      {
        id: 6,
        name: "Watch",
        image: "7.jpg",
        description: "Часы наручные с кукушкой",
        price: 100500,
        desc: "Хит сезона! Выполненные на заказ наручные часы с живой кукушкой, которая будет петь свою песню каждый час, без сбоев!",
      },
      {
        id: 7,
        name: "Chewing Gum",
        image: "8.jpg",
        description: "Жвачка 'Комплексный обед'",
        price: 1,
        desc: "Жвачка с фабрики Вилли Вонки, доработанная до совершенства! Никаких побочных эффектов, в виде превращения в чернику!",
      },
      {
        id: 8,
        name: "Bombaster",
        image: "9.jpg",
        description: "Бомбастер",
        price: 12,
        desc: "Если тебе больше 12 лет, то даже не смотри!",
      }
    ]
  },
  getters: {
    returnProduct: state => {
      return state.products;
    },
  }
})

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      name: 'Home'
    },
    {
      path: '/item/:id',
      component: () => import('./views/About.vue'),
      name: 'About'
    }
  ]
})

router.push('/');

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');