<template>
    <el-input
        class="round"
        placeholder="輸入考試標題"
        suffix-icon="el-icon-search"
    >
    </el-input>
</template>

<style lang="scss" scoped>
.el-input {
    width: 209px;
    height: 33px;
    box-shadow: 2px 3px 3px 3px #cccccc;
    border-radius: 30px;
    /deep/ .el-input__inner {
        border-radius: 30px;
    }
}
</style>
