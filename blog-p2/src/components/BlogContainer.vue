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
        };
        
    },
    methods:{
        click(index){
            if(this.list[index].isOpen){
                console.log(1)
                this.list[index].isOpen = false;
            } else{
                console.log(2)
                this.list[index].isOpen = true;
            }
            console.log(index, this.list[index].isOpen);
            console.log(index);
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
                        });
                    }
                    console.log("list", this.list);
                }
            }
        }
}
</script>