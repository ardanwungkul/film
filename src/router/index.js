import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/folder/:id',
      name: 'folder.show',
      component: () => import('@/views/Folder/Show.vue'),
    },
    {
      path: '/folder/:folderId/:videoId',
      name: 'video.show',
      component: () => import('@/views/Video/Show.vue'),
    },
  ],
})

export default router
