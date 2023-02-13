import { createApp } from "vue";
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
        }
    ]
})


createApp(App).use(router).mount("#app");

// const app = createApp(App)
// app.use(router)
// app.mount('#app')

