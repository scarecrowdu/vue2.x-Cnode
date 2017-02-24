import './assets/css/reset.css'
import './assets/css/common.css'

import Vue from 'vue'
import App from './App'
import router from './router/routers'
import store from './vuex/store'
import * as filters from './util/filter'

Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器

new Vue({
    el: '#app',
    router,
    store,
    ...App
})