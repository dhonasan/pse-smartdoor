import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = true

// Font Awesome
library.add(fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAs5GXt6dWJegCvkIOZUdmEDU9OOUh2fXo",
  authDomain: "pse-smartdoor.firebaseapp.com",
  databaseURL: "https://pse-smartdoor.firebaseio.com",
  projectId: "pse-smartdoor",
  storageBucket: "pse-smartdoor.appspot.com",
  messagingSenderId: "670274892510",
  appId: "1:670274892510:web:34dc139d2c2ed05b04884f",
  measurementId: "G-R4DY65T93Q"
})

export const db = firebase.firestore()

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
});