import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
    token:'',
    userInfo:{}
}

const mutations = {
    CHANGE_TOKEN : (state, token) => {
        state.token = token
    },
    CHANGE_USERINFO : (state, userInfo) => {
        state.userInfo = userInfo
    }
}

const actions = {
    changeToken({commit}, token){
        commit('CHANGE_TOKEN',token)
        setToken(token)
    },
    changeUserInfo({commit}, userInfo){
        commit('CHANGE_USERINFO',userInfo)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}