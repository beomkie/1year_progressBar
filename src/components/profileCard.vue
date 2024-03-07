<template>
  <div class="card-container">
    <div class="card">
        <div class="card-header">
            <p>Profile</p>
        </div>
        <div class="card-body">
            <div>
                <p>(Progress Area)</p>
            </div>
            <div>
                <p>(Badge Area)</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
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
</style>