import api from '../../fetch/api'
import * as types from '../types'


const state = {
    detail: {}
}

const actions = {

    /**
     * 获取文章详情
     * @param {any} {commit}
     * @param {any} id   参数id
     */
    getDetail({ commit }, id) {
        commit(types.COM_LOADING_STATUS, true)
        api.TopicsDetail(id)
            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_TOPICS_DETAIL, res)
            })
    }
}

const getters = {
    getDetail: state => state.detail
}

const mutations = {
    [types.GET_TOPICS_DETAIL](state, res) {
        state.detail = res.data
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}