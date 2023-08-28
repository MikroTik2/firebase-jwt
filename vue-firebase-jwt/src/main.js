import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";

import App from '@/App.vue';
import PrimeVue from 'primevue/config';
import router from '@/router';

const app = createApp(App)

const firebaseConfig = {
    apiKey: "AIzaSyArhuQ6QW2tS9Q7gj1-E_TTjletLV7cdxk",
    authDomain: "jwt-vue-firebase.firebaseapp.com",
    projectId: "jwt-vue-firebase",
    storageBucket: "jwt-vue-firebase.appspot.com",
    messagingSenderId: "63682231149",
    appId: "1:63682231149:web:c3b39066e6d9e91b023864"
};
  
initializeApp(firebaseConfig);

app.use(createPinia())
app.use(PrimeVue)
app.use(router)

app.mount('#app');