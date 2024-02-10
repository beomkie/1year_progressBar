<template>
    <div style="height: 800px;">
      <nav :style="navStyle">
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
      </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.custom-navbar-nav {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

</style>