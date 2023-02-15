let login = require('./components/auth/login').default;
let register = require('./components/auth/register').default;
let welcome = require('./components/auth/welcome').default;
let home = require('./components/home').default;
let logout = require('./components/auth/logout').default;
// let addUser = require('./components/user/create').default;
let userList = require('./components/user/index').default;

export const routes = [
  { path: '/', component: login, name: '/' },
  { path: '/register', component: register, name: 'register' },
  { path: '/welcome', component: welcome, name: 'welcome' },
  { path: '/home', component: home , name: 'home'},
  { path: '/logout', component: logout, name: 'logout' },
  // { path: '/add-user', component: addUser, name: 'addUser' },
  { path: '/user-list', component: userList, name: 'userList' },
]