<template>
  <div>
    <header>
      <img src="@/assets/arrow.png" alt="뒤로가기" @click="goBack" class="back-button">
      <titleblock :title="card.subject" />
    </header>
    <div>
      <p>ID: {{ card.id }}</p>
      <p>Subject: {{ card.subject }}</p>
      <p>Text: {{ card.text }}</p>
    </div>
  </div>
</template>

<script>
import titleblock from '@/components/titleBlock.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  components: {
    titleblock,
  },
  setup() {
    const card = ref({
      id: null,
      subject: '',
      text: '',
    });

    const CardDataFromServer = async () => {
      try {
        // $route를 사용하기 위해 this.$route 사용
        const id = this.$route.params.id;
        const response = await axios.get(`http://localhost:3000/card/${id}`);
        card.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    onMounted(() => {
      CardDataFromServer();
    });

    const goBack = () => {
      window.history.back();
    }

    return {
      card,
      goBack,
    };
  },
};
</script>

<style scoped>
</style>
