<template>
    <div class="form-setup">
      <b-form>
        <b-form-group label="목표 구체화" label-for="contents" class="mb-5">
          <b-form-textarea v-model="contents" placeholder="도달하고자 하는 목표를 구체적으로 작성해보세요." rows="3" max-rows="100" required></b-form-textarea>
        </b-form-group>
  
        <div v-if="!contents && showErrorMessage" class="text-danger mt-2">구체적인 목표를 입력해 보세요!</div>
        <div class="button-container">
          <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px">다음</b-button>
          <b-button @click="previousStep" variant="outline-secondary" class="w-100" style="height: 50px">이전</b-button>
        </div>
      </b-form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        contents: '',
        showErrorMessage: false
      };
    },
    methods: {
      ...mapActions(['updateContentsAndNavigate', 'goToPreviousStep']),
  
      goToNextStep() {
        const contents = this.contents;
        if (!contents) {
          this.showErrorMessage = true; // 아무것도 입력하지 않은 경우 에러 메시지 표시
          return;
        }
        this.showErrorMessage = false;
        this.$store.commit('updateFormData', { contents }); // contents를 직접 Vuex에 commit
        this.$store.dispatch('updateContentsAndNavigate', { contents, router: this.$router })
          .then(() => {
            console.log(this.$store.getters.formData); // 데이터 업데이트 후 콘솔에 출력
          });
  
      },
      previousStep() {
        // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
        this.goToPreviousStep(['subject']);
        this.$router.go(-1);
      },
    }
  
  }
  </script>
  
  <style scoped>
  .form-setup {
    padding: 20px;
    margin-top: 40px;
  }
  
  .button-container {
    position: fixed;
    margin-top: 30px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    bottom: 100px
  }
  </style>
  