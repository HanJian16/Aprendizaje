<template>
    <p :style="{backgroundColor: '#ccc', color: color}">El mensaje se ha enviado satisfactoriamente.</p>
    <button @click="handlePress">Cambiar color</button>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
 let color = ref('#fff');
 let handlePress = () => {
    color.value = '#ff0000';
 }
</script>

<style scoped>

</style>