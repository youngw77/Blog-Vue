import store from'../vuex/store'
import axios from 'axios'

const initPosts = {
    test(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log('response', response)

            let list;
            if(response.status === 200){
                if(response.data.length>0){
                    list = response.data.slice(0, 10)
                    store.dispatch('SET_POSTLIST', list)
                    store.dispatch('SET_IS_POSTLIST_LOADED', true)
                } 
            } else{
                store.dispatch('SET_POSTLIST', [])
                store.dispatch('SET_IS_POSTLIST_LOADED', false)
            }

            
        })
    }
}

export default initPosts