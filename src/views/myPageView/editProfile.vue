<template>
  <div>
    <header>
      <headerBack title="프로필 수정" :backRoute="'/mypage'" /> 
    </header>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';

export default {
  components: {
    headerBack,
  }

}
</script>

<style>

</style>