import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';
import Product from '@/views/Product.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/sign-in', name: 'SignIn', component: SignIn },
    { path: '/product', name: 'Product', component: Product },
  ],
});

export default router;
