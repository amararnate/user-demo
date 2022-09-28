import {createRouter, createWebHistory} from 'vue-router'
import UserList from "@/components/UserList.vue";
import UserDetails from "@/components/UserDetails";

const routes = [
    {
        path: '/',
        name: 'home',
        component: UserList
    },
    {
        path: '/:username',
        name: 'user',
        component: UserDetails,
        params: true
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
