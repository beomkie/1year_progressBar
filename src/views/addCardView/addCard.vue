<template>
  <div>
    <div>
      <headerBack title="목표 추가하기" :backRoute="'/'" @back="goBack" />
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    headerBack,
  },
  methods: {
    ...mapActions(['resetFormData']), // resetFormData 액션을 사용하기 위해 Vuex mapActions 사용

    goBack() {
      // Home으로 돌아갈 때 모든 데이터 초기화를 위해 resetFormData 액션 실행
      this.resetFormData();
    },
  },
};
</script>

<style scoped>
/* 필요한 스타일링 추가 */
</style>
