import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import ReceptView from "@/views/ReceptView.vue";
import ShopView from "@/views/ShopView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/recipes/:slug',
      name: 'recipes',
      component: ReceptView,
      props:true
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    }
  ],
})

export default router
