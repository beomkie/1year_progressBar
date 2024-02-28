<template>
  <div>
    <b-form-select v-model="selectedIcon" :options="iconOptions" id="icon" class="form-control"></b-form-select>
    <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3">다음</b-button>
  </div>
</template>

<script>
export default {
  computed: {
    selectedIcon: {
      get() {
        return this.$store.state.formData.icon;
      },
      set(value) {
        this.$store.commit('updateFormData', { icon: value });
      },
    },
    iconOptions() {
      return [
        { text: '아이콘 선택하기', value: null },
        { text: '🏃', value: '🏃' },
        { text: '📚', value: '📚' },
        { text: '💵', value: '💵' },
        { text: '🏠', value: '🏠' },
      ];
    },
  },
  methods: {
    goToNextStep() {
      const icon = this.selectedIcon;
      // 아이콘 선택 여부 확인
      if (!icon) {
        alert('아이콘을 선택하지 않았습니다');
        return;
      }
      let eventData = 2
      this.$store.dispatch('updateIconAndNavigate', { icon, router: this.$router });
      this.$emit('nextStep', eventData);
      console.log(eventData);
    },
  },
};
</script>
