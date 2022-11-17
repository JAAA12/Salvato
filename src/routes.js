import inicio from './pages/InicioSalvato'
import productos from './pages/ProductosSalvato'
import nosotros from './pages/NosotrosSalvato'
import contactanos from './pages/ContactanosSalvato'
import login from './pages/LoginRegistro'
import RegistroClientes from './pages/AñadirClientes'
import PrintData from './pages/PrintData.vue'
import Details from './pages/DetallesClientes.vue'



export const routes = [
    {path:'/inicio', component:inicio},/* lo que se ve en la barra de navegación */
    {path:'/productos', component:productos}, /* components para que se comporte como un componente */
    {path:'/nosotros', component:nosotros},
    {path:'/contactanos', component:contactanos},
    {path:'/login', component:login},
    {path:'/Añadir',component:RegistroClientes},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details}
]