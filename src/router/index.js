import { createWebHistory, createRouter } from "vue-router";
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import NotFound from '/src/views/NotFound.vue'
const history = createWebHistory();
const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    // 404 page must be placed at the end !!!
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];
const router = createRouter({ history, routes });

router.resolve({
    name: 'not-found',
    params: { pathMatch: ['not', 'found'] },
}).href // '/not/found'

export default router;