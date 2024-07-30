<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <button @click="handleClick">Click</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
        default: 'No hay contenido',
    },
})
                            
const emit = defineEmits(['sayHi'])

let handleClick = () => {
    emit('sayHi', 'Mensaje de prueba');
}
</script>

<style scoped> 
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
}
</style>