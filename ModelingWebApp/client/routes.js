import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Register from './Register.vue'
import Uml from './Uml.vue'
import Paper from './components/Paper.vue'
import Class from './components/Class.vue'

const routes = [
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/uml",
    name: "uml",
    component: Uml
  },
  {
    path: "/classe",
    name: "class",
    component: Class
  },
  {
    path: "/paper",
    name: "paper",
    component: Paper
  }
]

const router = new VueRouter({
  routes
})

export default router