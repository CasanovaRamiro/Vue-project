<template>
    <span @click=$router.go(-1) class="back-button">go back</span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.back-button {
    color: gray;
    font-size: 20px;
    border: 1px solid gray;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    background-color: #ffffff;
    transition: 0.1s;
    margin-top: 20px;
}

.back-button:hover {
    color: black;
    border-color: black;
}
</style>