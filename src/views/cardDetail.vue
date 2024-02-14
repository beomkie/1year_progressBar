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

export default {
  components: {
    Header,
  },
  data() {
    return {
        cards: [],
    }
  },
  methods: {
        async CardDataFromServer() {
        try {
          const id = this.$route.params.id;
          // 서버에서 데이터를 가져오는 요청
          const response = await axios.get('http://localhost:3000/card/'+id);
          // 가져온 데이터를 카드 배열에 저장
          this.cards = response.data;

        } catch (error) {
          console.error('Error fetching data:', error);
        }
        },
  },
  computed: {
    computedTitle() {
      // `serverData` 값을 기반으로 "Empty" 자리에 들어갈 값을 계산
      if (this.cards.subject) {
        return this.cards.subject;
      } else {
        return "Empty";
      }
    },
  }
  

}
</script>

<style>

</style>