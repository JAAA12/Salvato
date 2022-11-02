<template>
<v-app> <!-- <v-app-bar app> -->
<div class='cuerpo'> 
<header class='encabezado'>
    <img class='imglogo' src="../assets/Logosalvato.png" alt="No carga">
    <v-spacer></v-spacer>
         <div class="carrito two columns">
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
        
    </header>
<div class='carrusel'>
    <div class="carrusel-img">

            <ul class="img-carrusel">
                <li><img src="../assets/background2.jpg" alt="No cargó"></li>
                <li><img src="../assets/diapo3.png" alt="No cargó"></li>
                <li><img src="../assets/diapo2.png" alt="No cargó"></li>
                <li><img src="../assets/diapo1.png" alt="No cargó"></li>
            </ul>


        </div>
   </div>
 <div id="lista-cursos" class="container">
        <h1 id="titulo1" class="titulo1">Nuestros Productos</h1>
        <H2>SALVATOS</H2>
        <div class="row">
                    <div class="four columns">
                            <div class="card" id="salvatos">
                                <img src="../assets/salvato_clasico.jpg" class="imagen-curso u-full-width">
                                <div class="info-card">
                                    <h4>Salvato Clásico</h4>
                                    <p>Pan de banano con nuez, almendra laminada y chocolate troceado.
                                    </p>
                                    <img src="../assets/estrellas.png">
                                    <p class="precio">Regular<span class="u-pull-right ">$17500</span></p>
                                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="2">Agregar Al Carrito</a>
                                </div>
                            </div>
                    </div>
            
                    <div class="four columns">
                            <div class="card">
                                <img src="../assets/salvato_chocomani.jpg" class="imagen-curso u-full-width">
                                <div class="info-card">
                                    <h4>Salvato Chocomaní</h4>
                                    <p>Pan de banano y chocolate con chocolate troceado y maní molido.</p>
                                    <img src="../assets/estrellas.png">
                                    <p class="precio">Regular <span class="u-pull-right ">$17000</span></p>
                                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="3">Agregar Al Carrito</a>
                                </div>
                            </div> <!--.card-->
                    </div>
               
                    <div class="four columns">
                        <div class="card">
                            <img src="../assets/salvato_frutos.jpg" class="imagen-curso u-full-width">
                            <div class="info-card">
                                <h4>Salvato Frutos Rojos</h4>
                                <p>Pan de frutos rojos con un centro de mermelada de moras.</p>
                                <img src="../assets/estrellas.png">
                                <p class="precio">Regular  <span class="u-pull-right ">$17000</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="4">Agregar Al Carrito</a>
                            </div>
                        </div> <!--.card-->
                    </div>
        </div>
                    <div class="row">
                        <div class="four columns">
                            <div class="card">
                                <img src="../assets/salvato_cocoarequipe.jpg" class="imagen-curso u-full-width">
                                <div class="info-card">
                                    <h4>Salvato Cocoarequipe</h4>
                                    <p>Coco deshidratado, con un centro de arequipe.</p>
                                    <img src="../assets/estrellas.png">
                                    <p class="precio">Regular  <span class="u-pull-right ">$17000</span></p>
                                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="5">Agregar Al Carrito</a>
                                </div>
                            </div> <!--.card-->
                        </div>
                        <div class="four columns">
                            <div class="card">
                                <img src="../assets/salvato_coffee.jpeg" class="imagen-curso u-full-width">
                                <div class="info-card">
                                    <h4>Salvato Coffee</h4>
                                    <p>Base de banano y nueces, cuebierto con arequipe y alfajol pulverizado.</p>
                                    <img src="../assets/estrellas.png">
                                    <p class="precio">Regular <span class="u-pull-right ">$22000</span></p>
                                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="6">Agregar Al Carrito</a>
                                </div>
                            </div> <!--.card-->
                        </div>
                        <div class="four columns">
                            <div class="card">
                                <img src="../assets/salvato_chocofresa.jpg" class="imagen-curso u-full-width">
                                <div class="info-card">
                                    <h4>Salvato Chocofresa</h4>
                                    <p>Mermelada de fresa artesanal con trozos de chocolate.</p>
                                    <img src="../assets/estrellas.png">
                                    <p class="precio">Regular  <span class="u-pull-right ">$18000</span></p>
                                    <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="7">Agregar Al Carrito</a>
                                </div>
                            </div> <!--.card-->
                        </div>
                    </div>
        <H2>PANES</H2> <!--.row-->
        <div class="row">
            
            <div class="four columns">
                <div class="card" id="panes">
                    <img src="../assets/pan_semillas.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Pan de Semillas</h4>
                        <p>Contiene semillas de linaza, chía, ajonjolí, girasol  y calabaza.</p>
                        <img src="../assets/estrellas.png">
                        <p class="precio">Regular <span class="u-pull-right ">$9000</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="8">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/mogolla_cua.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Mogollas de Cuajada</h4>
                            <p>Harina de avena, integral, chía y linaza, con cuajada criolla.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular  <span class="u-pull-right ">$10000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="9">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/mogolla_inte.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Mogolla Integral</h4>
                            <p>Semillas de chía, linaza, calabaza, ajonjolí, girasol y finas hiervas.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular <span class="u-pull-right ">$10000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="10">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
        </div> <!--.row-->
        <div class="row">
            
            <div class="four columns">
                <div class="card">
                    <img src="../assets/pan_italianisimo.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Pan Italianisimo</h4>
                        <p>Rollo italiano con finas hiervas, queso parmesano, mozarella.</p>
                        <img src="../assets/estrellas.png">
                        <p class="precio">Regular <span class="u-pull-right ">$11000</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="11">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/Hawaiano.jpeg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Pan Hawaiano</h4>
                            <p>Pan con semillas relleno de jamón de pavo, tocineta, piña y queso.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular  <span class="u-pull-right ">$14000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/babka_chocolate.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Babka de Chocolate</h4>
                            <p>Pan con harina integral, mezclado con chocolate 70% cacao.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular <span class="u-pull-right ">$13000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="13">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
        </div> <!--.row-->
        
        <div class="row">
                <div class="four columns">
                <div class="card">
                    <img src="../assets/babka_veleno.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Babka Veleño</h4>
                        <p>Babka de harina madre relleno con cuajada campesina y bocadillo.</p>
                        <img src="../assets/estrellas.png">
                        <p class="precio">Regular <span class="u-pull-right ">$11000</span></p>
                        <a  href="#" class="u-full-width button-primary button input agregar-carrito" data-id="14" >Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/babka_americano.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Babka Americano</h4>
                            <p>Babka de harina madre relleno de tocineta de cerdo y queso sabana.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular  <span class="u-pull-right ">$12000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="15">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/Otoño.jpeg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Pan de Otoño</h4>
                            <p>Pan con uvas pasas, arándanos, nuez, coco deshidratado y canela.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular <span class="u-pull-right ">$11000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="16">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
        </div> <!--.row-->
        <H2>Jarcakes</H2>
        <div class="row">
            <div class="four columns">
                <div class="card" id="jarcakes">
                    <img src="../assets/jarcake_amapola.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Jarcakes de Amapola</h4>
                        <p>Torta amapola, nueces, arándanos, frosting de yogurt griego y limón.</p>
                        <img src="../assets/estrellas.png">
                        <p class="precio">Vidrio  <span class="u-pull-right ">$12000</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="17">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/jarcake_brownie.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Jarcake de Brownie</h4>
                            <p>Elaborado con harina de frijol, cacao al 70%, con maní y arequipe.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Vidrio  <span class="u-pull-right ">$12000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="18">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
            <div class="four columns">
                    <div class="card">
                        <img src="../assets/jarcake_frutos.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Jarcake de Frutos Rojos</h4>
                            <p>Torta de vainilla, mermelada artesanal de mora y arequipe.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Vidrio <span class="u-pull-right ">$12000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="19">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
        </div> <!--.row-->
        
        <div class="row">
                <div class="four columns">
                    <div class="card">
                        <img src="../assets/jarcake_zanahoria.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Jarcake de Zanahoria</h4>
                            <p>Torta de zanahoria con naranja y nueces del Brasil.</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Vidrio <span class="u-pull-right ">$12000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="20">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
                </div>
                <div class="four columns">
                        <div class="card">
                            <img src="../assets/jarcake_red.jpg" class="imagen-curso u-full-width">
                            <div class="info-card">
                                <h4>Jarcake Red Velvet</h4>
                                <p>Torta de red velvet con frosting de yogurt griego.</p>
                                <img src="../assets/estrellas.png">
                                <p class="precio">Vidrio  <span class="u-pull-right ">$12000</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="21">Agregar Al Carrito</a>
                            </div>
                        </div> <!--.card-->
                </div>
                <div class="four columns">
                        <div class="card">
                            <img src="../assets/jarcake_red.jpg" class="imagen-curso u-full-width">
                            <div class="info-card">
                                <h4>Jarcake Tres Leches</h4>
                                <p>Torta tres leches con semillas y arequipe.
                                </p>
                                <img src="../assets/estrellas.png">
                                <p class="precio">Vidrio <span class="u-pull-right ">$12000</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="22">Agregar Al Carrito</a>
                            </div>
                        </div> <!--.card-->
                   </div>
                </div>
                
                <H2>TORTAS</H2>
                    <div class="row">
                       <div class="four columns">
                        <div class="card" id="tortas">
                            <img src="../assets/torta_sebastiana.jpg" class="imagen-curso u-full-width">
                            <div class="info-card">
                                <h4>Torta Sebastiana</h4>
                                <p>Para nuestras superheroínas</p>
                                <img src="../assets/estrellas.png">
                                <p class="precio">Regular  <span class="u-pull-right ">$17500</span></p>
                                <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="23">Agregar Al Carrito</a>
                            </div>
                        </div> <!--.card-->
                </div>
                <div class="four columns">
                    <div class="card">
                        <img src="../assets/torta_amapola.jpeg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Torta Amapola</h4>
                            <p>Para nuestras superheroínas</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular <span class="u-pull-right ">$24000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
            </div>
            <div class="four columns">
                <div class="card">
                    <img src="../assets/torta_chocolate.jpg" class="imagen-curso u-full-width">
                    <div class="info-card">
                        <h4>Torta de Chocolate</h4>
                        <p>Para nuestras superheroínas</p>
                        <img src="../assets/estrellas.png">
                        <p class="precio">Regular  <span class="u-pull-right ">$25000</span></p>
                        <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                    </div>
                </div> <!--.card-->
            </div> <!--.row-->
        </div>
        
    
                    <div class="row">
                        <div class="four columns">
                         <div class="card">
                             <img src="../assets/torta_zanahoria.jpeg" class="imagen-curso u-full-width">
                             <div class="info-card">
                                 <h4>Carrot Cake</h4>
                                 <p>Para nuestras superheroínas</p>
                                 <img src="../assets/estrellas.png">
                                 <p class="precio">Regular  <span class="u-pull-right ">$29000</span></p>
                                 <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="23">Agregar Al Carrito</a>
                             </div>
                         </div> <!--.card-->
                 </div>
                 <div class="four columns">
                     <div class="card">
                         <img src="../assets/torta_red.jpg" class="imagen-curso u-full-width">
                         <div class="info-card">
                             <h4>Torta Red Velvet</h4>
                             <p>Para nuestras superheroínas</p>
                             <img src="../assets/estrellas.png">
                             <p class="precio">Regular <span class="u-pull-right ">$29000</span></p>
                             <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                         </div>
                     </div> <!--.card-->
             </div>
             <div class="four columns">
                 <div class="card">
                     <img src="../assets/torta_vino.jpeg" class="imagen-curso u-full-width">
                     <div class="info-card">
                         <h4>Torta de Vino</h4>
                         <p>Para nuestras superheroínas</p>
                         <img src="../assets/estrellas.png">
                         <p class="precio">Regular  <span class="u-pull-right ">$29000</span></p>
                         <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="12">Agregar Al Carrito</a>
                     </div>
                 </div> <!--.card-->
             </div> <!--.row-->
            </div>

            <!-- <div class="slider"> -->

                <div class="row">
                   <div class="four columns">
                    <div class="card">
                        <img src="../assets/torta_chocofusion.jpg" class="imagen-curso u-full-width">
                        <div class="info-card">
                            <h4>Torta Chocofusión</h4>
                            <p>Para nuestras superheroínas</p>
                            <img src="../assets/estrellas.png">
                            <p class="precio">Regular  <span class="u-pull-right ">$29000</span></p>
                            <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="23">Agregar Al Carrito</a>
                        </div>
                    </div> <!--.card-->
                </div>
             </div>
  </div>
</div>
</v-app>

</template>



<script">
export default {
  name: 'ProductosSalvato',

}
</script>




<!-- arriba, derecha, abajo, izquierda -->
<style>
.cuerpo{
    margin: 0;
    height: 1000px;
    width: 1860px;
    font-family: georgia;
}
.encabezado{
    display: flex;
    width: 1343px;
    background: #D0312D;
    padding:0;
    
}
.imglogo{
width: 66.6px;
height: 66.6px;
margin-left: 80px;
}
/*Carrito*/
.offset-by-two.column,
  .offset-by-two.columns          { margin-left: 17.3333333333%; }
.submenu img{
    width: 40px;
    height: 40px;
}
.submenu{
    margin-left: 20px;
    position: relative;
    padding: 20px 40px 10px 60px;
}
  
.submenu #carro{
    display: none;
    margin:20px;
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

a{
    text-decoration: none;
    color: black;
}

h2{
   width: 1000px;
   height: 43.75px;
   margin: 0 175px;
   font-size: 2.5rem;
}
.titulo1{
  font-size: 3rem;
  margin: 30px 450px;
  width:1000px;
}
.container{
    width: 1343px;
}
.card img{
    width:300px;
    height:300px;
}

.info-card img{
    width: 82px;
    height:13px;
    font-family: 'Georgia';
}
.info-card{
    background: white;
    padding: 10px 20px 10px 20px;
    width: 300px;
    height: 260px;
    font-size: 16px;
}
.info-card h4{
    margin-bottom: 5px;
    font-size:20px;
}
.precio{
    margin: 10px 0 5px 0;
    font-size: 20px;
}
.precio span{
  margin-left: 105px;
 
  font-weight: bold;
}
.button{
    margin: 10px 0 10px 20px;
    padding: 0 30px 0 30px;
    display: inline-block;
  height: 38px;
     color: black;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #D0312D;
  cursor: pointer;
  box-sizing: border-box;
  background-color: #D0312D;
}
.card{
    margin: 20px;
    border: 1px solid black
}
.row{
   display: flex;
    margin: 20px 118px 20px 170px;
}
/*carrusel*/ 

 .carrusel{
    width: 1343px;
 }
.carrusel-img{
    overflow: hidden;
}

.carrusel ul{
    display: flex;
    width: 4000cm;
    animation: cambio 15s infinite;  
    padding: 0
}

.carrusel img{
    width: 1343px;
    height: 543px;   
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

@media (max-width: 1920px){
    .encabezado{
    width: 1920px;
},
.carrusel{
    width: 1920px;
 },
 .carrusel img{
    width: 1920px;
    height: 800px;   
},
.row{
   display: flex;
    margin: 20px 118px 20px 410px;
},
h2{
   width: 1000px;
   height: 43.75px;
   margin: 0 423px;
   font-size: 2.5rem;
}
}
</style>
<!-- git init
git add .
git commit -m "cualquier nombre"
git remote add origin link
git push -u origin master 
browser
git clone link-->