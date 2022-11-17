<template>
<div>
  <h3>Lista de Clientes</h3>
  <ul class="list-group">
    <li v-for="(Persona, i) in Personas" :key="i" class="list-group-item">
      <router-link :to="`/Details/${Persona.id}`">{{
        Persona.nombre
      }}</router-link>
    </li>
  </ul>
</div>
</template>
  
<script>
import axios from 'axios';
import { ref } from 'vue';
export default{
  setup(){
    const Personas = ref([])
    axios.get('https://vuesalvatoaxios-default-rtdb.firebaseio.com/Persona.json')
    .then(res =>{
      console.log(res)
      for (const id in res.data){
        Personas.value.push({
          id: id,
          nombre: res.data[id].nombre,
          email: res.data[id].email,
          direccion: res.data[id].direccion,
          telefono: res.data[id].telefono
        })
      }
    })
    .catch(error=> console.log(error))
    return {Personas};
  }
}

</script>