import { createWebHistory, createRouter } from 'vue-router'

import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContact from "./views/AppContact.vue";
import SingleProject from "./views/SingleProject.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            // meta: { headerColor: 'transparent' }
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: AppAbout
        // },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: SingleProject
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})

export default router;