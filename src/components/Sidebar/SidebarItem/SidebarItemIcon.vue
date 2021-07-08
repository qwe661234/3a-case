<template>
    <i :class="icon"></i>
</template>

<script>
export default {
    name: "SidebarItemIcon",
    props: {
        icon: {
            type: String,
            default: "",
        },
    },
};
</script>
