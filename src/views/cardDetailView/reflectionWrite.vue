<template>
    <div>
        <div>
            <h2>회고하기</h2>
        </div>
        <b-form class="container-style">
            <b-form-group label="회고(라벨 수정 필요)" class="title-style">
                <b-form-textarea 
                    placeholder="목표 수행에 대한 회고를 작성해보세요!"
                    style="height: 200px;"
                    >
                </b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary" class="button-style">저장하기</b-button>
        </b-form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title-style {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 400;
    color: #000000;
}
.container-style {
    margin: 10px;
}
.button-style {
    Padding: 10px;
    margin-top: 10px;
    width: 360px;
}

</style>
