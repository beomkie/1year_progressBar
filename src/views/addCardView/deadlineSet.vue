<template>
  <div>
    <div class="form-container">
      <form @submit.prevent="goToNextStep">
        <div class="form-group">
          <label for="deadlineDate">마감일:</label>
          <input
            type="date"
            id="deadlineDate"
            class="form-control"
            v-model="selectedDate"
            @input="hideErrorMessage" 
            required
          />
        </div>
        <div v-if="showErrorMessage" class="alert alert-danger" role="alert">
          마감일을 선택하세요.
        </div>
      </form>
    </div>
    <div class="button-container">
      <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3 mb-3" style="height: 50px;">다음</b-button>
      <b-button @click="previousStep" variant="outline-secondary" class="w-100" style="height: 50px;">이전</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      selectedDate: null,
      showErrorMessage: false,
    };
  },
  methods: {
    ...mapActions(['updateendDateAndNavigate', 'goToPreviousStep']),

    goToNextStep() {
      const endDate = this.selectedDate;
      if (!endDate) {
        this.showErrorMessage = true;
        return;
      }
      this.showErrorMessage = false;
      this.$store.dispatch('updateendDateAndNavigate', { endDate, router: this.$router })
      .then(() => {
        console.log(this.$store.getters.formData);
      });
    },
    previousStep() {
      this.goToPreviousStep(['ruleData']); 
      this.$router.go(-1);
    },
    hideErrorMessage() {
      // 입력이 시작되면 에러 메시지를 숨깁니다.
      this.showErrorMessage = false;
    },
  },
};
</script>

<style scoped>
.form-container {
  margin: 20px;
  margin-top: 70px;
}
.button-container {
  position: fixed;
  margin-top: 30px;
  width: 350px;
  margin-left: 20px;
  margin-right: auto;
  bottom: 100px;
}

</style>
