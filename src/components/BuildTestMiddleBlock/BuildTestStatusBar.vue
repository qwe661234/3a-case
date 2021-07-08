<template>
    <el-row type="flex" align="middle">
        <el-col :span="10">
            <StatusBarText />
        </el-col>
        <el-col :span="8">
            <StatusBarSwitch />
        </el-col>
    </el-row>
</template>

<script>
import StatusBarSwitch from "@/components/BuildTestMiddleBlock/BuildTestStatusBar/BuildTestStatusBarSwitch.vue";
import StatusBarText from "@/components/BuildTestMiddleBlock/BuildTestStatusBar/BuildTestStatusBarText.vue";

export default {
    components: {
        StatusBarText,
        StatusBarSwitch,
    },
};
</script>
