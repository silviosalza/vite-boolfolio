import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import AppAbout from "./components/AppAbout.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: "/projects",
            name:"projects",
            component: ProjectsList,
        },
        {
            path: "/aboutUs",
            name:"aboutUs",
            component: AppAbout, 
        }
    ]


});

export {router};