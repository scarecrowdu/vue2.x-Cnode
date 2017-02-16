import * as types from '../types'


/**
 * App通用配置
 */
const state = {
    initIndex : 0,
    itemTab : [
        {'title' : '全部', 'type' : 'all'},
        {'title' : '精华', 'type' : 'good'},
        {'title' : '分享', 'type' : 'share'},
        {'title' : '问答', 'type' : 'ask'},
        {'title' : '招聘', 'type' : 'job'}
    ],
    loading:0,
    leftNavState:false
}

const actions = {
    // getInitIndex:function({commit},index){
    //     commit(types.COM_INIT_INDEX,index)
    // }
}

const getters = {
    getItemTab: state => state.itemTab,
}


const mutations = {
   [types.COM_INIT_INDEX](state,index){
       state.initIndex = index
   }
}


export default {
    state,
    actions,
    getters,
    mutations
}