<template>
  <div>
    <header>
      <headerBack title="User Name" :backRoute="'/socialView/following'"/>
    </header>
    <div>
      <img src="@/assets/Ellipse 1.png" alt="프로필 이미지">
    </div>
    <div>
      <otherUserCard />
    </div>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import otherUserCard from '@/components/otherUserCard.vue';

export default {
  components: {
    headerBack,
    otherUserCard,
  }

}
</script>

<style>

</style>