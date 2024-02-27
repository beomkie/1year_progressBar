<template>
    <header>
      <img src="@/assets/arrow.png" alt="뒤로가기" @click="goBack" class="back-button">
      <h1 class="page-title">{{ title }}</h1>
    </header>
  </template>
  
  <script>
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
      goBack() {
        this.$router.push({ name: this.backRoute });
        console.log(this.backRoute);
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
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 45px;
    height: 40px;
    margin-top: 20px;
    margin-left: -15px;
  }
  </style>
  