<template>
    <header>
        <h1 class="page-title">{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    },
}
</script>

<style scoped>
.page-title {
  font-weight: 600;
  text-align: left;
  margin-left: 25px;
  margin-top: 80px;
  font-size: 35px;
  color: black;
}
</style>
