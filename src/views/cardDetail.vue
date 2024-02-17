<template>
  <div>
    <div>
      <Header :title = computedTitle />
    </div>
    <div>
      <p>ID: {{ card.id }}</p>
      <p>Subject: {{ card.subject }}</p>
      <p>Text: {{ card.text }}</p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/headerSet.vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  components: {
    Header,
  },
  setup() {
    const card = ref({
      id: null,
      subject: '',
      text: '',
    });

    const CardDataFromServer = async () => {
      try {
        const response = await axios.get('http://localhost:3000/card/7573');
        card.value = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    onMounted(() => {
      CardDataFromServer();
    });

    const computedTitle = () => {
      if (card.value.subject) {
        return card.subject;
      } else {
        return "Error";
      }
    };

    return {
      card,
      computedTitle
    };
  }
}
</script>

<style scoped>
</style>
