/**
 * 路由规则
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Topics   from './pages/Topics'
import Detail   from './pages/Detail'
import About    from './pages/About'
import Login    from './pages/Login'
import Me       from './pages/Me'
import Message  from './pages/Message'
import NotFound from './pages/NotFound'


Vue.use(VueRouter);

const routes = [
   {
       path: '/',
       name: 'home',
       component: Topics
   },
   {
       path:'/detail/:id',
       name: 'detail',
       component: Detail
   },
   {
       path: '/about',
       name: 'about',
       component: About
   },
   {
       path: '/login',
       name: 'login',
       component: Login
   },
   {
       path: '/message',
       name: 'message',
       component: Message
   },
   {
       path: '/me',
       name: 'me',
       component: Me
   },
   {
       path: '*',
       name: 'notfound',
       component: NotFound
   }
]


const router = new VueRouter({
    linkActiveClass:'app-active', //如果有底部导航栏，这个属性可以为被选中的路由增加相应的选中状态class
    history:true,
    base: __dirname,
    routes
})

router.beforeEach((to, from, next) => {
   
   console.log(router.app.effect)
   next()
})

export default router;