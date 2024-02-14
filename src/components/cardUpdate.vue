<template>
    <div>
      <b-card-group deck>
        <!-- 서버에서 가져온 데이터를 기반으로 카드 생성 -->
        <b-card 
            v-for="(card, index) in cardData" 
            :key="index"
        >
          <template #header>
            <h6 class="mb-0">{{ card.icon }}</h6>
          </template>
          <b-card-text>{{ card.subject }}</b-card-text>
          <b-button @click="movetoPage(card.id)" variant="primary" class="button-style">자세히 보기</b-button>
          <b-button @click="openModal(card.id)" variant="danger" class="button-style">삭제</b-button>
        </b-card>
      </b-card-group>
        <Modal
            v-if="openModal"
        />
    </div>
  </template>
  
  <script>
  import Modal from '@/components/ModalView.vue';
  import { ref } from 'vue';
  
  export default {
    props: ['cardData'],
    components: {
        Modal,
    },
    setup() {
        const cardUpdateId = ref(null);
        const showDeleteModal = ref(false);

        const openModal = (id) => {
            cardUpdateId.value = id;
            showDeleteModal.value = true;
        };
        
        const movetoPage = (id) => {
            console.log(id)
            this.$router.push({
                name: 'cardDetail',
                params: {
                    id: id
                },
            })
        }

        return {
            cardUpdateId,
            openModal,
            showDeleteModal,
            movetoPage,
        }
     
    },
    methods: {
    },
    
  };
  </script>
  
  <style scoped>
  .button-style {
    margin: 10px;
  }
  
  </style>
  