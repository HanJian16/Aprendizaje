<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    v-model="email">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="handleSubmit">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import AuthService from '@/services/AuthService'
import VueCookies from 'vue-cookies'

let email: Ref<string> = ref('');
let password: Ref<string> = ref('');

const handleSubmit = async () => {
    const service = new AuthService();
    const succces = await service.login(email.value, password.value);

    if (succces) alert('Exito')
    else alert('Login incorrecto')
}
</script>

<style scoped></style>