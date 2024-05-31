import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContact from "./views/AppContact.vue";

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
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
    ]
})

export default router;