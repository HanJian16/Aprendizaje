<template>
  <h3>Counter</h3>
  <h3>{{ counter }} x2 = {{ times2 }}</h3>
  <button @click="incrementar">Incrementar</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore();
const counter = computed(() => store.state.counter);
const times2 = computed(() => store.getters.times2);
const incrementar = () => store.commit('setCounter', counter.value + 1);
</script>

<style scoped></style>