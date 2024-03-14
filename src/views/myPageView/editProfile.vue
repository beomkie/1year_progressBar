<template>
  <div>
    <header>
      <headerBack title="프로필 수정" :backRoute="'/mypage'" /> 
    </header>
    <div>
      <img src="@/assets/Ellipse 1.png" alt="프로필 이미지" class="user-image">
    </div>
    <div class="login-container">
      <img src="@/assets/kakao_logo.png" alt="카카오 로그인" class="kakao-logo">
      <p class="kakao-title">카카오 로그인</p>
    </div>
    <b-form class="form-container">
      <h3 class="form-title">닉네임</h3>
      <b-form-input id="nickname" placeholder="닉네임을 입력하세요"></b-form-input>
    </b-form>
    <b-form class="form-container">
      <h3 class="form-title">프로필 메세지</h3>
      <b-form-textarea id="profileMessage" placeholder="프로필 메세지를 입력하세요" rows="3" max-rows="100"></b-form-textarea>
    </b-form>
    <b-form class="form-container">
      <h3 class="form-title">인스타그램 주소</h3>
      <b-form-input id="instagramID" placeholder="인스타그램 주소를 입력하세요"></b-form-input>
    </b-form>
    <b-form class="form-container">
      <h3 class="form-title">성함</h3>
      <b-form-input id="name" placeholder="성함을 입력해주세요."></b-form-input>
      <b-form-checkbox id="agree" v-model="agree" name="agree" value="agree" class="check-style">
        프로필에 이름 표시하기
      </b-form-checkbox> 
    </b-form>
    <div class="form-container">
      <h3 class="form-title">이메일</h3>
      <p class="email-style">(사용자 이메일, 소셜에서 받아서 넣기)</p>
      <p class="warn-message">*소셜 로그인을 통해 생성된 이메일 입니다.</p>
    </div>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';

export default {
  components: {
    headerBack,
  },
  data() {
    return {
      agree: false // 초기값은 false로 설정
    };
  },

}
</script>

<style scoped>
.user-image {
  width: 100px;
  margin-top: 30px;
}
.login-container {
  display: flex;
  justify-content: center;
}
.kakao-logo {
  width: 23px;
  height: 23px;
  margin-top: 21px;
}
.kakao-title {
  margin-left: 10px;
  font-size: 13px;
  color: black;
  font-weight: 600;
  margin-top: 24px;
}
.form-container {
  margin: 20px;
  margin-bottom: 40px;
}
.form-title {
  font-size: 18px;
  text-align: left;
  margin-left: 5px;
  margin-bottom: 8px;
}
.check-style {
  margin-top: 10px;
  margin-left: 8px;
  text-align: left;
}
.email-style {
  margin-top: 20px;
  margin-left: 10px;
  text-align: left;
}
.warn-message {
  font-size: 9px;
  color: #B20000;
  text-align: left;
  margin-left: 10px;
}

</style>