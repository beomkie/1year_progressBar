<template>
  <div class="form-setup">
    <b-form @submit.prevent="updateRulesAndCreateGoal">
      <b-form-group class="form-container">
        <div class="title-container">
          <h1>규칙 설정하기</h1>
        </div>
        <div>
          <b-button-group class="selectrule-container">
            <b-button @click="selectRule(1)" :variant="(ruleData.routine === 1) ? 'primary' : 'outline-secondary'">매일</b-button>
            <b-button @click="selectRule(2)" :variant="(ruleData.routine === 2) ? 'primary' : 'outline-secondary'">매주</b-button>
            <b-button @click="selectRule(3)" :variant="(ruleData.routine === 3) ? 'primary' : 'outline-secondary'">매월</b-button>
          </b-button-group>
        </div>
        <!-- <b-form-select v-model="ruleData.rule" :options="rules" id="rule" class="form-control"></b-form-select> -->
      </b-form-group>

      <!-- 매주 선택 시 요일과 시간 입력 -->
      <template v-if="ruleData.routine === 2">
        <b-form-group label="요일 선택하기:" label-for="days" class="subform-container">
          <b-form-select v-model="ruleData.ruleRepeatList" :options="daysOptions" id="days" class="form-control" multiple></b-form-select>
        </b-form-group>
        <b-form-group label="시간 선택하기:" label-for="time" class="subform-container">
          <b-form-input v-model="ruleData.timeAt" type="time" id="time" class="form-control"></b-form-input>
        </b-form-group>
        <b-form-group label="매주 할 일" label-for="contents" class="subform-container">
          <b-form-textarea v-model="ruleData.contents" placeholder="매주 실행할 행위를 작성해 보세요." rows="3" max-rows="100" required></b-form-textarea>
        </b-form-group>
      </template>

      <!-- 매일 선택 시 시간 입력 -->
      <template v-else-if="ruleData.routine === 1">
        <b-form-group label="시간 선택하기:" label-for="time" class="subform-container">
          <b-form-input v-model="ruleData.timeAt" type="time" id="time" class="form-control"></b-form-input>
        </b-form-group>
        <b-form-group label="매일 할 일" label-for="contents" class="subform-container">
          <b-form-textarea v-model="ruleData.contents" placeholder="매일 실행할 행위를 작성해 보세요." rows="3" max-rows="100" required></b-form-textarea>
        </b-form-group>
      </template>

      <!-- 매월 선택 시 날짜와 시간대 입력 -->
      <template v-else-if="ruleData.routine === 3">
        <b-form-group label="날짜 선택하기:" label-for="dates" class="subform-container">
          <b-form-select v-model="ruleData.ruleRepeatList" :options="datesOptions" id="dates" class="form-control"></b-form-select>
          <!-- <b-form-datepicker id="dates" v-model="ruleData.dates" class="form-control"></b-form-datepicker> -->
        </b-form-group>
        <b-form-group label="시간 선택하기:" label-for="time" class="subform-container">
          <b-form-input v-model="ruleData.timeAt" type="time" id="time" class="form-control"></b-form-input>
        </b-form-group>
        <b-form-group label="매월 할 일" label-for="contents" class="subform-container">
          <b-form-textarea v-model="ruleData.contents" placeholder="매월 실행할 행위를 작성해 보세요." rows="3" max-rows="100" required></b-form-textarea>
        </b-form-group>
      </template>
      <p
          v-if="showErrorMessage"
          class="text-danger mt-2"
        >
          규칙을 설정해야 합니다.
      </p>

      <!-- 바인딩 테스트 -->
      <!-- <div class="mt-3">
        <p>선택된 규칙: {{ ruleData.routine }}</p>
        <p>선택된 요일: {{ ruleData.ruleRepeatList }}</p>
        <p>선택된 시간: {{ ruleData.timeAt }}</p>
        <p>선택된 날짜: {{ ruleData.ruleRepeatList }}</p>
      </div> -->
      <div class="button-container" v-if="ruleData.routine === 1 || ruleData.routine === 2 || ruleData.routine === 3">
        <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px;">다음</b-button>
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
        routine: null,
        ruleRepeatList: [],
        timeAt: " ",
        dates: null,
        contents: "",
      },
      showErrorMessage: false,
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
        { text: '월요일', value: 1 },
        { text: '화요일', value: 2 },
        { text: '수요일', value: 3 },
        { text: '목요일', value: 4 },
        { text: '금요일', value: 5 },
        { text: '토요일', value: 6 },
        { text: '일요일', value: 7 },
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
    ...mapActions(['updpateRulesAndNavigate', 'goToPreviousStep']),
    
    selectRule(rule) {
      this.ruleData.routine = rule;
    },

    goToNextStep() {
      const ruleReqDto = {
        routine: this.ruleData.routine,
        timeAt: this.ruleData.timeAt,
        contents: this.ruleData.contents,
        ruleRepeatList: this.ruleData.ruleRepeatList,
      };
      if (!this.ruleData.routine) {
        this.showErrorMessage = true;
        return;
      } 

      if (this.ruleData.routine === 1 && !this.ruleData.timeAt) {
        this.showErrorMessage = true;
      } else if (this.ruleData.routine === 2 && (!this.ruleData.ruleRepeatList || !this.ruleData.timeAt)) {
        this.showErrorMessage = true;
      } else if (this.ruleData.routine === 3 && (!this.ruleData.ruleRepeatList || !this.ruleData.timeAt)) {
        this.showErrorMessage = true;
      } else {
        this.showErrorMessage = false;
        // 다음 단계로 진행
      }
      this.$store.dispatch('updpateRulesAndNavigate', { ruleReqDto, router: this.$router})
      .then(() => {
        console.log(this.$store.getters.formData);        
      });
    },

    previousStep() {
      // 이전으로 가기 버튼 클릭 시 goToPreviousStep 액션 실행
      this.goToPreviousStep(['ruleData']); // 초기화할 필드 목록 전달
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
.form-container {
  margin-top: -20px;
}
.button-container {
  margin-top: 30px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  bottom: 100px;
  background-color: white;
}
.selectrule-container {
  display: flex;
  justify-content: center;
}
.title-container h1 {
  font-size: 20px;
  margin-bottom: 20px;
  color: black;
}
.subform-container {
  margin-top: 25px;
}
</style>
