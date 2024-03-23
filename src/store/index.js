// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {
      title: " ",
      contents: " ",
      icon: " ",
      endDate: " ",
      shareStatus: null,
      goalStatus: null,
      ruleReqDto:
      {
        routine: null,
        timeAt: " ",
        contents: " ",
        ruleRepeatList: [],
      }
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.formData = { ...state.formData, ...payload };
    },
    resetFormData(state) {
      state.formData = {
        title: " ",
        contents: " ",
        icon: " ",
        endDate: " ",
        shareStatus: null,
        goalStatus: null,
        ruleReqDto:
        {
          routine: null,
          timeAt: " ",
          contents: " ",
          ruleRepeatList: [],
        }
      };
    },
  },
  actions: {
    //Icon 전역 저장 및 라우터 푸시
    updateIconAndNavigate({ commit }, { icon, router }) {
      console.log('Updating icon:', icon);
      commit('updateFormData', { icon });
      router.push('subjectinput');
    },
    //title 전역 저장 및 라우터 푸시
    updateTitleAndNavigate({ commit }, { title, router }) {
      commit('updateFormData', { title });
      router.push('contents');
    },
    //콘텐츠(텍스트) 전역 저장 및 푸시
    updateContentsAndNavigate({ commit },{ contents, router }) {
      commit('updateFormData', { contents });
      router.push('ruleSet');
    },
    //규칙(Rules) 전역 저장 및 푸시
    updpateRulesAndNavigate({ commit },{ ruleReqDto, router }) {
      commit('updateFormData', { ruleReqDto })
      router.push('deadline')
    },
    //마감일(deadline 전역 저장 및 푸시
    updateDeadlineAndNavigate({ commit },{ deadline, router }) {
      commit('updateDeadline',{ deadline })
      router.push('#')
    },
    async createGoalAction({ commit, state }) {
      try {
        const response = await axios.post('http://localhost:3000/card', state.formData);
        console.log('Goal created:', response.data);
        commit('resetFormData'); // 목표 생성 후 폼 초기화
        console.log('Create Goal Success..!! ^_^')
        return true; // 생성이 성공적으로 끝났음을 알려주는 값 반환
      } catch (error) {
        console.error('Error creating goal:', error);
        return false; // 생성에 실패했음을 알려주는 값 반환
      }
    },
    goToPreviousStep({ commit }, fieldsToReset) {
      const resetData = {};
  
      fieldsToReset.forEach(field => {
        resetData[field] = '';
      });
  
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
