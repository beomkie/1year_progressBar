<template>
    <div>
        <div>
            <Header title="My"/>
        </div>
        <div class="user-data">
            <h1 style="font-weight: 600;">{{ user.nickname }}</h1>
            <p style="font-size: 13px;">{{ user.email }}</p>
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
            user: {
            nickname: 'beomkie', // 사용자의 닉네임
            email: 'gb3205@gorgeouswrks.com' // 사용자의 이메일
            //정보 추가 가능
            },
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
.user-data {
    font-weight: 600;
    text-align: left;
    margin-left: 30px;
    margin-top: 50px;
    color: black;
}

.goal-rate {
    text-align: left;
    margin-left: 30px;
    margin-top: 50px;
    color: black;
}
</style>