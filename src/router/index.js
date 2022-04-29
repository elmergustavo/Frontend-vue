import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import AboutView from '../views/AboutView.vue'
import PasosView from '../views/PasosView.vue'
import CursosView from '../views/CursosView.vue'
import StudentForm from '../views/StudentForm.vue'
import PantallaPrincipal from '../views/PantallaPrincipal.vue'
import StudentView from '../views/StudentView.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/pasos',
    name: 'pasos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PasosView,
    meta: {rutaProtegida: true}
  },
  {
    path: '/cursos',
    name: 'cursos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: CursosView,
    meta: {rutaProtegida: true}
  },
  {
    path: '/studentForm',
    name: 'studentForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StudentForm,
    meta: {rutaProtegida: true}
  },

  {
    path: '/pantallaPrincipal',
    name: 'pantallaPrincipal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PantallaPrincipal,
    meta: {rutaProtegida: true}
  },

  {
    path: '/verEstudiante',
    name: 'verEstudiante',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StudentView,
    meta: {rutaProtegida: true}
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const rutaEsProtegida = to.matched.some(item => item.meta.rutaProtegida)
  
  if(rutaEsProtegida && store.state.token === null){
    next('/')
  } else  {
    next()
  }
  
  })


export default router
