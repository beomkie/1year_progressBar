<template>
    <header>
      <img src="@/assets/arrow.png" alt="뒤로가기" @click="goToPrevious" class="back-button">
      <h1 class="page-title">{{ title }}</h1>
    </header>
  </template>
  
  <script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      backRoute: {
        type: String,
        required: true,
      },
    },
    methods: {
      ...mapActions(['goToPreviousAllreset']), // mapActions를 사용하여 액션 매핑

      goToPrevious() {
        // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
        this.goToPreviousAllreset();
        // 이전 페이지로 이동하는 코드
        this.$router.push({name: this.backRoute}) // 이전 페이지로 이동
      },
    },
  };
  </script>
  
  <style>
  .page-title {
    font-weight: 600;
    text-align: left;
    margin-left: 25px;
    margin-top: 120px;
    font-size: 30px;
    color: black;
  }
  .back-button {
    position: relative;
    top: 20px;
    left: -160px;
    width: 45px;
    height: 40px;
    margin-top: 15px;
    margin-bottom: -80px;
  }
  </style>
  