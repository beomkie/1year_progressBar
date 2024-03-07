<template>
    <div>
        <div>
            <Header title="성취" />
        </div>
        <TabSelector :selectedTabName="selectedTabName" :tabs="tabs" @tab-selected="selectTab" />
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
import Header from '@/components/headerSet.vue';
import TabSelector from '@/components/selectTab.vue';

export default {
    components: {
        Header,
        TabSelector,
    },
    data() {
        return {
            userName: 'beomkie',
            //Nav Select
            selectedTabName: 'allProgress',
            tabs: [
                { name: 'allProgress', label: '전체수행률' },
                { name: 'badgeView', label: '뱃지' }
            ]
        }
    },
    methods: {
        selectTab(tabName) {
            this.selectedTabName = tabName;
        }
    }
}

</script>

<style scoped>
.system-font {
    margin-top: 30px;
    font-weight: 600;
    color: black;
}
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