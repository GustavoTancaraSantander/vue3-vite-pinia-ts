import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CounterView from "../views/CounterView.vue";
import ProductView from "../views/ProductView.vue";
import MedicalView from "../views/MedicalView.vue";

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
    {
        path: "/medical",
        name: "MedicalInterface",
        component: MedicalView,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
