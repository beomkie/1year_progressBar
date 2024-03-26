<template>
  <div>
    <nav class="nav-style">
      <div class="custom-navbar-nav">
        <div @click="selectNavItem('home')" :class="{ 'nav-item': true, 'active': selectedNavItem === 'home' }">
          <img :src="require(`@/assets/${selectedNavItem === 'home' ? 'home-active.png' : 'home-deactive.png'}`)" alt="Home Icon" class="nav-icon">
          <span class="nav-text">홈</span>
        </div>
        <div @click="selectNavItem('social')" :class="{ 'nav-item': true, 'active': selectedNavItem === 'social' }">
          <img :src="require(`@/assets/${selectedNavItem === 'social' ? 'social-active.png' : 'social-deactive.png'}`)" alt="Social Icon" class="nav-icon">
          <span class="nav-text">소셜</span>
        </div>
        <div @click="selectNavItem('myArchievement')" :class="{ 'nav-item': true, 'active': selectedNavItem === 'myArchievement' }">
          <img :src="require(`@/assets/${selectedNavItem === 'myArchievement' ? 'archieve-active.png' : 'archieve-deactive.png'}`)" alt="Achievement Icon" class="nav-icon">
          <span class="nav-text">성취</span>
        </div>
        <div @click="selectNavItem('myPage')" :class="{ 'nav-item': true, 'active': selectedNavItem === 'myPage' }">
          <img :src="require(`@/assets/${selectedNavItem === 'myPage' ? 'my-active.png' : 'my-deactive.png'}`)" alt="MyPage Icon" class="nav-icon">
          <span class="nav-text">MY</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {

    const selectedNavItem = ref('');

    const selectNavItem = (item) => {
      selectedNavItem.value = item;
    };

    return {
      selectedNavItem,
      selectNavItem
    };
  },
};
</script>

<style>
.custom-navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  border-top: 1px solid #c9c9c9;
}
.nav-style {
  background-color: white;
  height: 75px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  margin-top: -15px;
}

.nav-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 4px;
}

.nav-text {
  font-size: 12px;
  font-weight: 400;
}

.active {
  color: #007bff;
}
</style>
