import Vue from 'vue'
import Vuex from 'vuex'

import com    from './modules/com'
import user   from './modules/user'
import topics from './modules/topics'
import detail from './modules/detail'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
       com,
       user,
       topics,
       detail
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})