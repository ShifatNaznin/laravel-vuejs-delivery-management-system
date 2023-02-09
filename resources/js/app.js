
require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// router import
import {routes} from './routes'  
// user class
import User from './Helpers/User';
window.User = User;
// user notification
import Notification from './Helpers/Notification';
window.Notification = Notification;
// sweet alert start
import Swal from 'sweetalert2'
window.Swal = Swal;
 
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
window.Toast = Toast
// sweet alert end
const router = new VueRouter({
    routes,
    mode: 'history'
});
const app = new Vue({
    el: '#app',
    router
});
