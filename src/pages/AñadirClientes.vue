<template>
    <div>
      <h3>A&ntilde;adir clientes</h3>
  
      <div class="card" style="width: 35rem">
        <div class="card-body">
          <h5 class="card-title">Datos clientes</h5>
  
          <div class="form-group">
            <label for="formGroupExampleInput">Nombre</label>
            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Armando Agudelo"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">E-mail</label>
            <input
              v-model="email"
              type="text"
              class="form-control"
              placeholder="aagudelo@elemail.com"
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Teléfono</label>
            <input
              v-model="Teléfono"
              type="text"
              class="form-control"
              placeholder="xxxxxx "
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Dirección</label>
            <input
              v-model="Dirección"
              type="text"
              class="form-control"
              placeholder="xxxxx"
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
  import {ref} from 'vue'
  import {useStore} from 'vuex'
  import {useRouter} from 'vue-router'
  import axios from 'axios'
  export default {
    setup(){
      const store = useStore()
      const router = useRouter()
      const nombre = ref("")
      const email = ref("")
      const Teléfono = ref("")
      const Dirección = ref("")
      
      function addPersona(){
        if(nombre.value != '' && email.value != ""){
          const persona = {
            nombre:nombre.value,
            email:email.value,
            Teléfono:Teléfono.value,
            Dirección:Dirección.value
          }
          /* store.dispatch("addPersona", persona);
          router.push('/print') */
          axios.post('https://vuesalvatoaxios-default-rtdb.firebaseio.com/persona.json',persona)
          .then(res => console.log(res))
          .catch(error => console.log (error))
  
        }
      }
  
      return{nombre, email, Teléfono, Dirección, addPersona}
    }
    // data() {
    //   return {
    //     nombre: "",
    //     email: "",
    //     aporte: "",
    //   };
    // },
    // methods: {
    //   addPersona() {
    //     if (this.nombre != "" && this.email != "") {
    //       const persona = {
    //         nombre: this.nombre,
    //         email: this.email,
    //         aporte: this.aporte,
    //       };
    //       this.$store.dispatch("addPersona", persona);
    //       this.$router.push('/print')
    //     }
    //   },
    // },
  };
  </script>