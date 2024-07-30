import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { initializeApp } from "firebase/app";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports'
import VueCookies from 'vue-cookies';

const firebaseConfig = {
    apiKey: "AIzaSyACrH99v_SvdQZ-N0NrWFI0sx-w70BghiQ",
    authDomain: "curso-vue-3f327.firebaseapp.com",
    projectId: "curso-vue-3f327",
    storageBucket: "curso-vue-3f327.appspot.com",
    messagingSenderId: "13611698474",
    appId: "1:13611698474:web:986ccf51edcfe78b5cb653",
    measurementId: "G-Z7KE2JRS74"
};

initializeApp(firebaseConfig);

Amplify.configure(awsExports);

const app = createApp(App)

app.use(router).use(VueCookies, { expires: '1d' }).mount('#app')
