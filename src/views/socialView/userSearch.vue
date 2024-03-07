<template>
  <div>
    <header>
      <headerBack title="검색" :backRoute="'socialView/following'"/>
    </header>
    <div class="search">
      <input
        type="text"
        v-model="searchText"
        @input="handleSearch"
        placeholder="검색어를 입력하세요..."
        class="searchBar-style"
      />
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
      searchText: '' // 검색어를 담을 데이터
    };
  },
  methods: {
    handleSearch() {
      // 검색어가 변경될 때 실행되는 메서드
      // 여기서는 검색어가 변경될 때마다 무엇을 할지 정의할 수 있습니다.
    }
  }

}
</script>

<style scoped>
.search {
  margin-top: 20px;
}
.searchBar-style {
  width: 350px;
  height: 40px;
  padding-left: 10px;
  border: none; /* 기존 테두리 제거 */
  border-bottom: 2px solid #000; /* 밑줄 스타일 */
  outline: none; /* 포커스 효과 제거 */
}
.searchBar-style::placeholder {
  color: #999;
  font-size: 16px;
}
.searchBar-style:focus {
  border-color: #007bff; /* 포커스 되었을 때 밑줄 색상 변경 */
}
</style>
