import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    initIndex: 0,
    itemTab: [
        { 'title': '全部', 'type': 'all' },
        { 'title': '精华', 'type': 'good' },
        { 'title': '分享', 'type': 'share' },
        { 'title': '问答', 'type': 'ask' },
        { 'title': '招聘', 'type': 'job' }
    ],
    loading: 0,
    leftNavStatus: false,
    topHeaderStatus: true,
}

const actions = {
    setNavState({ commit }, status) {
        commit(types.COM_NAV_STATUS, status)
    },
    setHeaderState({ commit }, status) {
        commit(types.COM_HEADER_STATUS, status)
    }

}

const getters = {
    getItemTab: state => state.itemTab,
    loading: state => state.loading,
    setHeaderState: state => state.topHeaderStatus

}


const mutations = {
    [types.COM_LOADING_STATUS](state, status) {
        if (state.loading == 0 && !status) {
            return;
        }
        state.loading = status ? ++state.loading : --state.loading;
    },
    [types.COM_INIT_INDEX](state, index) {
        state.initIndex = index
    },

    [types.COM_NAV_STATUS](state, status) {
        state.leftNavStatus = status
    },

    [types.COM_HEADER_STATUS](state, status) {
        state.leftNavStatus = status
    }
}


export default {
    state,
    actions,
    getters,
    mutations
}