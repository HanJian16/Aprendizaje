<template>
  <nav>
    <router-link :to="{name: 'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}" >about</router-link>
  </nav>
  <RouterView/>
</template>

<script setup lang="ts">
</script>