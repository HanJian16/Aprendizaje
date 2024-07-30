<template>
    <div class="container">
        <PostDetail 
            v-for="elm in info" 
            :key="elm.title" 
            :title="elm.title" 
            :content="elm.content" 
            @sayHi="showAlert"
        />
    </div>
</template>

<script setup lang="ts">
import PostDetail from './PostDetail.vue';

interface IPost {
    title: string,
    content: string,
}

let info: Array<IPost> = [
    { title: 'Post 1', content: 'Text 1' },
    { title: 'Post 2', content: 'Text 2' },
    { title: 'Post 3', content: 'Text 3' },
    { title: 'Post 4', content: 'Text 4' },
    { title: 'Post 5', content: 'Text 5' }
];

let showAlert = (msg:string) => {
    alert(msg);
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around
}
</style>