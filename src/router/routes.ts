import Incident from '@/views/Incident/index.vue'
import Login from '@/views/Login/index.vue'
import Profile from '@/views/Profile/index.vue'
import Register from '@/views/Register/index.vue'
import { LOGIN, NEW_INCIDENT, PROFILE, REGISTER } from './router-paths'
import { RouteConfig } from 'vue-router'

const hasOngObj = JSON.parse(localStorage.getItem('be-the-hero-app') || '{}')['ong'] || {}
const hasOngData = hasOngObj['id']
const isAuthenticated = hasOngObj && hasOngData

export default [
    {
        ...LOGIN,
        component: Login
    },
    {
        ...REGISTER,
        component: Register,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated) next({ path: '/' })
            next()
        }
    },
    {
        ...PROFILE,
        component: Profile,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated) next({ path: '/' })
            next()
        }
    },
    {
        ...NEW_INCIDENT,
        component: Incident,
        beforeEnter: (to, from, next) => {
            if (!isAuthenticated) next({ path: '/' })
            next()
        }
    }
] as RouteConfig[]