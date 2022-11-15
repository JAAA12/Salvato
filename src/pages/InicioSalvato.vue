<template>
<v-app>
  <div class='inicio'>
    <!-- <header class='encabezado'>
    <img class='imglogo' src="../assets/Logosalvato.png" alt="No carga">
    <v-spacer></v-spacer>
         <div class="carrito">
                <ul>
                    <li class="submenu">
                            <img src="../assets/carro.png" id="img-carrito">
                            <div id="carro">
                                    
                                    <table id="lista-carrito" class="carrito">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody id="botonEliminar"></tbody>
                                        <thead>

                                        </thead>
                                    </table>

                                    <a href="#" id="vaciar-carrito" class="button">Vaciar Carrito</a>
                            </div>
                    </li>
                </ul>
            </div>
        
    </header> -->

   <div class='carrusel'>
    <div class="carrusel-img">

            <ul class="img-carrusel">
                <li><img src="../assets/background2.jpg" alt="No cargó"></li>
                <li><img src="../assets/background3.png" alt="No cargó"></li>
                <li><img src="../assets/background4.png" alt="No cargó"></li>
                <li><img src="../assets/background5.png" alt="No cargó"></li>
            </ul>
        </div>
   </div>

  <div class="barra">
                    <div class="iconopan">
                        <p>Panes <br>
                        Deliciosos y frescos</p>
                    </div>
                    <div class="iconotorta">
                        <p>Tortas <br>Suaves y saludables</p>
                    </div>
                    <div class="iconopostre">
                        <p>Postres <br>
                        Únicos y llenos de sabor </p>
                    </div>
    </div>

 <div id="lista-pro" class="container">
        <h1 id="titulo2" class="titulo2">"Se requiere una alimentación saludable para tener una salud envidiable"</h1>
        <H2>Productos</H2>
        <div class="row1">
                    <div class="four columns">
                            <div class="carta" id="salvatos">
                                <img src="../assets/pan_italianisimo.jpg" class="imagen-curso u-full-width">
                                <div class="info-carta">
                                    <h4>Panes</h4>
                                    <p>Variedad de panes a base de harina de avena, harina integral, harina de chia y linaza.
                                    </p>        
                                </div>
                            </div>
                    </div>
            
                    <div class="four columns">
                            <div class="carta">
                                <img src="../assets/salvato_chocomani.jpg" class="imagen-curso u-full-width">
                                <div class="info-carta">
                                    <h4>Salvatos</h4>
                                    <p>Panes a base de harina de avena y arroz, de diferente y deliciosos sabores.</p>
                                
                                </div>
                            </div> <!--.card-->
                    </div>
               
                    <div class="four columns">
                        <div class="carta">
                            <img src="../assets/torta_red.jpg" class="imagen-curso u-full-width">
                            <div class="info-carta">
                                <h4>Tortas</h4>
                                <p>Tortas a base de harina de arroz y harina de avena, que te hará alucinar.</p>
                            </div>
                        </div> <!--.card-->
                    </div>
                    
        </div>
        </div>
         <div class="row1">
                    <div class="four columns">
                            <div class="carta" id="salvatos">
                                <img src="../assets/Cupcakes.jpeg" class="imagen-curso u-full-width">
                                <div class="info-carta">
                                    <h4>Cupcakes</h4>
                                    <p>Disfruta estos deliciosos muffins saludables de diferentes sabores.
                                    </p>        
                                </div>
                            </div>
                    </div>
            
                    <div class="four columns">
                            <div class="carta">
                                <img src="../assets/jarcake_brownie.jpg" class="imagen-curso u-full-width">
                                <div class="info-carta">
                                    <h4>Jarcakes</h4>
                                    <p>Torta del sabor que desees en un jar para esos pequeños antojos.</p>
                                
                                </div>
                            </div> <!--.card-->
                    </div>
               
                    <div class="four columns">
                        <div class="carta">
                            <img src="../assets/trocitos.jpg" class="imagen-curso u-full-width">
                            <div class="info-carta">
                                <h4>Otros</h4>
                                <p>También te ofrecemos trocitos de guayaba, alfajoles, brownies y harinas.</p>
                            </div>
                        </div> <!--.card-->
                    </div>
                    
        </div>

        <h2>Puntos de distribución</h2>
        <div class="div">
        <img src="../assets/holistica.png" alt="No cargó" class="dis">
        
        </div>

        <div class="vuex">
        <h1 class="info1">{{nombreempresa}}</h1>
        <p class="info2" >{{correo}}</p>
        <p class="info3">{{representante}}</p>
        <p class="info4">{{telefono}}</p>
        <p class="info5">{{direccion}}</p>
        </div>
        <footer>
        
        </footer>
  </div>
</v-app>

</template>

<!-- cargarEvento()
function cargarEvento(){
    liproductos.addEventListener('click', agregarProducto)
    carrito.addEventListener('click', eliminarproducto)
    boton.addEventListener('click', ()=>{
        articulocarrito=[]
        limpiarhtml()
        limpiarhtmltotal()
    })
    
}


function agregarProducto(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        /* e.target.parentElement */
        
        const productoseleccionado = e.target.parentElement.parentElement
        leerdatos(productoseleccionado)

        }
    }
function eliminarproducto(e){
    if(e.target.classList.contains('borrar-curso')){
        const productoId = e.target.getAttribute('data-id');

        articulocarrito = articulocarrito.filter(producto =>producto.id !== productoId );
        
        llenarcarritohtml();
    }
}


function leerdatos(productos){
    const infoproductos ={
        imagen: productos.querySelector('img').src,
        titulo: productos.querySelector('h4').textContent,
        precio: productos.querySelector('.precio span').textContent,
        cantidad: 1,
        total: parseInt(productos.querySelector('.precio span').textContent.substr(1,productos.querySelector('.precio span').textContent.length)),
        id: productos.querySelector('a').getAttribute('data-id')    
    }
    
    const existe = articulocarrito.some(producto => producto.id === infoproductos.id)


    if(existe){
        const cantidadtotal = articulocarrito.map( producto => {
            if(producto.id === infoproductos.id){
                /* console.log('precio', (producto.precio.length)) */
                producto.cantidad++
                producto.total = producto.cantidad * parseInt(producto.precio.substr(1,producto.precio.length))
                return producto
            }else  {
                
                return producto
                
            }
        })
        articulocarrito = [...cantidadtotal]

        
    }else {
        articulocarrito = [...articulocarrito,infoproductos]
    }

    console.log(infoproductos)
    /* Agrgamos el vector, el ... ayuda a acumular la información */
    
    console.log('vector',articulocarrito)

    llenarcarritohtml()


}
/* tr filas td columna */
/* con ${} un dato de javascript nos deja insertarlo en el html */
/* llamarla desde el principio para que borre */


function llenarcarritohtml(){
    limpiarhtml()
    limpiarhtmltotal()
    totalpedido = 0
    articulocarrito.forEach(producto =>{
        const fila = document.createElement('tr')
        fila.id = 'hi'
        fila.innerHTML = `
        <td><img src='${producto.imagen}' width='90'></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>$${producto.total}</td>
        <td><a href='#' class='borrar-curso' data-id='${producto.id}'>X</a></td>
        `
        totalpedido = totalpedido + producto.total
        const filatotal = document.createElement('tr')
        filatotal.id = 'hi'
        filatotal.innerHTML = `
        <td>Total: ${totalpedido}</td>
        `
        contenedorcarrito.appendChild(fila)
        limpiarhtmltotal()
        totalcarrito[1].appendChild(filatotal)
    })
   
}


function limpiarhtml(){
    contenedorcarrito.innerHTML= ''
}

function limpiarhtmltotal(){
    totalcarrito[1].innerHTML= ''
} -->

<script>
export default {
  name: 'InicioSalvato',
  data(){
    return {
    nombreempresa:this.$store.state.nombreempresa,
    correo:this.$store.state.correo,
    representante:this.$store.state.representante,
    telefono:this.$store.state.telefono,
    direccion:this.$store.state.direccion,
    }
    }
}

</script>

<!-- arriba, derecha, abajo, izquierda -->
<style>
.vuex {
    background-color:brown;
    text-align: center;
}
.info1, .info2, .info3,.info4,.info5{
    color:white;
    font-family:georgia;
}
.inicio{
    margin: 0;
    height: 1000px;
    width: 1283px;
    font-family: georgia;
}


.imglogo{
width: 66.6px;
height: 66.6px;
margin-left: 80px;
}

.menu{
    padding: 20px 40px 10px 200px;
    font-size: 20px;
}

.submenu img{
    width: 40px;
    height: 40px;
}

a{
    text-decoration: none;
    color: black;
}

ul{
    list-style: none;
    display: flex;
    padding: 0;
}
/*barra*/
.barra{
    background: #f18d22; /* Old browsers */
    background: -moz-linear-gradient(left, #f18d22 0%,#f18d22 50%, #ecab0f 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #f18d22 0%,#f18d22 50%,#ecab0f 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #f18d22 0%,#f18d22 100%,#ecab0f 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b57c00', endColorstr='#e44e52',GradientType=1 ); /* IE6-9 */
    display: flex;
    width:1343px;
}

.iconopan{
    background-image:url(../assets/pancito.png);
    background-repeat: no-repeat;
    background-size: 35px 35px;
    background-position: center;
    padding: 10px 70px 10px 250px;
    text-align: center;
}

.iconotorta{
    background-image:url(../assets/rebanada.png);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 48px 48px;
    margin: 10px 40px 10px 100px;
    padding-left: 50px;
    text-align: center;
}
.iconopostre{
    background-image:url(../assets/postre2.png);
    background-repeat: no-repeat;
    background-position: left;
    padding-left: 50px;
    background-size: 35px 35px;
    margin: 10px 50px 10px 150px;
    text-align: center;
}
 /*carrito*/
.titulo2{
    font-family: Baskerville Old Face;
    font-size: 3rem;
    text-align:center;
    align-content:center;
    margin: 100px 0 90px 0;
}
.submenu{
    margin-left: 20px;
    position: relative;
    padding: 20px 40px 10px 60px;
}
  
.submenu #carro{
    display: none;
}

.submenu:hover #carro{
    display:block;
    position: absolute;
    right:0;
    top:100%;
    z-index: 1;
    background-color: white;
    padding: 20px;
    min-height: 400px;
    min-width: 300px;
}

/*mostrador*/
.carta img{
    width:300px;
    height:300px;
}

.info-carta img{
    width: 82px;
    height:13px;
    font-family: 'Georgia';
}
.info-carta{
    background: white;
    padding: 10px 20px 0 20px;
    width: 300px;
    height: 200px;
    font-size: 16px;
}
.info-carta h4{
    margin-bottom: 5px;
    font-size:20px;
}

.carta{
    padding:  20px 20px 0 20px;
}
.row1{
    display: flex;
    margin: 10px 118px 0 145px;
}
/*Distribución*/
.dis{
    margin-left: 200px;
    height:300px;
    width:400px;
}

/*carrusel*/ 

/* .carrusel{
    width: 1343px;
 }
.carrusel-img{
    overflow: hidden;
}

.carrusel ul{
    display: flex;
    width: 4000cm;
    animation: cambio 8s infinite;  
    padding: 0
}

.carrusel img{
    width: 1200px;
    height: 550px;   
}


@keyframes cambio{
    0% {margin-left: 0;}
    20% {margin-left: 0;}

    25% {margin-left: -100%;}
    45% {margin-left: -100%;}

    50% {margin-left: -200%;}
    70% {margin-left: -200%;}

    75% {margin-left: -300%;}
    100% {margin-left: -300%;}
}
*/
</style>
<!--  -->