<template>
    <div class="h1">{{ text }}</div>
</template>

<script>
export default {
    name: "NavbarTitle",
    props: {
        text: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/color.scss";
div {
    color: $color-white;
}
</style>
