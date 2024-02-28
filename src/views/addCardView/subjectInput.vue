<template>
    <div class="container mt-4">
      <b-card class="cardStyle">
        <b-form @submit.prevent="submitForm">
          <b-form-group label="목표 제목 설정하기" label-for="subject" class="mb-5">
            <b-form-input v-model="subjectSet" id="subject" placeholder="목표 제목을 입력하세요." class="form-control"></b-form-input>
          </b-form-group>
          
          <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3">다음</b-button>
          <b-button type="button" @click="goToPreviousStep" variant="outline-secondary" class="w-100">이전</b-button>
        </b-form>
      </b-card>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      subjectSet: {
        get() {
          return this.$store.state.formData.subject;
        },
        set(value) {
          this.$store.commit('updateSubjectData', { subject: value });
        },
      }
    },
    methods: {
      goToNextStep() {
        const subject = this.subjectSet;
        this.$store.dispatch('updateSubjectAndNavigate', { subject, router: this.$router });
      },
      goToPreviousStep() {
      // 이전 단계로 이동하고 Vuex의 상태에서 제목을 초기화합니다.
      this.$store.dispatch('goToPreviousStep');
      },
      
    },

  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .mb-3 {
    margin-bottom: 1.5rem;
  }
  .cardStyle {
    border: 0px;
  }
  
  /* 모바일에서 폼 너비를 조정 */
  @media (max-width: 576px) {
    .form-control {
      width: 100%;
    }
  }
  
  /* 버튼 너비를 조정하여 가로 폭 꽉 차게 */
  .b-button {
    width: 100%;
  }
  </style>
  