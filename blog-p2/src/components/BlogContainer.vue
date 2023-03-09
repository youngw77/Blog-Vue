<template>

<div>
    <title-container title="BLOG-PART 2"></title-container>
    <div v-for="(post, index) in list" :key="'post_' + post.id">
        <div style="display: flex; border: 2px solid lightgrey; margin: 20px">
            <h3>{{ post.title }}</h3>
            <button @click="click(index)">OPEN</button>
        </div>
        <div style="border: 1px solid red; padding: 10px" v-if="post.isOpen">
            <div>
                {{ post.body }}
            </div>
            <div v-for="co in post.comments" :key="'co' + co.id" style="background-color; lightgrey; margin-top: 10px">
                <div>
                    {{ co.email }}
                </div>
                <div style="display: flex">
                    <div>
                        {{ co.name }}
                    </div>
                    <div>
                        {{ co.body }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import TitleContainer from './TitleContainer.vue';
export default{
    name: "BlogContainer",
    components: {
        TitleContainer,
    },
    data(){
        return{
            list: [],
            // comments: []
        };
        
    },
    methods:{
        click(index){
            

            if(this.list[index].isOpen){
                this.list[index].isOpen = false;
            } else{
                this.list[index].isOpen = true;
                this.getPostComments(index);
            }
        },
        getPostComments(index){
            let postId = this.list[index].id;
            let params = {
                params: {
                    postId, // postId:postId
                }
            }
            this.$axios.get('https://jsonplaceholder.typicode.com/comments', params)
            // this.$axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            // this.$axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + params)
            .then((response) => {
                // console.log("comments", response);
                // this.comments = response.data;
                this.list[index].comments = response.data;
            })
        }
    },
    computed: {
        getPostList(){
            return this.$store.getters.GET_POSTLIST;
        },
        getIsPostListLoaded(){
            return this.$store.getters.GET_IS_POSTLIST_LOADED;
        },
        // getPostList(){
        //     let list = [];
        //     let tmpList = [];

        //     if(this.$store.getters.GET_IS_POSTLIST_LOADED){
        //         tmpList = this.$store.getters.GET_POSTLIST;
        //         for(let i=0; i<tmpList.length; i++){
        //             list.push({
        //                 ...tmpList[i],
        //                 isOpen: false,
        //             });
        //         }
        //     }
        //     return list;
        // },
    },
    watch: {
            getIsPostListLoaded(data){
                if(data){
                    // this.list = this.getPostList;
                    for(let i=0; i<this.getPostList.length; i++){
                        this.list.push({
                            ...this.getPostList[i],
                            isOpen: false,
                            comments: []
                        });
                    }
                    console.log("list", this.list);
                }
            }
        }
}
</script>