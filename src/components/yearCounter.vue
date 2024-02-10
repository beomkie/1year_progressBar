<template>
    <div class="progress-container">
            <h3 style="margin-top: 50px; margin-left: -260px; font-weight: 550;">{{ currentYear }}년</h3>
            <div class="progress-wrapper">
                <!-- <div class="progress" role="progressbar" aria-label="Example with label" :aria-valuenow="progressbarCalc" aria-valuemin="0" aria-valuemax="100" style="width: 900px; height: 30px;">
                    <div class="progress-bar" :style="{ width: progressbarCalc + '%' }">{{ progressbarCalc }}%</div>
                </div> -->
                <b-progress :max=100 :style="progressContainerStyle">
                    <b-progress-bar 
                    :value="progressbarCalc" 
                    :label="`${progressbarCalc}%`"
                    :style="progressBarStyle"
                    >
                </b-progress-bar>
                </b-progress>
            </div>
            <div class="remaining-days">
                <p>새해가 시작하고 {{ passDate }} 일이 지났습니다.</p>
                <p>앞으로 남은 {{ currentYear }}년<br> {{ DdayCalc }}일</p>
            </div>
            <div>

            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            progressBarStyle: {
                backgroundColor: '#2478FF',
                height: '50px',
                borderRadius: '10px',
                marginTop: '0px',
                overflow: 'hidden',
                border: '1px solid #ccc'
            },
            progressContainerStyle: {
                height: '50px',
                width: '800px',
                marginBottom: '0px',
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
}

.progress-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.progress-bar {
    background-color: #2478FF; /* progress color */
    height: 20px;
    border-radius: 10px;
    /* margin-top: 30px; */
    overflow: hidden;
    border: 1px solid #000; /* Border around the progress bar */
}

.remaining-days {
    margin-top: 50px;
    font-weight: 500;
    color: black;
}

</style>