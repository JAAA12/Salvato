import inicio from './pages/InicioSalvato'
import productos from './pages/ProductosSalvato'
import nosotros from './pages/NosotrosSalvato'
import contactanos from './pages/ContactanosSalvato'


export const routes = [
    {path:'/inicio', component:inicio},/* lo que se ve en la barra de navegación */
    {path:'/productos', component:productos}, /* components para que se comporte como un componente */
    {path:'/nosotros', component:nosotros},
    {path:'/contactanos', component:contactanos},
]