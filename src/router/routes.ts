import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/f/',
    component: () => import('src/layouts/FaculyLayout.vue'),
    children: [
      {
        path: 'dashboard', component: () => import('pages/dashboard.vue')
      }
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
