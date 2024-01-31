// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 상태(데이터) 정의
    count: 0,
    // 추가적인 상태들...
  },
  mutations: {
    // 상태를 변경하는 메서드 정의
    increment(state) {
      state.count++;
    },
    // 추가적인 뮤테이션들...
  },
  actions: {
    // 비동기적인 작업을 처리하는 메서드 정의
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    // 추가적인 액션들...
  },
  getters: {
    // 상태를 가공하여 반환하는 게터 정의
    doubleCount(state) {
      return state.count * 2;
    },
    // 추가적인 게터들...
  },
});
