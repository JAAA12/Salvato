<template>
<v-app>
  <v-app-bar app class="menuprincipal" color="#8f0c07">
    
    <v-toolbar-title class="titulo">SALVATO</v-toolbar-title>
    <v-spacer></v-spacer> <!-- Para espaciar/ ponerlo al otro exptremo -->
    <div class="botones">
    <v-btn :to="'/inicio'" class="white--text" color="#8f0c07">
    Inicio
    </v-btn>
    <v-btn :to="'/productos'" class="white--text" color="#8f0c07">
    Productos
    </v-btn>
    <v-btn :to="'/nosotros'" class="white--text" color="#8f0c07">
    Nosotros
    </v-btn>
    <v-btn :to="'/contactanos'" class="white--text" color="#8f0c07">
    Ubicación
    </v-btn>
    <v-btn :to="'/login'" class="white--text" color="#8f0c07">
    login
    </v-btn>

  </div>
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
.botones{
  font-family:georgia;
}
.titulo{
  font-size: 50px;
  color:white;
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



.imglogo{
width: 66.6px;
height: 66.6px;
margin: 20px;
}

a{
    text-decoration: none;
    color: black;
}
</style>