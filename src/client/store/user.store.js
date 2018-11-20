export default {
  namespaced: true,
  state: {
    isLogin: false

  },
  mutations: {
    test(state, n) {
      console.log(n);
      state.test = n;
    }
  }


}
