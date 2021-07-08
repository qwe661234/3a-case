<template>
    <el-row>
        <Table :tabledata="TestData" />
    </el-row>
</template>

<script>
import Table from "@/components/TestListTableContainer/TestListTable";
import { mockTest } from "@/mock/test.js";
export default {
    name: "TestListTableContainer",
    components: { Table },
    data() {
        return {
            TestData: mockTest,
        };
    },
};
</script>
