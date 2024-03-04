<template>
  <div>
    <div class="system-font">
            <p>{{ userName }}님의 {{ currentYear }}년 목표 수행률</p>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      userName: 'Beomkie',
    }
  },
  computed: {
        currentYear() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            return currentYear;
        },
  },

}
</script>

<style scoped>
.system-font {
    margin-top: 30px;
    font-weight: 600;
    color: black;
}

</style>