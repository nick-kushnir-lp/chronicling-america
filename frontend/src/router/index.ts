import { createRouter, createWebHistory } from 'vue-router';
import SearchView from '../views/SearchView.vue';
import CompanyDetailView from '../views/CompanyDetailView.vue';

const routes = [
    { path: '/', component: SearchView },
    { path: '/company/:id', component: CompanyDetailView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
