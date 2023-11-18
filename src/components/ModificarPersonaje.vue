<template>
  <h1>Modificar Personaje</h1>
  <form
    style="width: 500px; margin: 0 auto"
    v-on:submit.prevent="updatePersonaje()"
  >
    <label class="form-label">Serie:</label>
    <select class="form-control" v-model="idSerie">
      <option v-for="serie in series" :value="serie.idSerie" :key="serie">
        {{ serie.nombre }}
      </option>
    </select>
    <label class="form-label">Personaje:</label>
    <select class="form-control" v-model="idPersonaje">
      <option
        v-for="personaje in personajes"
        :value="personaje.idPersonaje"
        :key="personaje"
      >
        {{ personaje.nombre }}
      </option>
    </select>
    <br />
    <button class="btn btn-success">Modificar Personaje</button>
  </form>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
var servicio = new ServiceSeries();
export default {
  name: "ModificarPersonaje",
  data() {
    return {
      personajes: [],
      series: [],
      idSerie:null,
      idPersonaje:null
    };
  },
  mounted() {
    servicio.getAllPersonajes().then((response) => {
      this.personajes = response;
    });
    servicio.getSeries().then((response) => {
      this.series = response;
    });
  },
  methods: {
    updatePersonaje() {
      
      servicio
        .modifPersonaje(this.idPersonaje,this.idSerie)
        .then((response) => {
          console.log(response);
          this.$router.push("/personajes/" + this.idSerie);
        });
    },
  },
};
</script>

<style>
</style>