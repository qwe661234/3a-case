<template>
    <el-row>
        <el-col :span="12">
            <AddtestButton />
        </el-col>
        <el-col :span="12">
            <SearchInput />
        </el-col>
    </el-row>
</template>

<script>
import AddtestButton from "@/components/TestListTopbar/TestListTopbarAddtestButton";
import SearchInput from "@/components/TestListTopbar/TestListTopbarSearchInput";
export default {
    name: "Topbar",
    components: {
        AddtestButton,
        SearchInput,
    },
};
</script>
