<template>
  <div>
    <b-form @submit.prevent="submitSubject">
      <b-form-group label="목표 제목 설정하기" label-for="subject" class="mb-5">
        <b-form-input v-model="subject" id="subject" placeholder="목표 제목을 입력하세요." class="form-control"></b-form-input>
      </b-form-group>
      <!-- 아무것도 입력하지 않았을 때 에러 메시지 표시 -->
      <div v-if="!subject && showErrorMessage" class="text-danger mt-2">제목을 입력하지 않았습니다!</div>
      
      <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3">다음</b-button>
      <b-button @click="previousStep" variant="outline-secondary" class="w-100">이전</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      subject: '', // subject 데이터 정의
      showErrorMessage: false // 에러 메시지 표시 여부
    };
  },
  computed: {
    addSubject: {
      get() {
        return this.$store.state.formData.subject;
      },
      set(value) {
        this.$store.commit('updateFormData', { subject: value });
      },
    },      
  },
  methods: {
    ...mapActions(['updateSubjectAndNavigate', 'goToPreviousStep']),

    goToNextStep() {
      const subject = this.subject;
      if (!subject) {
        this.showErrorMessage = true; // 아무것도 입력하지 않은 경우 에러 메시지 표시
        return;
      }
      // 사용자가 입력한 경우 에러 메시지 숨김
      this.showErrorMessage = false;
      // 다음 단계로 이동
      this.$store.dispatch('updateSubjectAndNavigate', { subject, router: this.$router })
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
</style>
