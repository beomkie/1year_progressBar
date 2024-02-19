<template>
    <div>
        <div>
            <Header title="Home" />
        </div>
        <div>
            <yearcount />            
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import Header from '@/components/headerSet.vue';
import yearcount from '@/components/yearCounter.vue';

export default {
    components: {
        Header,
        yearcount,
    }
}
</script>

<style scoped>

</style>
