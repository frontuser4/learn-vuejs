import { createRouter, createWebHistory } from 'vue-router';
import Add from '../components/students/Add.vue';
import Edit from '../components/students/Edit.vue';
import List from '../components/students/List.vue';
import Views from '../components/students/View.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
    {
        path: '/',
        name: 'list',
        component: List
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: PageNotFound
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: Edit
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    },
    {
        path: '/views/:id',
        name: 'views',
        component: Views
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router;