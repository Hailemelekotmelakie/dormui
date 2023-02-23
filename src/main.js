import { createApp } from "vue";
import VueCookies from 'vue-cookies';

import { createRouter, createWebHistory } from 'vue-router'

import App from "./App.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/Homepage/HomePage.vue')
        },
        {
            path: '/contact',
            component: () => import('@/Contact/ContactPage.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/NotFound/NotFound.vue')
        }

    ]
})

createApp(App).use(router).use(VueCookies).mount("#app");

