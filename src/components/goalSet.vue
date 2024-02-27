<template>
  <div class="container mt-4">
    <b-card class="cardStyle">
      <b-form @submit.prevent="submitForm" @reset="onReset">
        <b-form-group label="아이콘 선택하기" label-for="icon" class="mb-5">
          <b-form-select v-model="form.icon" :options="iconOptions" id="icon" class="form-control"></b-form-select>
        </b-form-group>
        
        <b-form-group label="목표 제목 설정하기" label-for="subject" class="mb-5">
          <b-form-input v-model="form.subject" id="subject" placeholder="목표 제목을 입력하세요." class="form-control"></b-form-input>
        </b-form-group>
        
        <b-form-group label="도달하고자 하는 목표를 구체화해보세요" label-for="text" class="mb-5">
          <b-form-textarea v-model="form.text" id="text" placeholder="도달하고자 하는 목표를 구체적으로 작성해보세요." rows="3" max-rows="6" class="form-control"></b-form-textarea>
        </b-form-group>
        
        <b-form-group label="규칙 설정하기" label-for="rule" class="mb-5">
          <b-form-select v-model="form.rule" :options="rules" id="rule" class="form-control"></b-form-select>
        </b-form-group>
        
        <template v-if="form.rule === '매주'">
          <b-form-group label="요일 선택하기:" label-for="days" class="mb-3">
            <b-form-select v-model="form.days" :options="daysOptions" id="days" class="form-control" multiple></b-form-select>
          </b-form-group>
          <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
            <b-form-input v-model="form.time" type="time" id="time" class="form-control"></b-form-input>
          </b-form-group>
        </template>
        
        <template v-else-if="form.rule === '매일'">
          <b-form-group label="시간 선택하기:" label-for="time" class="mb-3">
            <b-form-input v-model="form.time" type="time" id="time" class="form-control"></b-form-input>
          </b-form-group>
        </template>
        
        <template v-else-if="form.rule === '매월'">
          <b-form-group label="날짜 선택하기:" label-for="dates" class="mb-3">
            <b-form-select v-model="form.dates" :options="datesOptions" id="dates" class="form-control"></b-form-select>
          </b-form-group>
          <b-form-group label="시간 선택하기:" label-for="timeRange" class="mb-3">
            <b-form-select v-model="form.timeRange" :options="timeRange" id="timeRange" class="form-control"></b-form-select>
          </b-form-group>
        </template>
        
        <b-button type="submit" variant="primary" class="w-100 mb-3">목표 세우기</b-button>
        <b-button type="reset" variant="outline-secondary" class="w-100">초기화</b-button>
      </b-form>
    </b-card>
    
    <!-- 결과 카드 바인딩 테스트용 -->
    <b-card class="mt-3" header="Data Binding Test">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        icon: null,
        subject: '',
        text: '',
        rule: null,
        days: [],
        time: null,
        dates: null,
        timeRange: null,
      },
      iconOptions: [
        { text: '아이콘 선택하기', value: null },
        { text: '🏃', value: '🏃' },
        { text: '📚', value: '📚' },
        { text: '💵', value: '💵' },
        { text: '🏠', value: '🏠' },
      ],
      rules: ['매주', '매일', '매월'],
      daysOptions: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
      datesOptions: Array.from({ length: 31 }, (_, i) => i + 1),
      timeRange: ['오전', '오후'],
    };
  },
  methods: {
    async submitForm() {
      try {
        const res = await axios.post('http://localhost:3000/card', this.form);
        console.log('Data saved:', res.data);
        this.$emit('formSubmitted', this.form);
        this.$router.push('/');
      } catch (error) {
        console.error('Error saving data:', error);
      }
    },
    onReset() {
      this.form = {
        icon: null,
        subject: '',
        text: '',
        rule: null,
        days: [],
        time: null,
        dates: null,
        timeRange: null,
      };
    },
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.mb-3 {
  margin-bottom: 1.5rem;
}
.cardStyle {
  border: 0px;
}
/* 모바일에서 폼 너비를 조정 */
@media (max-width: 576px) {
  .form-control {
    width: 100%;
  }
}

/* 버튼 너비를 조정하여 가로 폭 꽉 차게 */
.b-button {
  width: 100%;
}
</style>
