<template>
  <div>
    <b-card-group deck>
        <b-card
        header="featured"
        header-tag="header"
        footer="Card Footer"
        footer-tag="footer"
        title="Title"
        >
        <b-card-text>Header and footers using props.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>

        <b-card title="Title" header-tag="header" footer-tag="footer">
        <template #header>
            <h6 class="mb-0">Header Slot</h6>
        </template>
        <b-card-text>Header and footers using slots.</b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        <template #footer>
            <em>Footer Slot</em>
        </template>
        </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
    methods: {
        handleFormSubmission(formData) {
        // 자식 컴포넌트에서 받은 데이터를 처리합니다.
        console.log(formData);
        // 여기서 부모 컴포넌트의 데이터를 업데이트하거나 다른 작업을 수행할 수 있습니다.
        }
    }

}
</script>

<style>

</style>