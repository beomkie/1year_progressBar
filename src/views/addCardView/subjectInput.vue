<template>
  <div>
    <b-form @submit.prevent="submitSubject">
      <b-form-group label="목표 제목 설정하기" label-for="subject" class="mb-5">
        <b-form-input v-model="subject" id="subject" placeholder="목표 제목을 입력하세요." class="form-control"></b-form-input>
      </b-form-group>
      
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
      subject: '' // subject 데이터 정의
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
    ...mapActions(['updateSubjectAndNavigate']),

    goToNextStep() {
      const subject = this.addSubject
      this.$store.dispatch('updateSubjectAndNavigate', { subject, router: this.$router });
    },
    previousStep() {
      // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
      this.goToPreviousStep();
      // 이전 페이지로 이동하는 코드
      this.$router.go(-1); // 이전 페이지로 이동
    },
  }
};
</script>

<style scoped>
/* 필요한 스타일링 */
</style>
