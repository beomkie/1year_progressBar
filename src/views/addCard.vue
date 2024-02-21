<template>
    <div>
        <div>
          <HeaderBack title="목표 추가하기" />
        </div>
        <div>
          <goalSet />
        </div>
    </div>
</template>

<script>
import HeaderBack from '@/components/headerBack.vue';
import goalSet from '@/components/goalSet.vue';

export default {
  components: {
    HeaderBack,
    goalSet,
  },
  
  
};
</script>

<style>

</style>
