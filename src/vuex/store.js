import Vue from 'vue'
import Vuex from 'vuex'

import com     from './modules/com'
import user    from './modules/user'
import post    from './modules/post'
import topics  from './modules/topics'
import detail  from './modules/detail'
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
       com,
       user,
       post,
       topics,
       detail,
       message
    },
    strict: process.env.NODE_ENV !== 'production', //是否开启严格模式
})