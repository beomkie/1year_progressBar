<template>
    <div>
        <header class="header-style">
            <Header title="소셜" />
            <!--클릭 이벤트 추가하기-->
            <img src="@/assets/search.png" alt="검색하기" @click="gotoSearchPage" class="search-button"> <!--클릭 이벤트 추가하기-->
        </header>
        <TabSelector 
            :selectedTabName="selectedTabName" 
            :tabs="tabs" 
            @tab-selected="selectTab"
        />
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
            //Nav Select
            selectedTabName: 'following',
            tabs: [
                { name: 'following', label: '팔로잉' },
                { name: 'recommand', label: '추천' }
            ]
        }
    },
    methods: {
        selectTab(tabName) {
            this.selectedTabName = tabName;
        },
        gotoSearchPage() {
            this.$router.push({ name: 'userSearch' });
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
.header-style {
    display: flex;
    justify-content: space-between;
}
.search-button {
    width: 35px;
    height: 35px;
    margin-top: 80px;
    margin-right: 20px;
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