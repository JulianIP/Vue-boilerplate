import Vue from "vue"
import App from "./App"
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

// Rutas
import routes from './routes/routes'

// Configuración de ruteo
const router = new VueRouter({
    routes,
    linkExactActiveClass: 'nav-item active'
})
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCarousel)

var vueInstance = new Vue({
    el:'#app',
    render: h => h(App),
    router,
    data: {
        routes: routes.slice(1,routes.length)
    }
})