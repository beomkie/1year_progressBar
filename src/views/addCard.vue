<template>
    <div>
        <div>
          <Header title="추가하기" />
        </div>
        <div>
          <goalSet />
        </div>
    </div>
</template>

<script>
import Header from '@/components/headerSet.vue';
import goalSet from '@/components/goalSet.vue';

export default {
  components: {
    Header,
    goalSet,
  },
  
  
};
</script>

<style>

</style>
