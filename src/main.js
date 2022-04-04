import Vue from 'vue'
import App from './App.vue'
import './style/reset.css'
import router from '@/router/router'
import store from './store'
// 三级联动组件
import TypeNav from '@/components/TypeNav'
// 注册成全局组件
Vue.component(TypeNav.name,TypeNav);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
