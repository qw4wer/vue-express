import {getField, updateField} from 'vuex-map-fields';


import api from '../apis'
import Vue from "vue";


export default {
  namespaced: true,
  state: {
    userName: "",
    userPwd: "",
    loginIng: false,
    isLogin: false
  },
  mutations: {
    updateField,
    startLogin(state) {
      state.loginIng = true;
    },
    endLogin(state) {
      state.loginIng = false;
    },
    loginIn(state) {
      state.isLogin = true;
    },
    logout() {
      state.isLogin = false;
    }

  },
  getters: {
    getField
  },
  actions: {
    login({commit}, $router) {

      commit('startLogin');

      // setTimeout(function () {
      //   commit('loginIn');
      //   commit('endLogin');
      //
      //   $router.push("/index");
      // }, 1000)

      // axios.post('http://127.0.0.1:3000/users/login',{userName:"admin",userPwd:"a123456"}).then(data=>{
      //   console.log(data);
      // }).finally(()=>{
      //   commit('endLogin');
      // })
      console.log("user login...");
      api.login("admin", "a123456").then(data => {
        console.log(data);
      }).finally(() => {
        commit('endLogin');
      })


    }

  }


}
