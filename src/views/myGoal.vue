<template>
    <div>
        <div>
            <Header title="Goal" />
        </div>
        <div>
            <p>{{ currentYear }}년 나의 목표</p>
        </div>
        <div>

        </div>
        <div>
            <b-button @click="goToAddCardPage" variant="primary" style="margin-left: 0px; margin-top: 30px;">
            새로운 카드 추가
            </b-button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/headerSet.vue';

export default {
    components: {
        Header,
    },
    computed: {
        currentYear() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            return currentYear;
        },

    },

    methods: {
        goToAddCardPage() {
        this.$router.push('/addcard');
        },
        testData(formData) {
            console.log(formData);
        }
    }
}

</script>

<style scoped>

</style>