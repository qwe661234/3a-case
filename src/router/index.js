import Vue from "vue";
import Router from "vue-router";
// import App from "../App.vue";
import TestList from "../pages/TestList";
import BuildTest from "../pages/BuildTest";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/TestList",
            name: "TestList",
            component: TestList,
        },
        {
            path: "/BuildTest",
            name: "BuildTest",
            component: BuildTest,
        },
    ],
});
