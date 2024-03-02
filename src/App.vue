<template>
  <div id="app">
    <!-- 스크롤되는 컨텐츠를 감싸는 컨테이너 -->
    <div class="content-container">
      <router-view></router-view>
    </div>
    <!-- 하단에 고정된 NavBar -->
    <navbar />
  </div>
</template>

<script>
import navbar from '@/components/bottomNav.vue';

export default {
  name: 'App',
  components: {
    navbar,
  },
  data() {
    return {
      // 네비게이션 바의 스타일을 동적으로 조절하기 위한 데이터
      navStyle: {
        position: 'fixed', // 고정 위치
        bottom: '0', // 화면 하단에 고정
        width: '100%', // 너비를 100%로 설정하여 화면 가로폭에 맞춤
        zIndex: '1000', // 다른 요소 위에 올라오도록 zIndex 설정
      },
      navHeight: 50, // NavBar의 높이
    };
  },
  mounted() {
    // NavBar의 높이를 content-container의 padding-bottom으로 설정
    document.querySelector('.content-container').style.paddingBottom = this.navHeight + 'px';
  },
  beforeDestroy() {
    // 컴포넌트가 파괴되기 전에 padding-bottom을 초기화
    document.querySelector('.content-container').style.paddingBottom = '0';
  },
}
</script>

<style>
#app {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* 스크롤되는 컨텐츠를 감싸는 컨테이너의 스타일 */
.content-container {
  overflow-y: auto; /* 세로 스크롤만 허용 */
  max-height: calc(100vh - 50px); /* 화면 높이에서 NavBar의 높이를 뺀 값으로 최대 높이 설정 */
}

/* 나머지 스타일은 여기에 추가 */
.topview {
  padding-top: 50px;
  padding-bottom: 10px;
}

.topview h1 {
  font-weight: 600;
  margin-top: 50px;
}

.home-button {
  font-weight: 500;
  color:black;
}

.button {
  margin-left: 30px;
  font-weight: 500;
  color:black;
}

</style>
