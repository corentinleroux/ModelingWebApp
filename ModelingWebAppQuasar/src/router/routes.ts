import { RouteConfig } from 'vue-router';
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/editor', component: () => import('components/Editor.vue') },
      { path: '/editor2', component: () => import('components/Editor2.vue') },
      { path: '/signup', component: () => import('components/register.vue') },
      { path: '/login', component: () => import('components/Login.vue') }

    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
