<template>
  <div>
    <header>
      <headerBack title="목표 수정하기" :backRoute="`/cardDetail/${$route.params.id}/goalinfo`" /> 
    </header> 
    <div>
        <b-form @submit.prevent="saveChanges" class="container-style">
          <b-form-group label="아이콘 수정" class="title-style">
            <!-- Icon Input -->
            <b-form-textarea v-model="goalIcon" placeholder="아이콘을 입력하세요..."></b-form-textarea>
          </b-form-group>
          <b-form-group label="목표 제목 수정하기" class="title-style">
            <!-- 목표 Subject Input -->
            <b-form-textarea v-model="goalSubject" placeholder="제목을 입력하세요..."></b-form-textarea>
          </b-form-group>
          <b-form-group label="목표 디테일 수정하기" class="title-style" >
            <!-- 목표 Contents Input -->
            <b-form-textarea 
              v-model="goalText" 
              laceholder="목표를 입력하세요..." 
              style="height: 200px;"
              >
            </b-form-textarea>
          </b-form-group>

        <b-button type="submit" variant="primary" class="button-style">저장하기</b-button>
      </b-form>
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
        this.goalSubject = card.title;
        this.goalText = card.contents; // 편집할 목표 텍스트를 가져와서 데이터에 저장
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

<style scoped>
.button-style {
  Padding: 10px;
  margin-top: 10px;
  width: 360px;
}
.container-style {
  margin: 10px;
}
.title-style {
  margin-bottom: 20px;
  font-weight: 400;
  color: #000000;
}

</style>
