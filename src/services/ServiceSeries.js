import axios from 'axios';
export default class ServiceSeries {


    getSeries() {
        return new Promise(function (resolve) {

            var url = "https://apiseriespersonajes.azurewebsites.net/api/Series"
            var series = []
            axios.get(url).then(response => {
                series = response.data;
                resolve(series);
            })

        })
    }
    getSeriesId(id) {
        return new Promise(function (resolve) {

            var url = "https://apiseriespersonajes.azurewebsites.net/api/Series/" + id
            var serie = []
            axios.get(url).then(response => {
                serie = response.data;
                resolve(serie);
            })

        })
    }
    getPersonajesSeries(id) {
        return new Promise(function (resolve) {

            var url = "https://apiseriespersonajes.azurewebsites.net/api/Series/PersonajesSerie/" + id
            var perrsonajes = []
            axios.get(url).then(response => {
                perrsonajes = response.data;
                resolve(perrsonajes);
            })

        })
    }
    getAllPersonajes() {
        return new Promise(function (resolve) {

            var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes"
            var personajes = []
            axios.get(url).then(response => {
                personajes = response.data;
                resolve(personajes);
            })

        })
    }

    crearPersonaje(personaje) {
        return new Promise(function (resolve) {

            var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes"
            
            axios.post(url,personaje).then(response => {
                
                resolve(response);
            })

        })
    }

    modifPersonaje(idper,idserie) {
        return new Promise(function (resolve) {

            var url = "https://apiseriespersonajes.azurewebsites.net/api/Personajes/"+idper+"/"+idserie
            
            axios.put(url).then(response => {
                
                resolve(response);
            })

        })
    }

}
