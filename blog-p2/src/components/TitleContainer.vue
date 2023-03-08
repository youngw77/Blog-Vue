<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default{
    name: 'TitleContainer',
    props: {
        title: String,
        default(){
            return "";
        }
    }
}
</script>