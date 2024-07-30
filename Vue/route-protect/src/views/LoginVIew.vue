<template>
    <input type="text" v-model="note">
    <button @click="sendToServer">Enviar nota al servidor</button>
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  
  let note = ref('')
  const sendToServer = async () => {
    const rawResponse = await fetch('http://xxxxxxxx', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer YYYYYYYYYYYYYYYYYY',
      },
      body: JSON.stringify({ note: note.value })
    })
  
    const response = await rawResponse.json();
  }
  </script>