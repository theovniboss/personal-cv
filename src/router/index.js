import { createWebHashHistory, createRouter } from 'vue-router'

import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Index},
  { path: '/contact', component: Contact, name:"contact"}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})