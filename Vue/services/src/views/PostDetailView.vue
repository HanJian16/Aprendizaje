<template>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <router-link :to="{ name: 'PostList' }">Volver atrás</router-link>
    </div>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const service = new PostService();
const post = service.getPost();

onMounted(async () => {
    const route = useRoute();
    const id = route.params.id;
    service.fetchById(id)
})
</script>

<style scoped lang="scss">
.post-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
        margin: 10px;
        color: $primaryColor;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
}

.post-card {
    padding: 25px;
    width: 750px;
    border-radius: 15px;
    border: 1px solid #ccc;
}
</style>