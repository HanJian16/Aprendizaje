<template>
    <label v-custom-font.lg.red>Subtotal: </label>
    <input type="number" v-model="subtotal">
    <h3 v-custom-font.xxl.blue>Total impuestos a pagar: {{ totalvat }} ({{ vat }}%)</h3>
</template>

<script setup lang="ts">
import { Ref, computed, ref } from 'vue';

const vat = 21;
let subtotal: Ref<number> = ref(0);
const totalvat = computed(() => (vat * subtotal.value) / 100)
</script>

<style scoped></style>