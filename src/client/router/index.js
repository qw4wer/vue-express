import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/client/views/login';
import index from '@/client/views/index';


const home = () => require('../views/base/home.vue');
const about = () => require('../views/base/about.vue');

const ss = {a:10,b:20}
console.log(...ss)

// import store from '../store/navigation.store';
import store from '../store';

Vue.use(Router)


let router = new Router({
  mode: "history",
  routes: [
    {
          path: '/',
          name: 'index',
          component: index,
          children: [
              {
                  path: 'home',
                  name: 'home',
                  component: home
              },
              {
                  path: 'about',
                  name: 'about',
                  component: about
              }

          ]
      },
      {
          path: '/login',
          name: 'login',
          component: login
      },
    // ...common
  ]
});

router.beforeEach((to, from, next) => {
  console.log({to, from});
  store.dispatch("navigation/init",to.fullPath)
  next();
});

export default router;
