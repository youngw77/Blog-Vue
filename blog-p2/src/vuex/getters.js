const getters = {
    GET_POSTLIST(state){
        return state.postList
    },
    GET_IS_POSTLIST_LOADED(state){
        return state.isPostListLoaded
    }
}

export default getters