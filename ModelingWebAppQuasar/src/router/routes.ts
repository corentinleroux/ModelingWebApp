import { RouteConfig } from 'vue-router';
const routes: RouteConfig[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/editor', component: () => import('components/Editor.vue') },
      { path: '/signin', component: () => import('components/signin.vue') },
      { path: '/signup', component: () => import('components/signup.vue') }
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
