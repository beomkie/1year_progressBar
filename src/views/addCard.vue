<template>
    <div>
        <div>
          <headerBack title="목표 추가하기" :backRoute="'Home'" />
        </div>
        <div>
          <goalSet />
        </div>
    </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import goalSet from '@/components/goalSet.vue';

export default {
  components: {
    headerBack,
    goalSet,
  },
  
  
};
</script>

<style>

</style>
