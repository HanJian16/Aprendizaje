<template>
    <authenticator>
        <template v-slot="{user, signOut}">
            <h1>Hello {{ user }}</h1>
            <button @click="signOut">SignOut</button>
        </template>
    </authenticator>
</template>

<script setup lang="ts">
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css'
</script>