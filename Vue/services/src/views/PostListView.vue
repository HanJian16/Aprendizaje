<template>
    <h1>Listado de Posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'PostDetail', params: {id: post.id}}">
                {{ post.title }}
            </router-link>
        </li>
    </ul>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService';
import { onMounted } from 'vue'

const service = new PostService();
const posts = service.getPosts();

onMounted(async () => {
    await service.fetchAll();
});
</script>

<style scoped lang="scss">
.post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;

    li {
        padding: 10px;
        width: 100%;
        border: 1px solid #ccc;
        color: $primaryColor;
        
        a {
            text-decoration: none;
            color: $primaryColor;
            cursor: pointer;
        }
    }

    li:hover {
        background-color: $primaryColor;
        
        a{
            color: white;
            
        }
    }
}

</style>