let login = require('./components/auth/login').default;
let register = require('./components/auth/register').default;
let forget = require('./components/auth/forget').default;
let home = require('./components/home').default;
let logout = require('./components/auth/logout').default;
let addEmployee = require('./components/employee/create').default;

export const routes = [
  { path: '/', component: login, name: '/' },
  { path: '/register', component: register, name: 'register' },
  { path: '/forget-password', component: forget, name: 'forget' },
  { path: '/home', component: home , name: 'home'},
  { path: '/logout', component: logout, name: 'logout' },
  { path: '/add-employee', component: addEmployee, name: 'addEmployee' },
]