<template>
    <form>
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="agree" /> Acepto los terminos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
let inputText: Ref<string> = ref('');
let agree: Ref<boolean> = ref(true);
let country: Ref<string> = ref('Spain');
</script>

<style scoped></style>