<template>
  <div>
    <div>
      <Header :title="computedTitle" />
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/headerSet.vue';
import axios from 'axios';
import { ref } from 'vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
    }
  },
  setup() {
    const card = ref({
      id: null,
      subject: '',
      text: '',
      rule: null,
      day: [],
      time: null,
      date: null,
      dates: null,
    });
    const getCardData = async() => {
      try {
          // const id = this.$route.params.id;
          // 서버에서 데이터를 가져오는 요청
          const response = await axios.get('http://localhost:3000/card/7573');
          // 가져온 데이터를 카드 배열에 저장
          card.value = {...response.data};

        } catch (error) {
          console.error('Error fetching data:', error);
        }
    }

    return {
      card,
      getCardData,
    }
  },
  methods: {
        // async CardDataFromServer() {
        // try {
        //   // const id = this.$route.params.id;
        //   // 서버에서 데이터를 가져오는 요청
        //   const response = await axios.get('http://localhost:3000/card/7573');
        //   // 가져온 데이터를 카드 배열에 저장
        //   card.value = response.data;

        // } catch (error) {
        //   console.error('Error fetching data:', error);
        // }
        // },
  },
  computed: {
    computedTitle() {
      console.log(this.card)
      // `serverData` 값을 기반으로 "Empty" 자리에 들어갈 값을 계산
      if (this.card.subject) {
        return this.card.subject;
      } else {
        return "Error";
      }
    },
  }
  

}
</script>

<style>

</style>