<template>
  <div>
    <header>
      <headerBack :title="card ? card.subject : '제목이 비었습니다.'"/>      
    </header>
    <div>
      <b-nav pills class="navStyle">
        <b-nav-item :active="selectedTab === 'info'" @click="selectTab('goalinfo')">목표정보</b-nav-item>
        <b-nav-item :active="selectedTab === 'review'" @click="selectTab('reflection')">회고</b-nav-item>
      </b-nav>
    </div>
    <div>
      <router-view />
    </div>
    
    <!-- DataBase Test -->
    <div class="container mt-4">
      <b-card>
        <div>
          <h1>#Database Test</h1>
          <p>ID: {{ card.id }}</p>
          <p>Text: {{ card.text }}</p>
          <p>Icon: {{ card.icon }}</p>
          <p>Rule: {{ card.rule }}</p>
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
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import axios from 'axios';

export default {
  components: {
    headerBack,
  },
  data() {
    return {
      card: null,
      selectedTab: 'info',
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
    selectTab(tab) {
      this.selectedTab = tab;
      // 해당 탭에 맞는 라우트로 이동
      this.$router.push({ name: tab, params: { id: this.$route.params.id } });
    },
  },
};
</script>

<style scoped>
.navStyle {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
