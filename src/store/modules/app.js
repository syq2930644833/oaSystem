const state = {
    sidebar : {
        list:[],
        restart:true
    }
}

const mutations = {
    CONCAT_SIDEBAR : (state, list) => {
        state.sidebar.list = list
    },
    CHANGE_RESTART : (state, newVal) => {
        state.sidebar.restart = newVal
    }
}

const actions = {
    concatSideBar({commit}, list){
        commit('CONCAT_SIDEBAR',list)
    },
    changeRestart({commit}, newVal){
        commit('CHANGE_RESTART',newVal)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }