<template>
    <div>
        建立考試
        <div>
            <span class="demonstration">自定义</span>
            <el-image>
                <div slot="error" class="image-slot">
                    <i class="el-icon-upload"></i>
                </div>
            </el-image>
        </div>
    </div>
</template>

<script>
export default {
    name: "BuildTest",
    components: {},
    mounted() {
        this.$store.commit("updateTitle", "建立考試");
    },
};
</script>
