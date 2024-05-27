import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4-53KuTZUN__ffdQi1AK8EnOkzmg5lBQ",
  authDomain: "tienda-2e5ce.firebaseapp.com",
  projectId: "tienda-2e5ce",
  storageBucket: "tienda-2e5ce.appspot.com",
  messagingSenderId: "616628270902",
  appId: "1:616628270902:web:38d057b83986a7089ae597",
  measurementId: "G-T1NNVXT3VG"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)

app.use(router);

app.mount('#app')
