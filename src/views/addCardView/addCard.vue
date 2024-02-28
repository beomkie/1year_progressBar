<template>
    <div>
        <div>
          <headerBack title="목표 추가하기" :backRoute="'Home'" />
        </div>
        <div>
          <IconSelection v-if="currentStep === 1" @nextStep="nextStep"  />
          <SubjectSetting v-if="currentStep === 2" @nextStep="nextStep" @previousStep="previousStep" />
          <TextSetting v-if="currentStep === 3" @nextStep="nextStep" @previousStep="previousStep" />
          <RuleSetting v-if="currentStep === 4" @submitForm="submitForm" @previousStep="previousStep"  />
        </div>
    </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import IconSelection from '@/views/addCardView/iconSelection.vue';
import SubjectSetting from '@/views/addCardView/subjectInput.vue';

export default {
  components: {
    headerBack,
    // goalSet,
    IconSelection,
    SubjectSetting,
  },
  data() {
    return {
      currentStep: 1,
      formData: {
        // 각 섹션에서의 입력 데이터
        icon: null,
        subject: '',
        text: '',
        rule: null,
        days: [],
        time: null,
        dates: null,
        timeRange: null,
      },
    };
  },
  methods: {
    nextStep(number) {
      this.currentStep == number
      console.log('did it!!! ^_^')
    },
    previousStep() {
      this.currentStep--;
      if (this.currentStep === 1) {
        this.resetFormData(); // 뒤로가기를 누르면 데이터 초기화
      }
    },
    submitForm() {
      // 폼 제출 처리
    },
  },
  
};
</script>

<style scoped>

</style>
