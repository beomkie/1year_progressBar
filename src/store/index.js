// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
// import store from '@/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      icon: null,
      subject: '',
      text: '',
      rule: null,
      days: [],
      time: null,
      dates: null,
      timeRange: null,
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    resetFormData(state) {
      state.formData = {
        icon: null,
        subject: '',
        text: '',
        rule: null,
        days: [],
        time: null,
        dates: null,
        timeRange: null,
      };
    },
  },
  actions: {
    updateIconAndNavigate({ commit }, { icon, router }) {
      console.log('Updating icon:', icon); // 콘솔에 아이콘 값 확인
      commit('updateFormData', { icon });
      // Navigate to the next step
      router.push('subjectinput');
    },
    
    updateSubjectAndNavigate({ commit }, { subject, router }) {
      commit('updateFormData', { subject });
      // Navigate to the next step
      router.push('contents');
    },
    updateContentsAndNavigate({ commit },{ text, router }) {
      commit('updateFormData', { text });
      router.push('#');
    },
    goToPreviousStep({ commit }, fieldsToReset) {
      // 초기화할 필드를 가지고 있는 배열을 받아와서 필요한 데이터만 초기화
      const resetData = {};
  
      // 받아온 필드 배열을 기반으로 데이터 초기화
      fieldsToReset.forEach(field => {
        resetData[field] = ''; // 필드 초기화
      });
  
      // updateFormData 뮤테이션 호출하여 데이터 업데이트
      commit('updateFormData', resetData);
      console.log('Going to previous step');
    },
    goToPreviousAllreset({ commit }) {
      commit('resetFormData');
    },
  },
  getters: {
    formData(state) {
      return state.formData;
    },
  },
});

// 콘솔에 데이터 출력
// console.log(store.getters.formData);