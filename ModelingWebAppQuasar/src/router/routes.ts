import { RouteConfig } from 'vue-router';
import Editor from 'components/Editor.vue';
import MainLayout from 'layouts/MainLayout.vue';
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: "/editor",
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('components/Editor.vue') }
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
