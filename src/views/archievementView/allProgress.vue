<template>
  <div>
    <div class="system-font">
            <p>{{ userName }}님의 {{ currentYear }}년 전체 목표 수행률</p>
    </div>
    <div class="progress-container">
      <progressBar />
    </div>
  </div>
  
</template>

<script>
import progressBar from '@/components/progressBar.vue';

export default {
  components: {
    progressBar,
  },
  data() {
    return {
      userName: 'Beomkie',
    }
  },
  computed: {
        currentYear() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            return currentYear;
        },
  },

}
</script>

<style scoped>
.system-font {
    margin-top: 30px;
    font-weight: 600;
    color: black;
}
.progress-container {
  margin: 15px;
  margin-top: 30px;
}
</style>