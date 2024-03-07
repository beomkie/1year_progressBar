<template>
    <div>
        <div>
            <Header title="My"/>
        </div>
        <div class="user-data">
            <img src="@/assets/Ellipse 1.png" alt="프로필 이미지">
            <div>
                <h1 style="
                    font-weight: 600; 
                    font-size: 23px;
                    margin-left: 10px;
                    margin-top: 15px;
                ">
                {{ user.nickname }}
            </h1>
                <p style="
                    font-size: 13px;
                    margin-left: 10px;
                ">{{ user.email }}
                </p>
            </div>
        </div>
        <div class="profile-data">
            <p>(프로필 메시지)</p>
            <p>(인스타그램 주소)</p>
        </div>
        <div style="margin-top: 40px;">
            <b-list-group class="menu-style">
                <b-list-group-item href="#" class="menu-item-style">프로필 설정</b-list-group-item>
                <b-list-group-item href="#" class="menu-item-style">결제 설정</b-list-group-item>
                <b-list-group-item href="#" class="menu-item-style">알림설정</b-list-group-item>
                <b-list-group-item href="#" class="menu-item-style">이용약관</b-list-group-item>
                <b-list-group-item @click="gotoLogin" class="menu-item-style">로그인(임시연결)</b-list-group-item>
            </b-list-group>
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
                email: 'gb3205@gorgeouswrks.com', // 사용자의 이메일
                name: '이기범', //사용자 이름
                profileMessage: 'empty', //자기소개 
                profileImageURL: 'https://example.com/profile_image.jpg', // 프로필 이미지의 URL
                instaId: 'beomkie',
                
            },
        }
    },
    methods: {
        gotoLogin() {
            this.$router.push({ name: 'loginPage'});
        }
    }

}


</script>

<style scoped>
.user-data {
    font-weight: 600;
    display: flex;
    align-items: center;
    text-align: left;
    margin-left: 30px;
    margin-top: 30px;
    color: black;
}
.profile-data {
    margin-top: 20px;
    margin-left: 30px;
    text-align: left;
    font-size: 13px;
}
.menu-style {
    text-align: left;
    border-radius: 0px;
}
.menu-item-style {
    padding: 15px 20px;
}
</style>