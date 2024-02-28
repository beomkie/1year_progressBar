<template>
  <div>
    <header>
      <headerBack :title="card ? card.subject : '제목이 비었습니다.'" :backRoute="'Home'" />      
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
    <div>
      <b-button @click="showDeleteModal" variant="danger" style="margin-left: 0px; margin-top: 30px;">
        삭제하기
      </b-button>
      <!-- 삭제 확인 모달 -->
      <Modal
        :modalId="'deleteConfirmation'"
        title="카드 삭제"
        @close="cancelDelete"
        @delete="deleteCard"
      >
        <p>정말로 이 카드를 삭제하시겠습니까?</p>
      </Modal>
    </div>
    
    <!-- DataBase Test -->
    <div class="container mt-4" v-if="card">
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
          <template v-else-if="card.rule === '매월' && Array.isArray(card.dates)">
            <p>Dates: {{ card.dates.join(', ') }}</p>
            <p>Time Range: {{ card.timeRange }}</p>
          </template>
        </div>
      </b-card>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import Modal from '@/components/deleteModalView.vue';
import axios from 'axios';

export default {
  components: {
    headerBack,
    Modal,
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
    showDeleteModal() {
      // 삭제 확인 모달 열기
      this.$bvModal.show('deleteConfirmation');
    },
    cancelDelete() {
      // 삭제 취소 시 모달 닫기
      this.$bvModal.hide('deleteConfirmation');
    },
    async deleteCard() {
      const cardId = this.$route.params.id;
      try {
        // 서버에 DELETE 요청을 보냄
        await axios.delete(`http://localhost:3000/card/${cardId}`);
        console.log('Card deleted successfully.');
        // 삭제 후 홈 화면으로 이동
        this.$router.push('/');
      } catch (error) {
        console.error('Error deleting card:', error);
      }
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
