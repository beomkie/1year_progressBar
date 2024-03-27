<template>
  <div>
    <nav class="bnav-style">
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
export default {
  data() {
    return {
      selectedNavItem: ''
    };
  },
  methods: {
    selectNavItem(item) {
      //페이지 간 이동
      this.selectedNavItem = item;
      if (item === 'home') {
        this.$router.push('/');
      } else if (item === 'social') {
        this.$router.push('/socialView');
      } else if (item === 'myArchievement') {
        this.$router.push('/myArchievement');
      } else if (item === 'myPage') {
        this.$router.push('/myPage');
      }
    }
  },
  created() {
    const currentPath = this.$route.path;
    if (currentPath === '/') {
      this.selectedNavItem = 'home';
    } else if (currentPath === '/socialView') {
      this.selectedNavItem = 'social';
    } else if (currentPath === '/myArchievement') {
      this.selectedNavItem = 'myArchievement';
    } else if (currentPath === '/myPage') {
      this.selectedNavItem = 'myPage';
    }
  }
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
.bnav-style {
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
