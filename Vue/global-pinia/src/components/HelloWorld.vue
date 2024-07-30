<template>
  <h3>{{ store.count }} x 2 = {{ store.times2 }}</h3>
  <button @click="store.increment(1)">Incrementar</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter';

const store = useCounterStore();
</script>