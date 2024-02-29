<template>
    <b-form>
        <b-form-group label="목표 구체화" label-for="contents" class="mb-5">
            <b-form-textarea v-model="contents" placeholder="도달하고자 하는 목표를 구체적으로 작성해보세요." rows="3" max-rows="100" required></b-form-textarea>
        </b-form-group>

        <div v-if="!contents && showErrorMessage" class="text-danger mt-2">구체적인 목표를 입력해 보세요!</div>

        <b-button @click="goToNextStep" variant="primary" class="w-100 mt-3">다음</b-button>
        <b-button @click="previousStep" variant="outline-secondary" class="w-100">이전</b-button>
    </b-form>
    
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            contents: '',
            showErrorMessage: false
        };
    },
    computed: {
        addContents: {
            get() {
                return this.$store.state.formData.text;
            },
            set(value) {
                this.$store.commit('updateFormData', {text: value});
            },
        },
    },
    methods: {
        ...mapActions(['updateContentsAndNavigate','goToPreviousStep']),

        goToNextStep() {
            const text = this.contents;
            if(!text) {
                this.showErrorMessage = true; //아무것도 입력하지 않은 경우 에러 메시지 표시
                return;
            }
            this.showErrorMessage = false;
            this.$store.dispatch('updateContentsAndNavigate', { text, router: this.$router });
        },
        previousStep() {
        // 이전으로 가기 버튼 클릭 시 goToPreviousAllreset 액션 실행
            this.goToPreviousStep(['subject']);
            this.$router.go(-1);
        },
    }

}
</script>

<style>

</style>