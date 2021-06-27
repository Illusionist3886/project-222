import { createWebHistory, createRouter } from 'vue-router';

//main view
import mainView from './components/Main'

// basic pages
import login from './components/Login'

//pages
import dashboard from './views/Dashboard'

const routes = [
  // dashbord router
  {
    path: '/',
    redirect: '/dashboard',
    component: mainView,
    // dashboard auth guard
    beforeEnter(to, from, next){
        if(!isLogin()){
          next('/login')
        } else {
          next()
        }
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        meta: { sideBarKey: 'Dashboard' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  }
];

const isLogin =  function () {
  // validate session 
    if(localStorage.getItem('ual-session-authenticator')) {
        return true
    } else {
        return false
    }
}


// create router with web history
const router = createRouter({
	history: createWebHistory(),
	routes,
});


// export the router
export default router;