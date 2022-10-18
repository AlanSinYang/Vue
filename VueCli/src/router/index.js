//导入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
//导入组件
import Main from "../views/Main"
import Login from "../views/Login"

import UserList from '../views/user/list'
import userProfile from '../views/user/Profile'
import NotFound from "../views/NotFound"

//使用
Vue.use(VueRouter);
//导出
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      //登录页
      path: '/main',
      component: Main,
      props: true,
      children: [
        {path: '/user/profile/:id', name: 'UserProfile', component: userProfile, props: true},
        {path: '/user/list', component: UserList}
      ]
    },
    //首页
    {
      path: '/login',
      component: Login
    }, {
      path: '/goHome',
      redirect: '/main'
    }, {
      path: '*',
      component: NotFound
    }
  ]
})
