const actions = {
    // 비동기 데이터를 동기데이터(mutations)로 옮겨준다.
    SET_POSTLIST({commit}, payload){
        
        commit('SET_POSTLIST', payload)
    },
    SET_IS_POSTLIST_LOADED({commit}, payload) {
        commit('SET_IS_POSTLIST_LOADED', payload)
    }
}

export default actions