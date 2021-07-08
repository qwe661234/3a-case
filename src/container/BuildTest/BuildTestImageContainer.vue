<template>
    <div class="imageContainer">
        <ImageContainerImage />
        <ImageContainerButton />
    </div>
</template>

<script>
import ImageContainerImage from "@/components/BuildTestImageContainer/BuildTestImageContainerImage.vue";
import ImageContainerButton from "@/components/BuildTestImageContainer/BuildTestImageContainerButton.vue";
export default {
    name: "BuildTestImageContainer",
    components: {
        ImageContainerImage,
        ImageContainerButton,
    },
};
</script>

<style lang="scss" scoped>
.imageContainer {
    position: relative;
    border: 1px solid black;
    width: 840px;
    height: 394px;
    top: 10px;
    background-color: #dbdada;
}
</style>
