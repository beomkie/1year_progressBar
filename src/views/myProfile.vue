<template>
    <div>
        <header>
            <h1 
            style="font-weight: 600; margin-left: -250px; margin-top: 50px; font-size: 35px;"
            >
            MY
            </h1>
        </header>
        <div class="user-data">
            <h1 style="font-weight: 600;">{{ user.nickname }}</h1>
            <p style="font-size: 13px;">{{ user.email }}</p>
        </div>

        <div class="goal-rate">
            <h3 style="font-weight: 500; margin-top: 60px;">전체 달성률</h3>

            <b-progress :value="value" :max="max" show-progress animated></b-progress>
            <b-progress class="mt-2" :max="max" show-value>
            <b-progress-bar :value="achievementRate" variant="success"></b-progress-bar>
            <b-progress-bar :value="unAchievementRate" variant="warning"></b-progress-bar>
            <b-progress-bar :value="value * (1.5 / 10)" variant="danger"></b-progress-bar>
            </b-progress>
            
        </div>
        
    </div>
</template>

<script>

export default {
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