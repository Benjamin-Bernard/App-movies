import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage";

const routes = [
    {
        path: "/homepage",
        name: "Homepage",
        component: HomePage

    },
    {
        path: "/",
        name: "Login",

    },
    {
        path: "/register",
        name: "Register",

    },
    {
        path: "/movies-user",
        name: "MoviesUser"
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;