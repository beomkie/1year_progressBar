<template>
  <div class="card-container">
    <div class="card" v-for="(card, index) in cardData" :key="index">
      <div class="card-header">
        <h6>{{ card.icon }}</h6>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ card.subject }}</h5>
        <p class="card-text">{{ card.description }}</p>
        <router-link :to="'/cardDetail/' + card.id" class="btn btn-primary button-style">자세히 보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  text-align: center;
}

.card-body {
  padding: 20px;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  color: #666;
}

.button-style {
  margin-top: 10px;
  display: block;
  width: 100%;
}
</style>
