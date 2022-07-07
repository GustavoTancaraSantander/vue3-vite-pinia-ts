import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CounterView from "../views/CounterView.vue";
import ProductView from "../views/ProductView.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/counter",
        name: "Counter",
        component: CounterView,
    },
    {
        path: "/product",
        name: "ProductDetail",
        component: ProductView,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;