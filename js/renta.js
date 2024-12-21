const { createApp } = Vue

  createApp({
    data() {
      return {
        // url:"http://127.0.0.1:5500/vehiculos",
        url:"https://vintagewheels.pythonanywhere.com/vehiculos",
        vehiculos:[],
        error:false,
        cargando:true
      }
    },
    // Se llama después de que la instancia haya 
    // terminado de procesar todas las opciones relacionadas con el estado.
    created() {
        this.fetchData(this.url)  // Invocando al método
    },
    methods: {
        fetchData(url) {
            // Acá se consume la Api  /productos
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.vehiculos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                });
        }
    },

  }).mount('#app')