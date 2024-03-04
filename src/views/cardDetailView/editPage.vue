<template>
  <div>
    <header>
      <headerBack title="편집하기" :backRoute="'/'" /> 
    </header> 
    <div>
      <b-card>
          <b-form @submit.prevent="saveChanges">
            <b-form-group label="아이콘 수정">
              <!-- Icon Input -->
              <b-form-textarea v-model="goalIcon" placeholder="아이콘을 입력하세요..."></b-form-textarea>
            </b-form-group>
            <b-form-group label="목표 제목 수정하기">
              <!-- 목표 Subject Input -->
              <b-form-textarea v-model="goalSubject" placeholder="제목을 입력하세요..."></b-form-textarea>
            </b-form-group>
            <b-form-group label="목표 디테일 수정하기">
              <!-- 목표 Contents Input -->
              <b-form-textarea v-model="goalText" placeholder="목표를 입력하세요..."></b-form-textarea>
            </b-form-group>

          <b-button type="submit" variant="primary">저장</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import headerBack from '@/components/headerBack.vue';

export default {
  data() {
    return {
      goalIcon: '',
      goalSubject: '',
      goalText: '', // 편집할 목표 텍스트를 담을 데이터
    }
  },
  components: {
    headerBack,
  },
  created() {
    this.fetchCardData();
  },
  methods: {
    async fetchCardData() {
      const cardId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:3000/card/${cardId}`);
        const card = response.data;
        this.goalIcon = card.icon;
        this.goalSubject = card.subject;
        this.goalText = card.text; // 편집할 목표 텍스트를 가져와서 데이터에 저장
      } catch(error) {
        console.error('Error fetching card data:', error);
      }
    },
    async saveChanges() {
  const cardId = this.$route.params.id;
  try {
    // 수정할 필드들을 데이터 객체에 추가
    const data = {
      icon: this.goalIcon, // icon 수정
      subject: this.goalSubject, // subject 수정
      text: this.goalText, //text 수정
    };

    // axios.put 요청
    await axios.put(`http://localhost:3000/card/${cardId}`, data);
    
    console.log('Changes saved successfully.');
    // 저장 후 홈 화면으로 이동하거나 다른 동작을 수행할 수 있음
    this.$router.push('/');
  } catch(error) {
    console.error('Error saving changes:', error);
  }
},

  }
}
</script>

<style>

</style>
