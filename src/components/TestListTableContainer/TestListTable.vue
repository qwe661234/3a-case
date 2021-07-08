<template>
    <el-table :data="tabledata" height="250" border style="width: 100%">
        <el-table-column prop="img" label="" width="180"> </el-table-column>
        <el-table-column prop="title" label="名稱" width="180">
        </el-table-column>
        <el-table-column prop="socre" label="及格分數"> </el-table-column>
        <el-table-column prop="difficulty" label="難易度"> </el-table-column>
        <el-table-column prop="status" label="活動狀態"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
                <el-button
                    type="text"
                    size="small"
                    @click="handleEdit(scope.$index, scope.row)"
                >
                    編輯內容
                    <i class="el-icon-edit"></i>
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    name: "TestListTable",
    props: {
        tabledata: {
            type: Array,
            default() {
                return [
                    {
                        img: "",
                        title: "",
                        socre: "",
                        difficulty: "",
                        status: "",
                    },
                ];
            },
        },
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
    },
};
</script>
