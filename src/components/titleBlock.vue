<template>
    <header>
        <h2 class="contents-title"> {{ title }}</h2>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }

}
</script>

<style scoped>
.contents-title {
  font-weight: 600;
  text-align: left;
  margin-left: 25px;
  margin-top: 100px;
  font-size: 30px;
  color: black;
}

</style>