<template>
  <div>
    <header>
      <headerBack :title="card ? card.subject : 'Error :('" :backRoute="'/'" :icon="card.icon" />      
    </header>
    <TabSelector :selectedTabName="selectedTabName" :tabs="tabs" @tab-selected="selectTab" />
    <div>
      <router-view />
    </div>
    <div class="button-style" v-if="selectedTabName === 'goalinfo'">
      <b-button @click="goEditpage" variant="outline-primary" style="margin-bottom: 10px;">
        편집하기
      </b-button>
      <b-button @click="showDeleteModal" variant="danger">
        삭제하기
      </b-button>
    </div>

    <div>
      <!-- 삭제 확인 모달 -->
      <Modal
        :modalId="'deleteConfirmation'"
        title="목표카드 삭제하기"
        @close="cancelDelete"
        @delete="deleteCard"
      >
        <p>정말로 이 목표카드를 삭제하시겠습니까?</p>
        <p style="color: red;">삭제 이후 목표를 복원할 수 없습니다.</p>
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
import TabSelector from '@/components/selectTab.vue';
import Modal from '@/components/deleteModalView.vue';
import axios from 'axios';

export default {
  components: {
    headerBack,
    Modal,
    TabSelector,
  },
  data() {
    return {
      card: null,
      //Nav Select
      selectedTabName: 'goalinfo',
      tabs: [
        { name: 'goalinfo', label: '목표정보' },
        { name: 'reflection', label: '회고' }
      ]
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
    selectTab(tabName) {
      this.selectedTabName = tabName;
    },
    goEditpage() {
      this.$router.push({ name: 'editpage'});
    }
  },
};
</script>

<style scoped>
.navStyle {
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
  padding: 10px 0;
}

.nav-item {
  cursor: pointer;
  padding: 10px 20px;
  border-bottom: 4px solid transparent;
}

.nav-item.active {
  border-bottom-color: #000000;
  color: #000000;
}
.button-style {
  display: flex; 
  flex-direction: column;
  Padding: 10px;
}

</style>

