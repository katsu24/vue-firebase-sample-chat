import Vue from 'vue'
// import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'


// Vue.use(VueFire)
Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC67MZrynRINmW-zUIayqnPhnLwlhY5H8Y",
    authDomain: "testpj-d9fc0.firebaseapp.com",
    databaseURL: "https://testpj-d9fc0.firebaseio.com",
    projectId: "testpj-d9fc0",
    storageBucket: "testpj-d9fc0.appspot.com",
    messagingSenderId: "54032387903",
    appId: "1:54032387903:web:d8ffc684ec7eff55ab4d8a"
});

export const db = firebaseApp.firestore();