<template>
    <div>
        <div class="card-container">
            <div class="card">
                <div class="card-header">
                    <h6>💵</h6>
                    <h5 class="card-title">돈 모으기</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">카드규칙 조건</p>
                </div>
                <div>
                    <progressBar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import progressBar from '@/components/progressBar.vue';

export default {
    components: {
        progressBar,
    }

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
background-color: #ffffff;
padding: 10px;
border-bottom: 1px solid #ccc;
text-align: center;
display: flex;
justify-content: left;
}
.card-header h6 {
font-size: 20px;
margin-left: 8px;
}

.card-body {
padding: 20px;
}

.card-title {
margin: 0;
font-size: 1.25rem;
font-weight: bold;
margin-left: 10px;
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