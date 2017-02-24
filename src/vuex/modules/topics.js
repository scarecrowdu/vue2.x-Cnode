import api from '../../fetch/api'
import * as types from '../types'

const state = {
    topicsList: [], //文章列表数据
    searchKey: { //文章列表参数
        page: 0,
        limit: 20,
        tab: 'all'
    },
    scroll: true, //避免快速滚动，无限拉取数据源
}

const actions = {
    /**
     * 获取获取文章列表
     * @param {any} {commit}
     * @param {any} params   参数
     */
    getTopicsList({ commit }, params) {
        if (state.scroll) {
            commit(types.GET_PAGE_NUM)
            commit(types.COM_LOADING_STATUS, true)
            commit(types.GET_SCORLL_STATUS, false)
            api.TopicsList(`?tab=${state.searchKey.tab}&page=${state.searchKey.page}&limit=20`)
                .then(res => {
                    commit(types.COM_LOADING_STATUS, false)
                    commit(types.GET_SCORLL_STATUS, true)
                    commit(types.GET_TOPICS_LIST, res)
                })
        }
    }
}

const getters = {
    getTopicsList: state => state.topicsList
}

const mutations = {
    [types.GET_TOPICS_LIST](state, res) {
        if (state.searchKey.page <= 1) {
            state.topicsList = res.data
        } else {
            state.topicsList = state.topicsList.concat(res.data)
        }
    },
    [types.GET_SEARCH_KEY](state, params) {
        state.searchKey = params
    },
    [types.GET_PAGE_NUM](state) {
        state.searchKey['page'] += 1
    },
    [types.GET_SCORLL_STATUS](state, status) {
        state.scroll = status
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}