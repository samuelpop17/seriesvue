import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home.vue';
import Serie from './components/Serie.vue'
import Personajes from './components/Personajes.vue'
import CrearPersonaje from './components/CrearPersonaje.vue'
import ModificarPersonaje from './components/ModificarPersonaje.vue'
const myRoutes = [
    {
        path: "/", component: Home
    },
    {
        path:"/serie/:id",component:Serie
    },
    {
        path:"/personajes/:id",component:Personajes
    },
    {
        path:"/modificar",component:ModificarPersonaje
    } , 
    {
        path:"/nuevo",component:CrearPersonaje
    }      
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})
export default router;