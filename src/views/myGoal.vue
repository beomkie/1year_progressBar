<template>
    <div>
        <div>
            <Header title="Goal" />
        </div>
        <div class="system-font">
            <p>{{ currentYear }}년 나의 목표</p>
        </div>
        <div>
            <card :cardData="cards" />
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
import card from '@/components/cardUpdate.vue';
import axios from 'axios';

export default {
    components: {
        Header,
        card,
    },
    data() {
        return {
            cards: [],
        }
    },
    setup() {

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
        //   console.log(this.cards);

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
.system-font {
    margin-top: 2%;
    font-weight: 600;
    color: black;
}

</style>