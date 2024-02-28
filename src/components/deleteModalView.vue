<template>
  <b-modal :id="modalId" :title="title" centered>
    <slot></slot>
    <template #modal-footer>
      <b-button variant="danger" @click="confirmDelete">삭제</b-button>
      <b-button variant="secondary" @click="closeModal">닫기</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    confirmDelete() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped>
/* 모달 스타일링 */
.b-modal {
  max-width: 90vw; /* 모바일 화면에 맞게 최대 너비 조정 */
}

/* 모달 헤더 스타일링 */
.b-modal-header {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}

/* 모달 바디 스타일링 */
.b-modal-body {
  padding: 1rem;
}

/* 모달 푸터 스타일링 */
.b-modal-footer {
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  justify-content: center;
}
</style>
