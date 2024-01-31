<template>
    <div>
        <header>
            <h1 
            style="font-weight: 600; margin-left: -230px; margin-top: 50px; font-size: 35px; color: black;"
            >
            추가하기
            </h1>
        </header>
        <label for="emoji">이모지 선택:</label>
        <select v-model="newCard.emoji" id="emoji">
        <option value="💵">💵</option>
        <option value="🎯">🎯</option>
        <!-- 다른 이모지들 추가 -->
        </select>

        <!-- 목표 제목 -->
        <label for="title">목표 제목:</label>
        <input v-model="newCard.title" type="text" id="title">

        <!-- 목표 내용 -->
        <label for="content">목표 내용:</label>
        <textarea v-model="newCard.content" id="content"></textarea>



        <b-button @click="addCard">카드 추가</b-button>
    </div>
    
</template>

<script>
import { mapMutations } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      newCard: {
        emoji: '💵',
        title: '',
        content: '',
        // 다른 카드 속성들을 필요에 따라 추가
      },
    };
  },
  methods: {
    ...mapMutations(['addCard']),
    addCard() {
      const cardWithId = {
        key: uuidv4(),
        status: false,
        ...this.newCard,
      };

      // Vuex 뮤테이션을 호출하여 카드를 추가
      this.addCard(cardWithId);

      // 카드를 추가한 후, 이전 페이지(myGoal.vue)로 이동
      this.$router.push('/mygoal');
    },
  },
};
</script>

<style>

</style>
