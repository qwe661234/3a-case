<template>
    <router-link :to="link" tag="div">
        <el-row>
            <el-col :offset="4" :span="4">
                <SidebarItemIcon :icon="icon" />
            </el-col>
            <el-col :span="12">
                <SidebarItemText :text="text" />
            </el-col>
        </el-row>
    </router-link>
</template>

<script>
import SidebarItemText from "@/components/Sidebar/SidebarItem/SidebarItemText";
import SidebarItemIcon from "@/components/Sidebar/SidebarItem/SidebarItemIcon";
export default {
    name: "SidebarItem",
    components: {
        SidebarItemText,
        SidebarItemIcon,
    },
    props: {
        text: {
            type: String,
            default: "",
        },
        icon: {
            type: String,
            default: "",
        },
        link: {
            type: String,
            default: "/",
        },
    },
};
</script>

<style lang="scss" scoped>
.el-row {
    padding: 30px 0 30px 0;
}
</style>
