import api from '../../fetch/api'
import * as types from '../types'


const state = {
    // 登录状态
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    // 登录信息
    userInfo : JSON.parse(localStorage.getItem('userInfo')) || {}
}

const actions = {
    /**
     * 用户登录
     * @param {any} {commit}
     * @param {any} accesstoken
     */
    setUserInfo ({commit},res) {
        localStorage.setItem('userInfo', JSON.stringify(res))
        localStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO,res)
        commit(types.SET_LOGIN_STATUS,true)
    },
    
    /**
     * 退出登录
     * @param {any} {commit}
     */
    setSignOut ({commit}) {
        localStorage.removeItem('loginStatus')
        localStorage.removeItem('userInfo')
        commit(types.SET_LOGIN_STATUS,false)
        commit(types.SET_USER_INFO,{})
    }
}

const getters = {
    // setUserInfo: state => state.userInfo
}

const mutations = {

    [types.SET_USER_INFO] (state,res) {
        state.userInfo = res
    },
    
    [types.SET_LOGIN_STATUS] (state,status) {
        state.loginStatus = status
    }

}

export default {
    state,
    actions,
    getters,
    mutations
}