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
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    updateSubjectData(state,payload) {
      state.formData = { ...state.formData, ...payload};
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
    updateIconAndNavigate({ commit }, { icon }) {
      commit('updateFormData', { icon });
      // Navigate to the next step
      // router.push('/subjectinput');
    },
    updateSubjectAndNavigate({ commit }, { subject, router }) {
      commit('updateFormData', { subject });
      // Navigate to the next step
      router.push('/next-step');
    },
    goToPreviousStep({ commit }) {
      // Reset subject and navigate to previous step
      commit('updateFormData', { subject: '' });
      // In a real app, you would navigate to the previous step here
      // For demonstration purposes, let's log a message
      console.log('Going to previous step');
    },
    goToPreviousAllreset({commit}) {
      commit('resetFormData');
      console.log('Reset All');
    }
  },
});

