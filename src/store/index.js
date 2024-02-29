// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

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
    currentStep: 1, // 초기값은 1로 설정
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    updateSubjectData(state, payload) {
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
      commit('updateFormData', { icon });
      // Navigate to the next step
      router.push('subjectinput');
    },
    updateSubjectAndNavigate({ commit }, { subject, router }) {
      commit('updateFormData', { subject });
      // Navigate to the next step
      router.push('/next-step');
    },
    goToPreviousStep({ commit }) {
      // Reset subject and navigate to previous step
      commit('updateFormData', { subject: '' });
      // Decrement currentStep
      console.log('Going to previous step');
    },
    goToPreviousAllreset({ commit }) {
      commit('resetFormData');
    },
  },
});
