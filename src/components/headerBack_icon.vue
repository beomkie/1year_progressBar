<template>
    <div>
      <div>
        <img src="@/assets/arrow.png" alt="뒤로가기" @click="goToPrevious" class="back-button">
      </div>
      <div class="page-title">
        <h2>{{ icon }}</h2>
        <h1>{{ title }}</h1>
      </div>
    </div>
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
      icon: {
        type: String,
      },
    },
    methods: {
      ...mapActions(['goToPreviousAllreset']), // mapActions를 사용하여 액션 매핑

      goToPrevious() {
        // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
        this.goToPreviousAllreset();
        // 이전 페이지로 이동하는 코드
        this.$router.push(this.backRoute) // 이전 페이지로 이동
      },
    },
  };
  </script>
  
  <style>
  .page-title h1 {
    font-weight: 600;
    text-align: left;
    margin-left: 0px;
    margin-right: 30px;
    font-size: 25px;
    color: black;
  }
  .page-title h2 {
    font-size: 30px;
    margin-top: 20px;
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
  