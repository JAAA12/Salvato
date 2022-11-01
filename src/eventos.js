const carrito = document.querySelector('#carrito')
const contenedorcarrito = document.querySelector('#lista-carrito tbody')
const totalcarrito = document.querySelectorAll('#lista-carrito thead')
const boton = document.querySelector('#vaciar-carrito')
const liproductos = document.querySelector('#lista-cursos')

/* Vector, solo con los corchetes se crea un vector */
let articulocarrito = []
let totalpedido = 0

const botonFlotante = document.querySelector('.btn-footer');
const footer = document.querySelector('.footer');

botonFlotante.addEventListener('click', mostrar);

function mostrar() {
    console.log('dio click');
    if (footer.classList.contains('activo')) {
        console.log('activo')
        footer.classList.remove('activo')
        botonFlotante.classList.remove('activo')
    } else {
        console.log('desactivo')
        footer.classList.add('activo')
        botonFlotante.classList.add('activo')
    }
}

cargarEvento()
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
}
/* sumar cuando sean iguales, diferente y cuando se quite uno */


