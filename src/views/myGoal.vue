<template>
    <div>
        <div>
            <Header title="Goal" />
        </div>
        <div>
            <div v-for="card in cards" :key="card.key">
            <!-- 카드 정보를 표시하는 부분 -->
            <div>
                <span>이모지: {{ card.emoji }}</span>
                <h3>{{ card.title }}</h3>
                <p>{{ card.content }}</p>
                <!-- 다른 카드 속성들을 필요에 따라 표시 -->
            </div>
            <b-button @click="toggleCard(card.key)" :variant="card.status ? 'success' : 'danger'">
                {{ card.status ? '달성' : '미달성' }}
            </b-button>
            </div>
            <b-button @click="goToAddCardPage" variant="primary" style="margin-left: 0px; margin-top: 30px;">
            새로운 카드 추가
            </b-button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
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
        ...mapState(['cards']),

    },
    methods: {
        ...mapMutations(['toggleCard']),
        goToAddCardPage() {
        this.$router.push('/addcard');
        },
    }
}

</script>

<style scoped>
.current-goal {
    text-align: left;
    margin-left: 30px;
    margin-top: 50px;
    color: black;
}
</style>