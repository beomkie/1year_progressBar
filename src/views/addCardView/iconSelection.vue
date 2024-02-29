<template>
  <div>
    <b-form-select v-model="selectedIcon" :options="iconOptions" id="icon" class="form-control"></b-form-select>
    <!-- 아이콘 미션택에 대한 에러 메시지 -->
    <div v-if="!selectedIcon && showErrorMessage" class="text-danger mt-2">아이콘을 선택하지 않았습니다!</div>
    <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3">다음</b-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      showErrorMessage: false // 에러 메시지 표시 여부
    };
  },
  computed: {
    selectedIcon: {
      get() {
        return this.$store.state.formData.icon;
      },
      set(value) {
        this.$store.commit('updateFormData', { icon: value });
      },
    },
    iconOptions() {
      return [
        { text: '아이콘 선택하기', value: null },
        { text: '🏃', value: '🏃' },
        { text: '📚', value: '📚' },
        { text: '💵', value: '💵' },
        { text: '🏠', value: '🏠' },
      ];
    },
  },
  methods: {
    ...mapActions(['updateIconAndNavigate']), // mapActions를 사용하여 액션 매핑

    goToNextStep() {
      const icon = this.selectedIcon;
      // 아이콘 선택 여부 확인
      if (!icon) {
        this.showErrorMessage = true; // 에러 메시지 표시
        return;
      }
      this.$store.dispatch('updateIconAndNavigate', { icon, router: this.$router });
    },
    // goToPrevious() {
    //   // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
    //   this.goToPreviousAllreset();
    //   // 이전 페이지로 이동하는 코드
    //   this.$router.go(-1); // 이전 페이지로 이동
    // },
  },
};
</script>
