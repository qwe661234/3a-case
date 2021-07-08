<template>
    <el-row type="flex" align="middle">
        <el-col :span="3">
            <FormUrlBarText />
        </el-col>
        <el-col :span="6">
            <FormUrlBarInput />
        </el-col>
    </el-row>
</template>

<script>
import FormUrlBarInput from "@/components/BuildTestMiddleBlock/BuildTestFormUrlBar/BuildTestFormUrlBarInput.vue";
import FormUrlBarText from "@/components/BuildTestMiddleBlock/BuildTestFormUrlBar/BuildTestFormUrlBarText.vue";

export default {
    components: {
        FormUrlBarInput,
        FormUrlBarText,
    },
};
</script>
