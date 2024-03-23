<template>
  <div>
    <p>deadline set</p>
    <div ref="calendarPortal" class="calendar-portal">
      <b-form-datepicker v-model="date" :calendar-portal-target="calendarPortal"></b-form-datepicker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
}

</script>

<style scoped>
.button-container {
  position: fixed;
  margin-top: 30px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  bottom: 100px
}
.date-container {
  margin: 20px;
  margin-top: 30px;
}
.calendar-portal {
  position: absolute;
  top: 250px; 
  left: 100px; 
}

</style>