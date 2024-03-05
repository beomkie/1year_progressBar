<template>
    <div class="progress-container">
      <h3>지금은 {{ currentYear }}년</h3>
      <div class="remaining-days">
        <p>새해가 시작되고 {{ passDate }}일이 지났습니다.</p>
        <p>앞으로 남은 {{ currentYear }}년은 {{ DdayCalc }}일.</p>
      </div>
      <div class="progress-wrapper">
        <b-progress :max="100" :style="progressContainerStyle">
          <b-progress-bar 
            :value="progressbarCalc" 
            :label="`${progressbarCalc}%`"
            :style="progressBarStyle"
          ></b-progress-bar>
        </b-progress>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // progressBar 내부 그래프 스타일
        progressBarStyle: {
          backgroundColor: '#008080',
          height: '45px',
          marginTop: '0px',
          overflow: 'hidden',
          border: '0px solid #ccc'
        },
        // progressBar 외부 배경 스타일
        progressContainerStyle: {
          height: '45px',
          width: '800px',
          marginBottom: '0px',
          backgroundColor: '#E4E4E4',
          border: '0px solid #ccc',
        },
      }
    },
    computed: {
      DdayCalc() {
        const totaldays = new Date(`${this.currentYear}-12-31`);
        const currentDate = new Date();
        const timeDifference = totaldays - currentDate;
        const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000) + 1);
        
        return daysDifference > 0 ? daysDifference : 0;
      },
      progressbarCalc() {
        const startDate = new Date(`${this.currentYear}-01-01`);
        const currentDate = new Date();
        const differenceDays = currentDate - startDate;
        const changeDays = Math.floor(differenceDays / (24 * 60 * 60 * 1000) + 1);
        const percentageCalc = (changeDays / 365) * 100;
  
        return percentageCalc > 0 ? percentageCalc.toFixed(1) : 0;
      },
      passDate() {
        const startDate = new Date(`${this.currentYear}-01-01`);
        const currentDate = new Date();
        const differenceDays = currentDate - startDate;
        const changeDays = Math.floor(differenceDays / (24 * 60 * 60 * 1000) + 1);
  
        return changeDays > 0 ? changeDays : 0;
      },
      currentYear() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
  
        return currentYear;
      },
    }
  }
  </script>
  
  <style scoped>
  .progress-container {
    text-align: center;
    margin: -13px;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  .progress-container h3 {
    font-weight: 600;
    color: black;
    margin-top: 30px;
    font-weight: 550;
    font-size: 24px;
  }
  
  .progress-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  
  .progress-bar {
    background-color: #2478FF; /* progress color */
    height: 20px;
    overflow: hidden;
    border: 1px solid #000; /* Border around the progress bar */
  }
  
  .remaining-days {
    margin-top: 20px;
    font-weight: 500;
    font-size: 15px;
    color: black;
  }
  
  </style>
  