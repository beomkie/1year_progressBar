<template>
  <div>
    <div @click="gotoProfile">
      <profileCard />
    </div>
  </div>
</template>

<script>
import profileCard from '@/components/profileCard.vue';

export default {
  components: {
    profileCard,
  },
  methods: {
    gotoProfile() {
      this.$router.push({ name: 'profileView' })
    }
  }

}
</script>

<style>

</style>