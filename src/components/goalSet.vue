<template>
  <div>
    <!-- 폼 -->
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="subject-style">
      <!-- 아이콘 선택 -->
      <b-form-group id="input-group-3" label="아이콘 선택하기:" class="icon-select-style">
        <b-form-select v-model="form.icon" :options="icon" required></b-form-select>
      </b-form-group>
      <!-- 목표 제목 입력 -->
      <b-form-group id="input-group-1" label="목표 제목 설정하기:" label-for="input-1" description="올해 이루고자 하는 목표의 제목을 설정해보세요." class="label-style">
        <b-form-input id="input-1" v-model="form.subject" type="string" placeholder="마음먹은 목표의 제목을 설정하세요." required></b-form-input>
      </b-form-group>
      <!-- 목표 내용 입력 -->
      <b-form-group id="input-group-2" label="도달하고자 하는 목표를 구체화해보세요:" label-for="input-2" class="label-style">
        <b-form-textarea id="input-2" v-model="form.text" placeholder="도달하고자 하는 목표를 구체적으로 작성해보세요." rows="3" max-rows="6" required></b-form-textarea>
      </b-form-group>
      <!-- 규칙 선택 -->
      <b-form-group id="input-group-4" label="규칙 설정하기:" class="label-style">
        <b-form-select v-model="form.rule" :options="rules" required></b-form-select>
      </b-form-group>
      <!-- 규칙에 따른 추가 입력 필드 -->
      <template v-if="form.rule === '매주'">
        <b-form-group id="input-group-5" label="요일 선택하기:" class="label-style">
          <b-form-select v-model="form.day" :options="days" required></b-form-select>
        </b-form-group>
      </template>
      <template v-else-if="form.rule === '매일'">
        <b-form-group id="input-group-6" label="시간 선택하기:" class="label-style">
          <b-form-input v-model="form.time" type="time" required></b-form-input>
        </b-form-group>
      </template>
      <template v-else-if="form.rule === '매월'">
        <b-form-group id="input-group-7" label="날짜 선택하기:" class="label-style">
          <b-form-input v-model="form.date" type="date" required></b-form-input>
        </b-form-group>
      </template>
      <!-- 제출 버튼 -->
      <b-button type="submit" variant="primary" style="margin:20px;">목표 세우기</b-button>
    </b-form>
    <!-- 결과 카드 바인딩 테스트용 -->
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        icon: null,
        subject: '',
        text: '',
        rule: null, // 새로운 폼 필드: 규칙 선택
        day: null, // 새로운 폼 필드: 요일 선택
        time: null, // 새로운 폼 필드: 시간 선택
        date: null, // 새로운 폼 필드: 날짜 선택
      },
      icon: [{ text: '아이콘 선택하기', value: null }, '🏃', '📚', '💵', '🏠'],
      rules: ['매주', '매일', '매월'], // 새로운 폼 필드: 규칙 선택 옵션
      days: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'], // 새로운 폼 필드: 요일 선택 옵션
      show: true,
    };
  }, 
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.subject = '';
      this.form.text = '';
      this.form.icon = null;
      this.form.rule = null;
      this.form.day = null;
      this.form.time = null;
      this.form.date = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.subject-style {
  margin-top: 40px;
}
.label-style {
  font-weight: 600;
  text-align: left;
  margin: 15px;
  margin-bottom: 30px;
}
.icon-select-style {
  text-align: left;
  margin-left: 15px;
  font-weight: 600;
}
</style>