<template>
  <div>
    <header>
      <headerBack title="User Name" :backRoute="'/socialView/following'"/>
    </header>
    <div class="imgButton-style">
      <img src="@/assets/Ellipse 1.png" alt="프로필 이미지">
      <b-button :variant="myToggle ? 'outline-secondary' : 'primary'" @click="toggleButton">Follow</b-button>
    </div>
    <div class="profile-container">
      <div class="profileInfo-style">
        <p>(이름표시, 켰을 경우)</p>
        <p>(프로필 메시지)</p>
        <p>(인스타그램 주소)</p>
      </div>
      <div class="vertical-line"></div>
      <div class="follower-style">
        <p>(라이벌 수)</p>
      </div>
    </div>
    <div class="progressandBadge">
      <p>전체 진행률</p>
      <div class="progressbar-container">
        <progressBar />
      </div>
      <p>모은 뱃지</p>
      <div class="badge-container">
        <badgeVIew />
      </div>
    </div>
    <hr>
    <div>
      <otherUserCard />
    </div>
  </div>
</template>

<script>
import headerBack from '@/components/headerBack.vue';
import otherUserCard from '@/components/otherUserCard.vue';
import progressBar from '@/components/progressBar.vue';
import badgeVIew from '@/components/badgeVIew.vue';

export default {
  data() {
    return {
      myToggle: false,
    }
  },
  components: {
    headerBack,
    otherUserCard,
    progressBar,
    badgeVIew,
  },
  methods: {
    toggleButton() {
      this.myToggle = !this.myToggle;
    }
  }

}
</script>

<style scoped>
.profile-container {
  display: flex;
  margin-top: 30px;
}
.imgButton-style {
  margin-top: 40px;
}
.imgButton-style img {
  margin-right: 140px;
}
.profileInfo-style {
  margin: 10px;
  margin-left: 40px;
  text-align: left;
}
.profileInfo-style p {
  color: black;
  font-size: 13px;
}
.vertical-line {
  height: 100px;
  border-left: 1px solid rgb(199, 199, 199); 
  margin-left: 100px;
}
.follower-style {
  margin-left: 30px;
  margin-top: 35px;
}
.progressandBadge {
  margin: 20px;
}
.progressbar-container {
  margin-bottom: 30px;
}
.badge-container {
  margin-bottom: 30px;
}
</style>