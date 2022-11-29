import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/deadlines',
    name: 'deadlines',
    component: () => import('../views/DeadLinesView.vue')
  },
  {
    path: '/deadline/:id',
    name: 'deadline',
    component: () => import('../views/DeadLineDetail.vue')
  },
  {
    path: '/todos',
    name: 'todos',
    component: () => import('../views/TodosView.vue')
  },
  {
    path: '/todo/:id',
    name: 'todoSingle',
    component: () => import('../views/TodoDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
