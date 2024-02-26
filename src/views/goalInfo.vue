<template>
  <div>
    <div class="container mt-4">
      <b-card>
        <p>목표 진행률(Progress Bar)</p>
      </b-card>
    </div>
    <div class="container mt-4">
      <b-card>
        <h3>목표 디테일</h3>
        <p>{{ card.text }}</p>
      </b-card>
    </div>
    <div class="container mt-4">
      <b-card>
        <h3>설정된 규칙</h3>
        <p>{{ card.rule }}</p>
        <template v-if="card.rule === '매주'">
            <p>Days: {{ card.days.join(', ') }}</p>
            <p>Time: {{ card.time }}</p>
          </template>
          <template v-else-if="card.rule === '매일'">
            <p>Time: {{ card.time }}</p>
          </template>
          <template v-else-if="card.rule === '매월'">
            <p>Dates: {{ card.dates.join(', ') }}</p>
            <p>Time Range: {{ card.timeRange }}</p>
          </template>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
    return {
      card: null,
    };
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
}
</script>

<style>

</style>