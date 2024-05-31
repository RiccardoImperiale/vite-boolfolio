import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
    ]
})

export default router;