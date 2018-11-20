import Vue from 'vue';
import Vuex from 'vuex';

import user from './user.store'
import login from './login.store'
import navigation from './navigation.store'
import {getField, updateField} from 'vuex-map-fields';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //
    test: "test"
  },
  modules: {
    user,
    login,
    navigation
  }


});

export default store;
