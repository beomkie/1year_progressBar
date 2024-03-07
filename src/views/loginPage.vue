<template>
  <div>
    <div>
      <img src="@/assets/gorgeous.png" alt="Logo img" class="logo-style">
      <P class="title-style">로그인을 진행해주세요!</P>
    </div>
    <div>
      <a id="custom-login-btn" @click="kakaoLogin()">
        <img
          src="@/assets/kakao_login.png"
          alt="카카오 로그인 버튼"
          class="kakao-button-style"
        />
      </a>
      <div @click="kakaoLogout()" class="logout-button">로그아웃</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_image, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const ninkname = kakao_account.profile.ninkname;
          const email = kakao_account.email;
          console.log("ninkname", ninkname);
          console.log("email", email);

          //로그인처리구현

          alert("로그인 성공!");
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
.logo-style {
  width: 200px;
  margin-top: 130px;
}
.title-style {
  font-size: 15px;
  margin-top: 20px;
  font-weight: 600;
}
.kakao-button-style {
  width: 300px;
  margin: 10px;
}
.logout-button {
  color: red;
  margin-top: 30px;
  font-size: 13px;
  font-weight: 600;
}

</style>