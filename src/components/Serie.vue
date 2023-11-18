<template>
  <div>
    <div class="card" style="width: 48rem">
      <img class="card-img-top" :src="serie.imagen" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ serie.nombre }}</h5>
        <p class="card-text">IMDB: {{ serie.puntuacion }}</p>
        <p class="card-text">Año: {{ serie.anyo }}</p>
        <router-link class="btn btn-success" :to="'/personajes/' + serie.idSerie">Personajes</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceSeries from "./../services/ServiceSeries";
const serviceSeries = new ServiceSeries();
export default {
  name: "SeriE",
  data() {
    return {
      serie: [],
    };
  },
  mounted() {
    var id = this.$route.params.id;
    serviceSeries.getSeriesId(id).then((result) => {
      this.serie = result;
    });
    console.log(this.serie);
  },
  watch: {
    "$route.params.id": "fetchData",
  },
  methods:{
    fetchData(){
      var id = this.$route.params.id;
    serviceSeries.getSeriesId(id).then((result) => {
      this.serie = result;
    });
    }
  }
};
</script>

<style>
</style>