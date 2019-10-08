// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VModal from 'vue-js-modal'
import firebase from 'firebase'
import settings from '../config/settings.js'

// Initialize Firebase
let app;
firebase.initializeApp(settings.firebaseConfig);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//import GAuth from 'vue-google-oauth2'

//Vue.use(GAuth, {clientId: '453674709726-eqjdlaspnr7k254of41vbv1h806is2o6.apps.googleusercontent.com', scope: 'profile email https://www.googleapis.com/auth/plus.login'})
//Vue.use();
//Vue.use(VModal, { componentName : 'v-modal', dynamic: true })
Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user) => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            components: { App },
            template: '<App/>'
        });
    }
});
