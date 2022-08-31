//路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mian from '../views/Mian.vue'
import User from '../views/User'
import Home from '../views/Home'
import Mall from '../views/Mall'
import Page1 from '../views/Other/pageOne.vue'
import Page2 from '../views/Other/pageTwo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mian',
    component: Mian,
    children: [
     {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/mall',
        name: 'mall',
        component: Mall
      },
      {
        path: '/page1',
        name: 'page1',
        component: Page2
      },
      {
        path: '/page2',
        name: 'page2',
        component: Page1
      },

    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router