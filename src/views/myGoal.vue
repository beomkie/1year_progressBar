<template>
    <div>
        <header>
            <h1 
            style="font-weight: 600; margin-left: -230px; margin-top: 50px; font-size: 35px; color: black;"
            >
            Goal
            </h1>
        </header>
        <div class="current-goal">
            <h3 style="font-weight: 500;">나의 {{ currentYear }}년 목표</h3>
            <!-- 카드영역1 -->
            <b-card bg-variant="dark" text-variant="white" 
            :title="cardTitle" 
            
            style="margin-right: 25px; margin-top: 20px; margin-bottom: 0px;"
            >
                <b-card-text>
                    올해가 끝나기 전까지 1,000만원 모으기
                </b-card-text>
                <b-button
                v-for="card in cards"
                :key="card.key"
                @click="toggleCard(card.key)" 
                :variant="card.status ? 'success' : 'danger'"
                >
                {{ card.status ? '달성' : '미달성' }}
                </b-button>
            </b-card>

        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
            emoji:'💵',
            title: '1,000만 원 모으기',
            status: false,
            value: 45,
            max: 100,
            cards:Array.from({ length: 1 }, () => ({
            key: uuidv4(), // 랜덤한 키 생성
            status: false,
            })),
        }
    },
    computed: {
        currentYear() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            return currentYear;
        },
        cardTitle() {
            return `${this.emoji} ${this.title}`;
        },

        totalCards() {
        return this.cards.length; // 전체 카드 수
        },
        achievedCards() {
        return this.cards.filter((card) => card.status).length; // 달성된 카드 수
        },
        unAchievedCards() {
        return this.totalCards - this.achievedCards; // 미달성된 카드 수
        },
        achievementRate() {
        return (this.achievedCards / this.totalCards) * 100; // 전체 달성률
        },
        unAchievementRate() {
        return (this.unAchievedCards / this.totalCards) * 100; // 미달성률
        },

    },
    methods: {
        toggleCard(cardKey) {
            const index = this.cards.findIndex((card) => card.key === cardKey);
            if (index !== -1) {
                this.$set(this.cards, index, {
                    key: cardKey,
                    status: !this.cards[index].status,
                });
            }
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