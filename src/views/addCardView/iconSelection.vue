<template>
  <div class="form-setup">
    <div class="emoji-input">
      <input
        v-model="selectedIcon"
        type="text"
        class="form-control"
        placeholder="아이콘을 선택하세요..."
        @focus="showEmojiPicker = true"
        @blur="onBlur"
      />
      <!-- 이모지 피커는 필요할 때만 표시 -->
      <emoji-mart
        v-if="showEmojiPicker"
        @select="addEmoji"
        title="아이콘 선택하기"
        set="emojione"
        :skin="2"
        :size="24"
      />
    </div>
    <!-- 아이콘 미션택에 대한 에러 메시지 -->
    <div v-if="!selectedIcon && showErrorMessage" class="text-danger mt-2">아이콘을 선택하지 않았습니다!</div>
    <div class="button-container">
      <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3" style="height: 50px;">다음</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { Picker as EmojiMart } from 'emoji-mart-vue-2'; // EmojiMart 컴포넌트 가져오기

export default {
  components: {
    EmojiMart, // EmojiMart 컴포넌트 등록
  },
  data() {
    return {
      showErrorMessage: false, // 에러 메시지 표시 여부
      showEmojiPicker: false, // 이모지 피커 표시 여부
      selectedIcon: '', // 선택된 이모지
    };
  },
  methods: {
    ...mapActions(['updateIconAndNavigate']), // mapActions를 사용하여 액션 매핑

    addEmoji(emoji) {
      // 이모지 클릭 이벤트 처리
      this.selectedIcon = emoji.native;
      this.showEmojiPicker = false; // 선택 후 피커 닫기
    },

    goToNextStep() {
      const icon = this.selectedIcon;
      // 아이콘 선택 여부 확인
      if (!icon) {
        this.showErrorMessage = true; // 에러 메시지 표시
        return;
      }
      this.$store.dispatch('updateIconAndNavigate', { icon, router: this.$router });
    },

    onBlur() {
      // 포커스를 잃었을 때 이모지 피커 닫기
      setTimeout(() => {
        this.showEmojiPicker = false;
      }, 200);
    },
  },
};
</script>

<style scoped>
.form-setup {
  padding: 20px;
  margin-top: 40px;
}

.text-danger {
  color: red;
}

.button-container {
  position: fixed;
  margin-top: 30px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  bottom: 100px;
}
</style>
