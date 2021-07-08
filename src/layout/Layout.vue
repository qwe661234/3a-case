<template>
    <el-container class="h">
        <el-aside width="200px">
            <SidebarTitle />
            <SidebarItem
                v-for="item in sideBarItem"
                :key="item.text"
                :icon="item.icon"
                :text="item.text"
                :link="item.link"
            />
        </el-aside>
        <el-container class="egg">
            <el-header>
                <NavbarTitle :text="title" />
            </el-header>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
import NavbarTitle from "@/components/Navbar/NavbarTitle";
import SidebarTitle from "@/components/Sidebar/SidebarTitle";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import { sideBarItem } from "@/constant/SideBarItem";
import { mapState } from "vuex";
export default {
    name: "Layout",
    components: {
        NavbarTitle,
        SidebarTitle,
        SidebarItem,
    },
    data() {
        return {
            sideBarItem,
        };
    },
    computed: mapState({
        title: state => state.title,
    }),
    mounted() {
        this.$store.commit("updateTitle", "Home");
    },
};
</script>
