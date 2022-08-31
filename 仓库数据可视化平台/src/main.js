import Vue from 'vue'
import App from './App.vue'
//按需引入
//import { Button, Container, Aside, Header, Main, Menu, Submenu, MenuItemGroup, MenuItem, } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router'//路由
import './assets/less/index.less'
import store from '../store'
import http from 'axios'
import '../api/mock.js'
Vue.config.productionTip = false

//Vue.use(Button).use(Container).use(Aside).use(Header).use(Main).use(Menu).use(Submenu).use(MenuItemGroup).use(MenuItem)
//全局引入
Vue.use(ElementUI);
Vue.use(router);
Vue.prototype.$http = http;


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
