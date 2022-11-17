<template>
<div>
  <div class="card" v-if="Persona != undefined">
    <h5 class="card-header">{{Persona.nombre}}</h5>
    <div class="card-body">
      <div class="card-text">
        <p>E-mail : {{Persona.email}}</p>
        <p>Dirección : {{Persona.direccion}}</p>
        <p>Teléfono : {{Persona.telefono}}</p>
      </div>
    </div>
  </div>
  <div v-else class="alert alert-danger" role="alert">
    NO HAY DTOS DISPONIBLES
  </div>
  <router-link to="/Print" class="btn btn-primary mt-3">Volver</router-link>
</div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';

export default{
  setup(){
    const route = useRoute()
    const Persona = ref("")
    const index = route.params.index;

    axios.get('https://vuesalvatoaxios-default-rtdb.firebaseio.com/Persona/' +index+ '.json')
    .then(res=>{
      console.log(res)
      Persona.value = res.data
    })
    .catch(error=> console.log(error))
    return {Persona}
  }
}

</script>

<style>

</style>