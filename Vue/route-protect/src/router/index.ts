import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/LoginVIew.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requireAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      requireAuth: true,
      role: 'admin', //Se pueden poner mas casos como si su rol es admin o usuario, etc para hacer las verificaciones de las rutas
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requireAuth: false,
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = 'recupera el token de pinia/vuex o donde este y verifica si esta o si es null'
  const auth2 = false; //Para hacer la prueba
  const needAuth = to.meta.requireAuth

  if(needAuth && !auth2) {
    next('login')
  } else {
    next()
  }
})

export default router
