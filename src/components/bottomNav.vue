<template>
  <div>
    <nav :style="navStyle">
      <b-navbar fixed="bottom" type="light" variant="white" style="height: 70px;">
        <b-collapse id="nav-collapse" is-nav>
          <hr>
          <b-navbar-nav class="custom-navbar-nav" style="padding-left:20px;">
            <b-nav-item @click="selectedNavItem = 'home'" to="/" :style="{ fontWeight: selectedNavItem === 'home' ? 'bold' : 'normal', color: selectedNavItem === 'home' ? 'white' : 'inherit' }">홈</b-nav-item>
            <b-nav-item @click="selectedNavItem = 'social'" to="/socialView" :style="{ fontWeight: selectedNavItem === 'social' ? 'bold' : 'normal', color: selectedNavItem === 'social' ? 'white' : 'inherit' }">소셜</b-nav-item>
            <b-nav-item @click="selectedNavItem = 'myArchievement'" to="/myArchievement" :style="{ fontWeight: selectedNavItem === 'myArchievement' ? 'bold' : 'normal', color: selectedNavItem === 'myArchievement' ? 'white' : 'inherit' }">성취</b-nav-item>
            <b-nav-item @click="selectedNavItem = 'myPage'" to="/myPage" :style="{ fontWeight: selectedNavItem === 'myPage' ? 'bold' : 'normal', color: selectedNavItem === 'myPage' ? 'white' : 'inherit' }">MY</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      selectedNavItem: null
    };
  },
  setup() {
    const navStyle = ref({
      backgroundColor: 'white',
    })


    return {
      navStyle,
    }
  },
  // computed: {
  //   navStyle() {
  //     return {
  //       backgroundColor: '#001c63'
  //     };
  //   }
  // }
};
</script>

<style>
.custom-navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
}
</style>
