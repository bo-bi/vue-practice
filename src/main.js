import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.component("Home", Home);
Vue.component("HelloWorld", HelloWorld);

new Vue({
  render: h => h(App),
}).$mount('#app')
