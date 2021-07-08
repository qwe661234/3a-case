<template>
    <el-row type="flex" align="middle">
        <el-col :span="18">
            <UrlBar />
        </el-col>
        <el-col :span="6">
            <StatusBar />
        </el-col>
    </el-row>
</template>

<script>
import UrlBar from "@/components/BuildTestMiddleBlock/BuildTestFormUrlBar.vue";
import StatusBar from "@/components/BuildTestMiddleBlock/BuildTestStatusBar.vue";

export default {
    components: {
        UrlBar,
        StatusBar,
    },
};
</script>

<style lang="scss" scoped>
.el-row {
    margin-top: 10px;
}
</style>
