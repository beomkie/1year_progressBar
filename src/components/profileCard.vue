<template>
  <div class="card-container">
    <div class="card">
        <div class="card-header">
          <img src="@/assets/Ellipse 1.png" alt="프로필 이미지" class="profile-style">
          <h3 class="userName">UserName1234</h3>
        </div>
        <div class="card-body">
            <div>
              <progressBar />
            </div>
            <div>
                <badgeView />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import progressBar from '@/components/progressBar.vue';
import badgeView from '@/components/badgeVIew.vue';

export default {
  components: {
    progressBar,
    badgeView,
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
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  display: flex;
}
.card-body {
  padding: 20px;
}
.profile-style {
  width: 40px;
}
.userName {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 15px;
}
</style>