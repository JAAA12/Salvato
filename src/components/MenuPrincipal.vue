<template>
<v-app>
  <v-app-bar app class="red darken-2 nav">
    
    <v-toolbar-title class="titulo">SALVATO</v-toolbar-title>
    <v-spacer></v-spacer> <!-- Para espaciar/ ponerlo al otro exptremo -->
    
    <v-btn :to="'/inicio'" class="uno" color="#EF5350">
    Inicio
    </v-btn>
    <v-btn :to="'/productos'" class="uno" color="#EF5350">
    Productos
    </v-btn>
    <v-btn :to="'/nosotros'" class="uno" color="#EF5350">
    Nosotros
    </v-btn>
    <v-btn :to="'/contactanos'" class="uno" color="#EF5350">
    Contáctanos
    </v-btn>
  </v-app-bar>
  <!-- <v-content> -->
<router-view/>
<!-- </v-content> -->
<!--  -->
</v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
  }),
  }
</script>

<style>
.titulo{
  font-size: 50px;
  
  font-family:georgia;
}
.uno{
  font-family:georgia;
}
.inicio{
    margin: 0;
    height: 1000px;
    width: 1283px;
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

a{
    text-decoration: none;
    color: black;
}
</style>