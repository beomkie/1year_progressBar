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

    const id = card.id;

    const CardDataFromServer = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/card/${id}`);
        card.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    onMounted(() => {
      CardDataFromServer();
    });

    return {
      card,
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
  }
}
</script>

<style scoped>
</style>
