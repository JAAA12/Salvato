<template>
<div>
  <h3>A&Ntilde;adir Clientes</h3>
  <div class="card" style="width: 35rem">
    <div class="card-body">
      <h5 class="card-tittle">Datos Clientes</h5>

      <div class="form-group">
        <label for="formGroupExampleInput">Nombre</label>
        <input
        v-model="nombre" 
        type="text"
        class="form-control"
        placeholder=":)"
        />
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">E-mail</label>
        <input 
        v-model="email" 
        type="text"
        class="form-control"
        placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label for="FormGruoupExampleInput3">Dirección</label>
        <input v-model="direccion" 
        type="text"
        class="form-control"
        placeholder="direccion"
        />
      </div>
      <div class="form-group">
        <label for="formFroupExampleInput4">Teléfono</label>
        <input v-model="telefono"
        type="text"  
        class="form-control"
        placeholder="teléfono" 
        />
      </div>
      <button class="btn btn-primary" @click="addPersona">
        A&ntilde;adir
      </button>
    </div>
  </div>
</div>
</template>

<script>
/* eslint-disable */
import { ref } from 'vue';
import {useStore} from 'vuex'
import { useRoute } from 'vue-router';
import axios from 'axios';

export default{
  setup(){
    const store = useStore()
    const router = useRoute()
    const nombre = ref("")
    const email = ref("")
    const direccion = ref("")
    const telefono = ref("")

    function addPersona(){
      if(nombre.value != '' && email.value != '' && direccion.value != '' && telefono.value != ''){
        const Persona = {
          nombre: nombre.value,
          email: email.value,
          direccion: direccion.value,
          telefono: telefono.value    
        }
        axios.post('https://vuesalvatoaxios-default-rtdb.firebaseio.com/Persona.json',Persona)
        .then(res => console.log(res))
        .catch(error => console.log(error))
      }
    }
    return{nombre,email,direccion,telefono,addPersona}
  }
}
</script>

<style>
</style>