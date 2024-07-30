<template>
    <div class="post-card">
        <h3>Titutlo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur vel nesciunt, aliquam placeat ea ipsa
            illo saepe. Mollitia vero, cum ab numquam, officia impedit quidem voluptates earum exercitationem maxime
            doloremque.</p>
        <PostBtn />
    </div>
</template>

<script lang="ts" setup>
import PostBtn from './PostBtn.vue';
</script>

<style scope>
.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>