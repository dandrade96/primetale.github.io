import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'


const routes = [
    {path:'/', component: Home},
    {path:'/guias', component: () => import('../components/Guia.vue')},
    {path:'/informacoes', component: () => import('../components/Informacoes.vue')},
    {path:'/rankings', component: () => import('../components/Ranking.vue')}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;