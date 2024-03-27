<template>
    <div class="container-style">
      <div>
        <Header title="홈" />
      </div>
      <div class="background-container">
        <yearcount />
      </div>
      <div class="system-font">
        <p>{{ currentYear }}년 {{ userName }}님의 목표</p>
      </div>
      <div>
        <card v-if="cards.length > 0" :cardData="cards" />
        <div v-else>
          <p class="no-cards">목표가 없습니다.</p>
        </div>
      </div>
      <div>
        <b-button @click="goToAddCardPage" variant="primary" style="margin-left: 0px; margin-top: 30px;">
          새로운 카드 추가
        </b-button>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '@/components/headerSet.vue';
  import yearcount from '@/components/yearCounter.vue';
  import card from '@/components/cardComp.vue';
  import axios from 'axios';
  
  export default {
    components: {
      Header,
      yearcount,
      card,
    },
    data() {
      return {
        cards: [],
        userName: 'beomkie',
      }
    },
    computed: {
      currentYear() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
  
        return currentYear;
      },
    },
    methods: {
      async CardDataFromServer() {
        try {
          // 서버에서 데이터를 가져오는 요청
          const response = await axios.get('http://localhost:3000/card');
          // 가져온 데이터를 카드 배열에 저장
          this.cards = response.data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
  
      goToAddCardPage() {
        this.$router.push('/addcard');
      },
    },
    mounted() {
      // 컴포넌트가 마운트되면 서버에서 데이터를 가져옴
      this.CardDataFromServer();
    },
  }
  </script>
  
  <style scoped>
  .container-style { 
    margin-bottom: 70px;
  }
  .system-font {
    margin-top: 50px;
    font-weight: 600;
    color: black;
  }
  .no-cards {
    font-size: 18px;
    color: gray;
    text-align: center;
    margin-top: 20px;
  }
  .background-container {
    background-color: #76b2ff;
    border-radius: 20px; 
    padding: 10px 40px; 
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 360px;
    height: 220px;
    margin: 0 auto;
    margin-top: 30px;
  }
  </style>
  