<template>
    <div class="container mt-4">
      <b-form @submit.prevent="goToNextStep">
        <b-form-group label="규칙 설정하기" label-for="rule" class="mb-5">
          <b-form-select v-model="rule" :options="rules" id="rule" class="form-control"></b-form-select>
        </b-form-group>
  
        <!-- 매주 선택 시 요일과 시간 입력 -->
        <template v-if="rule === '매주'">
          <b-form-group label="요일 선택하기:" label-for="days" class="mb-3">
            <b-form-select v-model="days" :options="daysOptions" id="days" class="form-control" multiple></b-form-select>
          </b-form-group>
          <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
            <b-form-input v-model="time" type="time" id="time" class="form-control"></b-form-input>
          </b-form-group>
        </template>
  
        <!-- 매일 선택 시 시간 입력 -->
        <template v-else-if="rule === '매일'">
          <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
            <b-form-input v-model="time" type="time" id="time" class="form-control"></b-form-input>
          </b-form-group>
        </template>
  
        <!-- 매월 선택 시 날짜와 시간대 입력 -->
        <template v-else-if="rule === '매월'">
          <b-form-group label="날짜 선택하기:" label-for="dates" class="mb-3">
            <b-form-select v-model="dates" :options="datesOptions" id="dates" class="form-control"></b-form-select>
          </b-form-group>
          <b-form-group label="시간대 선택하기:" label-for="timeRange" class="mb-3">
            <b-form-select v-model="timeRange" :options="timeRangeSet" id="timeRange" class="form-control"></b-form-select>
          </b-form-group>
        </template>
  
        <b-button type="submit" variant="primary" class="w-100 mt-3">목표 생성하기</b-button>
        <b-button @click="previousStep" variant="outline-secondary" class="w-100">이전</b-button>
      </b-form>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data() {
      return {
        rule: null,
        days: [],
        time: null,
        dates: null,
        timeRange: null,
        showSubjectError: false, // 제목 에러 표시 여부
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
      timeRangeSet() {
        // 시간대 옵션
        return [
          { text: '오전', value: '오전' },
          { text: '오후', value: '오후' },
        ];
      },
    },
    methods: {
      ...mapActions(['updateRulesAndNavigate', 'goToPreviousStep']),
  
      goToNextStep() {
        const { rule, days, time, dates, timeRange } = this;
  
        const form = { rule, days, time, dates, timeRange };
        this.$store.dispatch('updateRulesAndNavigate', { form, router: this.$router })
            .then(() => {
        console.log(this.$store.getters.formData); // 데이터 업데이트 후 콘솔에 출력
        });
      },
      previousStep() {
        // 이전으로 가기 버튼 클릭 시 goToPreviousStep 액션 실행
        this.goToPreviousStep(['contents']); // 초기화할 필드 목록 전달
        this.$router.go(-1);
      },
    },
  };
  </script>
  
  <style>
  /* 추가적인 스타일링 */
  </style>
  