<template>
  <div class="card-container">
    <div class="card" v-for="(card, index) in cardData" :key="index">
      <div class="card-header">
        <h6>{{ card.icon }}</h6>
        <h5 class="card-title">{{ card.title }}</h5>
      </div>
      <div class="card-body">
        <p class="semi-title">현재 달성률</p>
        <progressBar />
        <p class="semi-title">규칙</p>
        <p class="card-text">{규칙 데이터}</p>
        <router-link :to="'/cardDetail/' + card.id" class="btn btn-primary button-style">자세히 보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import progressBar from './progressBar.vue';

export default {
  components: {
    progressBar,
  },
  props: ['cardData']
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%; /* Full width for mobile */
  max-width: 400px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: left;
  padding-bottom: 0px;
  padding-top: 15px;
}
.card-header h6 {
  font-size: 26px;
  margin-left: 6px;
  margin-right: 10px;
}

.card-body {
  padding: 20px;
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
.semi-title {
  font-size: 14px;
  font-weight: 500;
}

.card-text {
  color: #666;
  margin-top: 10px;
  text-align: center;
}

.button-style {
  margin-top: 10px;
  display: block;
  width: 100%;
}
</style>
