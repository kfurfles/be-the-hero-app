import Incident from '@/views/Incident/index.vue'
import Login from '@/views/Login/index.vue'
import Profile from '@/views/Profile/index.vue'
import Register from '@/views/Register/index.vue'
import { LOGIN, NEW_INCIDENT, PROFILE, REGISTER } from './router-paths'
import { RouteConfig } from 'vue-router'

export default [
    {
        ...LOGIN,
        component: Login
    },
    {
        ...REGISTER,
        component: Register
    },
    {
        ...PROFILE,
        component: Profile
    },
    {
        ...NEW_INCIDENT,
        component: Incident
    }
] as RouteConfig[]