<template>
<v-app>
  <div class='about'>
    <h1 class="h1-nos">Nosotros</h1>

    <h2 class="h-nos">¿POR QUÉ NACE SALVATO?</h2>
    <div class='nosotros'>
    <img src='../assets/nosotros2.jpg' alt='no carga' class="img-nosotros">
     <p class="parrafos">Salvato nace al percibir la carencia de los productos saludables, naturales y de buena calidad en nuestra ciudad. Con las ganas de hacer 
     un producto único con un delicioso sabor, entregando un balance entre tu Bienestar y la exigencia de tu paladar.</p>
     </div>

     <h2 class="h-nos">¿Qué está detrás de SALVATO?</h2>

     <div class='nosotros'>
     <img src='../assets/dueño.jpg' alt='no carga' class="img-nosotros">
     <p class="parrafos">Detrás de este proyecto está un "Chino" orgullosamente santandereano, deportista, aficionado, soñador, amante de la alimentación saludable y la nutrición, 
     que se desvive por entregar a sus clientes comida 100% real, artesanal y saludable.</p>
     
     </div>

     <h2 class="h-nos">Nuestros Productos </h2>
     <img src='../assets/nosotros.jpg' alt='no carga' class="img-nosotros">
    <div class='nosotros'> 
    <p class="parrafos">Están elaborados a base de harina de avena, arroz, eliminamos harinas y azúcar refinado, también edulcorantes artificiales,
     pues en Salvato endulzamos con estevia pura y panela de nuestra tierra. Las frutas, verduras y semillas utilizadas son siempre 
     seleccionadas con detalle, garantizando a nuestros clientes productos 100% frescos y naturales. El chocolate que utilizamos
     en nuestras preparaciones, contiene 70% de concentración , la opción ideal si quieres cuidar y a la vez disfrutar.</p>
     
    </div>

    <h1>{{nombreempresa}}</h1> 
    <p>{{correo}}</p>
    <p>{{representante}}</p>
    <p>{{telefono}}</p>
    <p>{{direccion}}</p>


  </div>
  </v-app>
</template>



<script>
export default {
  data(){
    return{
      nombreempresa:this.$store.state.nombreempresa,
        correo:this.$store.state.correo,
        representante:this.$store.state.representante,
        telefono:this.$store.state.telefono,
        direccion:this.$store.state.direccion,
    }
  },
}
</script>



<style>
body{
    margin: 0;
}
.about{
  font-family:georgia;
}
.nosotros{
    align-content: center;
    text-align: justify;
}
.h1-nos{
  text-align: center;
  font-size: 40px;
  margin-top: 50px;
}
.h-nos{
  margin: 50px 0 0 440px;
  font-size: 30px;
}
.img-nosotros{
     width:400px;
    height:400px;
    margin: 20px 0 20px 460px;
}
.inicio{
    margin: 0;
    height: 1000px;
    width: 1283px;
}
.parrafos{
  align-content: center;
  margin: 10px 480px  20px 460px;
}
h1{
  font-family: 'Times New Roman', Times, serif;
  color: rgb(133, 7, 7);
}
p{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: black;
  
}

</style>