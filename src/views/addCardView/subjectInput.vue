<template>
  <div class="form-setup">
    <b-form @submit.prevent="submitSubject">
      <b-form-group label="목표 제목 설정하기" label-for="title" class="mb-5">
        <b-form-input v-model="title" id="title" placeholder="목표 제목을 입력하세요." class="form-control"></b-form-input>
      </b-form-group>
      <!-- 아무것도 입력하지 않았을 때 에러 메시지 표시 -->
      <div v-if="!title && showErrorMessage" class="text-danger mt-2">제목을 입력하지 않았습니다!</div>
      <div class="button-container">
        <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px;">다음</b-button>
        <b-button @click="previousStep" variant="outline-secondary" class="w-100" style="height: 50px;">이전</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: '', // title 데이터 정의
      showErrorMessage: false // 에러 메시지 표시 여부
    };
  },
  computed: {
    addSubject: {
      get() {
        return this.$store.state.formData.title;
      },
      set(value) {
        this.$store.commit('updateFormData', { title: value });
      },
    },      
  },
  methods: {
    ...mapActions(['updateTitleAndNavigate', 'goToPreviousStep']),

    goToNextStep() {
      const title = this.title;
      if (!title) {
        this.showErrorMessage = true; 
        return;
      }
      this.showErrorMessage = false;
      // 다음 단계로 이동
      this.$store.dispatch('updateTitleAndNavigate', { title, router: this.$router })
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
};
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
