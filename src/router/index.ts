import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Root',
    component: () => import( '../layouts/MainLayout.vue' ),
    children: [
      {
        path: '/',
        name: 'SettingsPage',
        component: () => import( '../views/SettingsPage/SettingsPage.vue' ),
      },      
      {
        path: '/order',
        name: 'OrderPage',
        component: () => import( '../views/OrderPage/OrderPage.vue' ),
      },
    ],
  },
]

const router = createRouter( {
  history: createWebHistory(),
  routes,
} )

export default router
