import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Stu from './components/Stu.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/stu/:id?",
      name: "Stu",
      component: Stu,
    },
  ]
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
