<template>
    <div class="progress-container">
            <h3>{{ currentYear }}년</h3>
            <div class="remaining-days">
                <p>새해가 시작하고 {{ passDate }}일이 지났습니다.</p>
                <p>앞으로 남은 {{ currentYear }}년, {{ DdayCalc }}일</p>
            </div>
            <div class="progress-wrapper">
                <b-progress :max=100 :style="progressContainerStyle">
                    <b-progress-bar 
                    :value="progressbarCalc" 
                    :label="`${progressbarCalc}%`"
                    :style="progressBarStyle"
                    >
                </b-progress-bar>
                </b-progress>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            //progressBar 내부 그래프 스타일
            progressBarStyle: {
                backgroundColor: '#2478FF',
                height: '45px',
                borderRadius: '10px',
                marginTop: '0px',
                overflow: 'hidden',
                border: '0px solid #ccc'
            },
            //progressBar 외부 배경 스타일
            progressContainerStyle: {
                height: '45px',
                width: '800px',
                marginBottom: '0px',
                backgroundColor: '#E4E4E4',
                border: '0px solid #ccc',
            },
            
        }
    },
    computed: {
        DdayCalc() {
            const totaldays = new Date('2024-12-31');
            const currentDate = new Date();
            const timeDifference = totaldays - currentDate;
            const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000) + 1);

            return daysDifference;
        },
        progressbarCalc() {
            const startDate = new Date('2024-01-01');
            const currentDate = new Date();
            const differenceDays = currentDate - startDate;
            const changeDays = Math.floor(differenceDays / (24 * 60 * 60 * 1000) + 1);
            const percentageCalc = (changeDays / 365) * 100;

            return percentageCalc.toFixed(1);
        },
        passDate() {
            const startDate = new Date('2024-01-01');
            const currentDate = new Date();
            const differenceDays = currentDate - startDate;
            const changeDays = Math.floor(differenceDays / (24 * 60 * 60 * 1000) + 1);

            return changeDays;
        },
        currentYear() {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            return currentYear;
        },
    }

}
</script>

<style scoped>
.progress-container {
    text-align: center;
    margin: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.progress-container h3 {
    font-weight: 600;
    color: black;
    margin-top: 30px; 
    margin-left: -260px; 
    font-weight: 550;
    font-size: 24px;
}

.progress-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.progress-bar {
    background-color: #2478FF; /* progress color */
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #000; /* Border around the progress bar */
}

.remaining-days {
    margin-top: 20px;
    font-weight: 500;
    font-size: 15px;
    color: black;
}

</style>