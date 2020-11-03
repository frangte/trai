import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                redirect: 'edit',
            },
            {
                path: '/edit',
                component: () => import("@/views/Edit"),
            },
            {
                path: '/folders',
                component: () => import("@/views/Folders"),
            },
            {
                path: '/search',
                component: () => import("@/views/Search"),
            }
        ]
    })
;

export default routes;
