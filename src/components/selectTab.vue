<template>
  <div class="navStyle">
      <div
          v-for="tab in tabs"
          :key="tab.name"
          class="nav-item"
          :class="{ active: selectedTabName === tab.name }"
          @click="selectTab(tab.name)"
      >
          {{ tab.label }}
      </div>
  </div>
</template>

<script>
export default {
props: {
  selectedTabName: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true
  }
},
methods: {
  selectTab(tabName) {
    this.$emit('tab-selected', tabName);
    this.$router.push({ name: tabName }); // 라우터로 페이지 변경
  }
}
};
</script>

<style scoped>
.navStyle {
display: flex;
justify-content: space-around;
background-color: #ffffff;
padding: 10px 0;
}

.nav-item {
cursor: pointer;
padding: 10px 20px;
border-bottom: 4px solid transparent;
}

.nav-item.active {
border-bottom-color: #000000;
color: #000000;
}
</style>
