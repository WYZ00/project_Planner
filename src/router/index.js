import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProjectView from '../views/AddProjectView.vue'
import EditProject from '../views/EditProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProject',
    name: 'AddProject',
    component: AddProjectView
  },
  {
    path: '/editProject/:id',
    name: 'EditProject',
    component: EditProject,
    props:true
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
