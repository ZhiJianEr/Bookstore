import Vue from 'vue'
import Router from 'vue-router'
import Home from 'containers/Home'
import List from 'containers/List'
import Add from 'containers/Add'
import Collect from 'containers/Collect'
import Update from 'containers/Update'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path:'/update/:id',
      component:Update
    },
    { //404路由
      path:'*',
      redirect:'/home'
    }
  ],
  linkActiveClass:'active'
})
