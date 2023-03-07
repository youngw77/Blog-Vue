// import store from'../vuex/store'
import axios from 'axios'

const initPosts = {
    test(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log('response', response)
            /* eslint-disable*/
            let list = response.data.slice(0, 10)
            console.log('list', list)
        })
    }
}

export default initPosts