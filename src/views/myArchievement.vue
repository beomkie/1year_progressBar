<template>
    <div>
        <div>
            <Header title="성취" />
        </div>
        <div>
            <b-nav tabs justified>
                <b-nav-item active>수행률</b-nav-item>
                <b-nav-item>뱃지</b-nav-item>
            </b-nav>
        </div>
        <div class="system-font">
            <p>{{ userName }}님의 {{ currentYear }}년 목표 수행률</p>
        </div>
    </div>
</template>

<script>
import Header from '@/components/headerSet.vue';

export default {
    components: {
        Header,
    },
    data() {
        return {
            userName: 'beomkie',
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