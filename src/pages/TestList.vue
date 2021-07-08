<template>
    <div>
        <Topbar />
        <Table />
    </div>
</template>

<script>
import Topbar from "@/container/TestList/TestListTopbar.vue";
import Table from "@/container/TestList/TestListTableContainer.vue";
export default {
    name: "TestList",
    components: { Topbar, Table },
    mounted() {
        this.$store.commit("updateTitle", "考試清單");
    },
};
</script>

<style lang="scss" scoped></style>
