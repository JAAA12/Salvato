<template>
  <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="1300"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="n in 1"
        :key="n"
       
      >
        <v-card

          height="600"
          width="350"
          
        >
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
                    </div> 
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>