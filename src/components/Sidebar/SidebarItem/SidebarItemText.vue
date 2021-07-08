<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
    name: "SidebarTitleText",
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
    color: $color-lightGray;
    text-align: left;
}
</style>
