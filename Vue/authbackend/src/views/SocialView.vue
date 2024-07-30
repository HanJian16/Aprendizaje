<template>
    <h1>Social Login</h1>
    <button @click="loginGoogle">Login with Google</button>
    <button @click="loginFacebook">Login with facebook</button>
    <button @click="loginTwitter">Login with Twitter</button>
    <button @click="loginGithub">Login with GitHub</button>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth'

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

const loginGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const token = credentials?.accessToken;
        alert('Exito!');
    }).catch((error) => {
        alert('Login Failed!');
    })
}

const loginFacebook = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
        const credentials = FacebookAuthProvider.credentialFromResult(result);
        const token = credentials?.accessToken;
        alert('Exito!');
    }).catch((error) => {
        alert('Login Failed!');
    })
}

const loginTwitter = () => {
    signInWithPopup(auth, twitterProvider).then((result) => {
        const credentials = TwitterAuthProvider.credentialFromResult(result);
        const token = credentials?.accessToken;
        alert('Exito!');
    }).catch((error) => {
        alert('Login Failed!');
    })
}

const loginGithub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
        const credentials = GithubAuthProvider.credentialFromResult(result);
        const token = credentials?.accessToken;
        alert('Exito!');
    }).catch((error) => {
        alert('Login Failed!');
    })
}
</script>