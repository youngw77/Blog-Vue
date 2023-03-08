const mutations = {
    SET_POSTLIST(state, payload){
        state.postList = payload
    },

    SET_IS_POSTLIST_LOADED(state, payload){
        state.isPostListLoaded = payload
    }
}

export default mutations