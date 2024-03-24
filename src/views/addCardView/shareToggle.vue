<template>
  <div>
    <div class="intro-header">
      <p>공유여부</p>
    </div>
    <div>
      <b-button :variant="myToggle ? 'primary' : 'danger'" @click="toggleButton" class="toggle-style">
        {{ myToggle ? '공유할래요!' : '공유하지 않을래요' }}
      </b-button>
    </div>
    <div class="button-container">
      <b-button type="submit" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px;" @click="submitGoal">목표 생성하기</b-button>
      <b-button @click="previousStep" variant="outline-secondary" class="w-100" style="height: 50px;">이전</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      myToggle: false,
    };
  },
  methods: {
    ...mapActions(['updateshareToggle', 'goToPreviousStep', 'createGoalAction']),

    toggleButton() {
      this.myToggle = !this.myToggle;
    },

      
    async submitGoal() {
      const shareStatus = this.myToggle ? 1 : 0;
      if (!shareStatus) {
        this.showErrorMessage = true;
        return;
      }
      console.log(shareStatus);
      this.showErrorMessage = false;
      this.$store.dispatch('updateshareToggle', { shareStatus })

      const created = await this.createGoalAction({ formData: this.ruleData }); // ruleData 전달
      if (created) {
        this.$router.push('/');
      } else {
        // 생성 실패
        console.log('Fail to create the Goal')
      }
    },
    previousStep() {
      // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
      this.goToPreviousStep(['shared']);
      this.$router.go(-1);
    },
    
  },
  
}
</script>

<style scoped>
.intro-header {
  margin: 20px;
  margin-top: 50px;
}
.intro-header p {
  font-size: 20px;
}
.toggle-style {
  width: 250px;
  height: 60px;
  margin-top: 40px;
}
.button-container {
  position: fixed;
  margin-top: 30px;
  width: 350px;
  margin-left: 20px;
  margin-right: auto;
  bottom: 100px
}

</style>