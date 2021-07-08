<template>
    <div class="section">
        <el-row>
            <imageContainer />
        </el-row>
        <el-row>
            <MiddleBlock />
        </el-row>
    </div>
</template>

<script>
import imageContainer from "@/container/BuildTest/BuildTestImageContainer.vue";
import MiddleBlock from "@/container/BuildTest/BuildTestMiddleBlock.vue";

export default {
    name: "BuildTest",
    components: {
        imageContainer,
        MiddleBlock,
    },
    mounted() {
        this.$store.commit("updateTitle", "建立考試");
    },
};
</script>

<style lang="scss" scoped></style>
