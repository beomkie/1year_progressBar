<template>
  <div>
    <!-- 기타 코드는 동일 -->
    <div class="container mt-4">
      <div class="rule-container">
        <progressBar />
        <div class="container mt-4">
        <div class="contetnts-style">
          <h3>목표 디테일</h3>
          <p style="text-align: left;">{{ card && card.contents ? card.contents : '목표가 없습니다.' }}</p>
        </div>
      </div>
        <h3>설정된 규칙</h3>
        <div class="rule-detail">
          <div class="rule-routine">
            <!-- card.ruleReqDto가 존재하고, 그 안에 routine 속성이 있는지 확인 -->
            <template v-if="card.ruleReqDto && card.ruleReqDto.routine">
              <!-- routine 값에 따라 다른 내용 표시 -->
              <p>{{ ruleTitle(card.ruleReqDto.routine) }}</p>
              <!-- 매일이라면 -->
              <div v-if="card.ruleReqDto.routine === 1">
                <p>{{ convertTime(card.ruleReqDto.timeAt) }}</p>
              </div>
              <!-- 매주라면 -->
              <div v-else-if="card.ruleReqDto.routine === 2">
                <div v-if="card.ruleReqDto.ruleRepeatList && card.ruleReqDto.ruleRepeatList.length > 0">
                  
                </div>   
              </div>
              <!--매달이라면-->
              <div v-else-if="card.ruleReqDto.routine === 3">
                <p>{{ convertDate(card.ruleReqDto.ruleRepeatList) }}</p>
              </div>
            </template>
            <span v-else>규칙이 설정되지 않았습니다.</span>
          </div>
          <div class="vertical-line"></div>
          <div v-if="card.ruleReqDto && card.ruleReqDto.contents" class="caption-container">
            <p>{{ card.ruleReqDto.contents }}</p>
          </div>
          <span v-else>Contents DB Error</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import progressBar from '@/components/progressBar.vue';

export default {
  data() {
    return {
      card: {
        type: Object, // 데이터 타입을 Object로 지정
        default: () => ({}) // 빈 객체를 기본값으로 설정
      }
    };
  },
  components: {
    progressBar,
  },
  mounted() {
    this.fetchCardData();
  },
  methods: {
    async fetchCardData() {
      const cardId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:3000/card/${cardId}`);
        this.card = response.data;
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    },
    ruleTitle(routine) {
      if (routine === 1) {
        return '매일';
      } else if (routine === 2) {
        return '매주';
      } else if (routine === 3) {
        return '매월';
      } else {
        return 'Error :('; // 다른 경우에는 빈 문자열 반환
      }
    },
    convertTime(time) {
      if (!time) return ''; // 시간이 없을 경우 빈 문자열 반환
      const [hours, minutes] = time.split(':').map(Number);
      const meridiem = hours >= 12 ? '오후' : '오전';
      const displayHours = hours % 12 === 0 ? 12 : hours % 12;
      const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${meridiem} ${displayHours}:${displayMinutes}`;
    },
    convertDate(dates) {
      if (!Array.isArray(dates)) {
        return dates + '일';
      }

      if (dates.length === 0) {
        return '';
      }

      const formattedNumbers = dates.join(', ');
      return formattedNumbers + '일';
    }
    
  },
};
</script>

<style scoped>
.progress-container {
  margin-top: 30px;
  margin-bottom: 60px;
}
.contetnts-style {
  margin-top: 40px;
  margin-bottom: 60px;
}
.contetnts-style h3 {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20px;
}
.contetnts-style p {
  margin: 10px;
}
.rule-container{
  margin-bottom: 60px;
}
.rule-container h3 {
  text-align: left;
  margin-left: 10px;
  margin-bottom: 20px;
}
.rule-style {
  justify-content: left;
  margin-left: 20px;
}
.rule-detail {
  display: flex;
  justify-content: left;
}
.rule-routine {
  margin-left: 30px;
}
.vertical-line {
  height: 80px;
  border-left: 1px solid rgb(199, 199, 199); 
  margin-left: 30px;
}
.caption-container {
  margin-left: 20px;
}

</style>
