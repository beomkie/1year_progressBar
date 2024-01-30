<template>
  <div id="app">
    <router-view></router-view>
    <b-navbar fixed="bottom" type="dark" variant="black" style="height: 70px;">
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="custom-navbar-nav" style="padding-left:20px;">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/mygoal">Goal</b-nav-item>
          <b-nav-item to="/about">(Empty)</b-nav-item>
          <b-nav-item to="/myprofile">MY</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
// import yearHeader from './components/yearHeader.vue';
// import yearProgress from './components/yearProgress.vue';

export default {
  name: 'App',
  // components: {
  //   yearProgress,
  //   yearHeader,
  // }
}
</script>

<style>
#app {
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.topview {
    padding-top: 50px;
    padding-bottom: 10px;
}

.topview h1 {
    font-weight: 600;
    margin-top: 50px;
}

.home-button {
  font-weight: 500;
  color:black;
}

.button {
  margin-left: 30px;
  font-weight: 500;
  color:black;
}

.custom-navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
}
</style>
