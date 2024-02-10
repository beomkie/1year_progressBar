<template>
  <div id="app">
    <router-view></router-view>
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
    };
  },
  mounted() {
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
  },
  beforeDestroy() {
    document.body.style.overflowX = 'auto';
    document.body.style.overflowY = 'auto';
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
}

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
