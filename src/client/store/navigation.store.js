import {getField, updateField} from 'vuex-map-fields';


export default {
  namespaced: true,
  state: {
    index: 0,
    items: [{
      name: 'home',
      path: '/home',
      icon: 'home.ico',
      hasClose: false
    }, {
      name: 'about',
      path: '/about',
      icon: 'about.ico',
      hasClose: true
    }]
  },
  mutations: {
    updateField,
    changeSelect(state, i) {
      state.index = i;
    },
    init(state, i) {
      state.index = i;
    }
  },
  getters: {
    getField
  },
  actions: {
    select({commit, state}, paylod) {
      let {i, $router} = paylod;
      commit('changeSelect', i);
      $router.push(state.items[i].path);

    },
    init({commit,state}, fullPath) {

      let {items} = state;
      let index = 0;

      items.forEach((item,i)=>{
        if(item.path == fullPath){
          index = i
        }
      })

      commit('init', index);
    }

  }
}
