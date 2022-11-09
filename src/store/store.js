import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        nombreempresa: 'SALVATO',
        correo: 'salvato123@gmail.com',
        representante: 'Sebastián Blanco',
        telefono: '3125489630',
        direccion: 'cra35 calle 35-35 Bucaramanga',
        numero:1000,
        nombre:"Laura Ayala"
    }
})
