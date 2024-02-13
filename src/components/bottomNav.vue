<template>
  <div style="height: 800px;">
    <nav :style="navStyle">
      <b-navbar fixed="bottom" type="dark" variant="black" style="height: 70px;">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="custom-navbar-nav" style="padding-left:20px;">
            <b-nav-item @click="selectedNavItem = 'home'" to="/" :style="{ fontWeight: selectedNavItem === 'home' ? 'bold' : 'normal', color: selectedNavItem === 'home' ? 'white' : 'inherit' }">Home</b-nav-item>
            <b-nav-item @click="selectedNavItem = 'goal'" to="/mygoal" :style="{ fontWeight: selectedNavItem === 'goal' ? 'bold' : 'normal', color: selectedNavItem === 'goal' ? 'white' : 'inherit' }">Goal</b-nav-item>
            <b-nav-item @click="selectedNavItem = 'about'" to="/about" :style="{ fontWeight: selectedNavItem === 'about' ? 'bold' : 'normal', color: selectedNavItem === 'about' ? 'white' : 'inherit' }">(Empty)</b-nav-item>
            <b-nav-item @click="selectedNavItem = 'myprofile'" to="/myprofile" :style="{ fontWeight: selectedNavItem === 'myprofile' ? 'bold' : 'normal', color: selectedNavItem === 'myprofile' ? 'white' : 'inherit' }">MY</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedNavItem: null
    };
  },
  computed: {
    navStyle() {
      return {
        // Add your custom styles for the navigation here
        // Example: backgroundColor: '#333'
      };
    }
  }
};
</script>

<style>
.custom-navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
}
</style>
