<template>
  <div>
    <div class="container mt-4">
      <div class="progress-container">
        <p>목표 진행률(Progress Bar)</p>
        <progressBar />
      </div>
    </div>
    <div class="container mt-4">
      <div class="contetnts-style">
        <h3>목표 디테일</h3>
        <p style="text-align: left;">{{ card && card.text ? card.text : '목표가 없습니다.' }}</p>
      </div>
    </div>
    <div class="container mt-4">
      <div class="rule-style">
        <h3>설정된 규칙</h3>
        <p>{{ card && card.rule ? card.rule : '규칙이 설정되지 않았습니다.' }}</p>
        <template v-if="card && card.rule === '매주'">
          <p>Days: {{ card.days && card.days.length > 0 ? card.days.join(', ') : '매주 수행할 날짜가 없습니다.' }}</p>
          <p>Time: {{ card.time ? card.time : '시간이 설정되지 않았습니다.' }}</p>
        </template>
        <template v-else-if="card && card.rule === '매일'">
          <p>Time: {{ card.time ? card.time : '시간이 설정되지 않았습니다.' }}</p>
        </template>
        <template v-else-if="card && card.rule === '매월'">
          <p>Dates: {{ card.dates && card.dates.length > 0 ? card.dates.join(', ') : '매월 수행할 날짜가 없습니다.' }}</p>
          <p>Time Range: {{ card.time ? card.time : '시간이 설정되지 않았습니다.' }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import progressBar from '@/components/progressBar.vue';

export default {
  data() {
    return {
      card: null,
    };
  },
  components: {
    progressBar,
  },
  mounted() {
    this.fetchCardData();
  },
  methods: {
    async fetchCardData() {
      const cardId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:3000/card/${cardId}`);
        this.card = response.data;
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    },
  },
};
</script>

<style scoped>
.progress-container {
  margin-top: 30px;
  margin-bottom: 60px;
}
.contetnts-style {
  margin-top: 40px;
  margin-bottom: 60px;
}
.contetnts-style h3 {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20px;
}
.contetnts-style p {
  margin: 10px;
}
.rule-style{
  margin-bottom: 60px;
}
.rule-style h3 {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20px;
}

</style>
