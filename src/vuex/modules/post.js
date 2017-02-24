import api from '../../fetch/api'
import * as types from '../types'


const state = {}

const actions = {

    savePost({ commit }, form) {
        api.Post(form)
            .then(res => {

            })
    }
}

const getters = {

}

const mutations = {

}

export default {
    state,
    actions,
    getters,
    mutations
}