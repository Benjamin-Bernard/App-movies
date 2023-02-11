import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage";
import LoginPage from "@/components/LoginPage";
import RegisterPage from "@/components/RegisterPage";

const routes = [
    {
        path: "/",
        name: "Homepage",
        component: HomePage

    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage

    },
    {
        path: "/register",
        name: "Register",
        component: RegisterPage

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