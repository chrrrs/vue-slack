import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
let config = {
  apiKey: "AIzaSyADDHY4eQyg21CoszFxMhxOhVDGk_vWC_Y",
  authDomain: "vue-slack-e4732.firebaseapp.com",
  databaseURL: "https://vue-slack-e4732.firebaseio.com",
  projectId: "vue-slack-e4732",
  storageBucket: "vue-slack-e4732.appspot.com",
  messagingSenderId: "369287209427"
};
firebase.initializeApp(config);

window.firebase = firebase

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
