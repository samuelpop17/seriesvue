<template>
  <div>
    <h1>Nuevo Personaje</h1>
    <form
      v-on:submit.prevent="insertarPersonaje()"
      style="width: 500px; margin: 0 auto"
    >
      <input
        type="hidden"
        class="form-control"
        v-model="personaje.idPersonaje"
      />
      <label class="form-label">Nombre</label>
      <input type="text" class="form-control" v-model="personaje.nombre" />
      <label class="form-label">Imagen</label>
      <input type="text" class="form-control" v-model="personaje.imagen" />
      <label class="form-label">Serie</label>
      <select class="form-control" v-model="personaje.idSerie">
        <option v-for="serie in series" :value="serie.idSerie" :key="serie">
          {{ serie.nombre }}
        </option>
      </select>
      <button class="btn btn-success">Crear Personaje</button>
    </form>
  </div>
</template>
<script>
import ServiceSeries from "./../services/ServiceSeries";
var servicio = new ServiceSeries();
export default {
  name: "CrarPersonaje",
  data() {
    return {
      personaje: {
        idPersonaje: 0,
        nombre: "",
        imagen: "",
        idSerie: 0,
      },
      series: [],
    };
  },
  mounted() {

    servicio.getSeries().then((result)=>{
      this.series=result
    })


  },
  methods: {
    insertarPersonaje() {

      servicio.crearPersonaje(this.personaje).then((result)=>{
        console.log(result)
        this.$router.push("/personajes/"+this.personaje.idSerie);
      })
    },
  },
};
</script>

<style>
</style>