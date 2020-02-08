import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'

// import './plugins/firebase'

Vue.config.productionTip = false

let firebaseConfig = {
  apiKey: "AIzaSyBIr_qtCzN8lTQzV08J4LFJ8P8KMhRogb8",
  authDomain: "violin-online.firebaseapp.com",
  databaseURL: "https://violin-online.firebaseio.com",
  projectId: "violin-online",
  storageBucket: "violin-online.appspot.com",
  messagingSenderId: "424431374280",
  appId: "1:424431374280:web:31d3abad4c850aa640bafd",
  measurementId: "G-9KNGNZFVK4"
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

