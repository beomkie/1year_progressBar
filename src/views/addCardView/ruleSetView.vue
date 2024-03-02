<template>
  <div class="form-setup">
    <b-form @submit.prevent="updateRulesAndCreateGoal">
      <b-form-group label="규칙 설정하기" label-for="rule" class="mb-5">
        <b-form-select v-model="ruleData.rule" :options="rules" id="rule" class="form-control"></b-form-select>
      </b-form-group>

      <!-- 매주 선택 시 요일과 시간 입력 -->
      <template v-if="ruleData.rule === '매주'">
        <b-form-group label="요일 선택하기:" label-for="days" class="mb-3">
          <b-form-select v-model="ruleData.days" :options="daysOptions" id="days" class="form-control" multiple></b-form-select>
        </b-form-group>
        <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
          <b-form-input v-model="ruleData.time" type="time" id="time" class="form-control"></b-form-input>
        </b-form-group>
      </template>

      <!-- 매일 선택 시 시간 입력 -->
      <template v-else-if="ruleData.rule === '매일'">
        <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
          <b-form-input v-model="ruleData.time" type="time" id="time" class="form-control"></b-form-input>
        </b-form-group>
      </template>

      <!-- 매월 선택 시 날짜와 시간대 입력 -->
      <template v-else-if="ruleData.rule === '매월'">
        <b-form-group label="날짜 선택하기:" label-for="dates" class="mb-3">
          <b-form-select v-model="ruleData.dates" :options="datesOptions" id="dates" class="form-control"></b-form-select>
        </b-form-group>
        <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
          <b-form-select v-model="ruleData.time" type="time" id="time" class="form-control"></b-form-select>
        </b-form-group>
      </template>
      <!-- 바인딩 테스트 -->
      <div class="mt-3">
        <p>선택된 규칙: {{ ruleData.rule }}</p>
        <p>선택된 요일: {{ ruleData.days }}</p>
        <p>선택된 시간: {{ ruleData.time }}</p>
        <p>선택된 날짜: {{ ruleData.dates }}</p>
      </div>
      <div class="button-container">
        <b-button type="submit" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px;">목표 생성하기</b-button>
        <b-button @click="previousStep" variant="outline-secondary" class="w-100" style="height: 50px;">이전</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      ruleData: {
        rule: null,
        days: [],
        time: null,
        dates: null,
      },
    };
  },
  computed: {
    ...mapGetters(['formData']), // formData getter 추가

    // 현재 선택된 규칙에 맞게 options 설정
    rules() {
      return [
        { text: '매주', value: '매주' },
        { text: '매일', value: '매일' },
        { text: '매월', value: '매월' },
      ];
    },
    daysOptions() {
      return [
        { text: '월요일', value: '월요일' },
        { text: '화요일', value: '화요일' },
        { text: '수요일', value: '수요일' },
        { text: '목요일', value: '목요일' },
        { text: '금요일', value: '금요일' },
        { text: '토요일', value: '토요일' },
        { text: '일요일', value: '일요일' },
      ];
    },
    datesOptions() {
      // 매월 선택 시 날짜 옵션
      const options = [];
      for (let i = 1; i <= 31; i++) {
        options.push({ text: i + '일', value: i });
      }
      return options;
    },
  },
  methods: {
    ...mapActions(['updateRulesAndNavigate', 'goToPreviousStep', 'createGoalAction']),

    async updateRulesAndCreateGoal() {
      const rules = this.ruleData
      if (!rules) {
        this.showErrorMessage = true;
        console.log(rules)
        return;
      }
      this.showErrorMessage = false;

      const created = await this.createGoalAction({ formData: this.ruleData }); // ruleData 전달
      if (created) {
        // 생성 성공
        // 이후 필요한 동작 수행 (예: 다음 단계로 네비게이션)
        this.$router.push('/');
      } else {
        // 생성 실패
        console.log('Fail to create the Goal')
      }
    },

    previousStep() {
      // 이전으로 가기 버튼 클릭 시 goToPreviousStep 액션 실행
      this.goToPreviousStep(['contents']); // 초기화할 필드 목록 전달
      this.$router.go(-1);
    },
  },
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
