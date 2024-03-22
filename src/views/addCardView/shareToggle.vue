<template>
  <div>
    <p>share Toggle</p>
    <!-- <b-button type="submit" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px;">목표 생성하기</b-button> -->
  </div>
</template>

<script>
export default {
  // methods: {
  //   ...mapActions(['updateRulesAndNavigate', 'goToPreviousStep', 'createGoalAction']),

  //   async updateRulesAndCreateGoal() {
  //     const rules = this.ruleData
  //     if (!rules) {
  //       this.showErrorMessage = true;
  //       console.log(rules)
  //       return;
  //     }
  //     this.showErrorMessage = false;

  //     const created = await this.createGoalAction({ formData: this.ruleData }); // ruleData 전달
  //     if (created) {
  //       // 생성 성공
  //       // 이후 필요한 동작 수행 (예: 다음 단계로 네비게이션)
  //       this.$router.push('/');
  //     } else {
  //       // 생성 실패
  //       console.log('Fail to create the Goal')
  //     }
  //   },

  //   previousStep() {
  //     // 이전으로 가기 버튼 클릭 시 goToPreviousStep 액션 실행
  //     this.goToPreviousStep(['contents']); // 초기화할 필드 목록 전달
  //     this.$router.go(-1);
  //   },
  // },

}
</script>

<style scoped>

</style>