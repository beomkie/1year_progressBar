<template>
  <div class="container">
    <div v-if="title">
      <p>{{ title }}</p>
    </div>
    <div class="progress-wrapper">
      <b-progress :max="100" :style="progressContainerStyle">
        <b-progress-bar 
          :value="50" 
          :label="'50%'"
          :style="progressBarStyle"
        ></b-progress-bar>
      </b-progress>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false, // 기본값은 빈 문자열
    }
  },
  data() {
    return {
      // progressBar 내부 그래프 스타일
      progressBarStyle: {
        backgroundColor: '#008080',
        height: '30px',
        marginTop: '0px',
        overflow: 'hidden',
        border: '0px solid #ccc'
      },
      // progressBar 외부 배경 스타일
      progressContainerStyle: {
        height: '30px',
        width: '800px',
        marginBottom: '0px',
        backgroundColor: '#E4E4E4',
        border: '0px solid #ccc',
      },
    }
  }
}
</script>

<style scoped>
.container {
  margin-bottom: 20px;
}
.container p {
  color: black;
}

.progress-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
