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
        },
        // el id se necesita para buscar en la DB y eliminarlo
        eliminar(id) {
            // const url = 'http://localhost:5500/borrar/' + id;
            const url = 'https://vintagewheels.pythonanywhere.com/borrar/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },
    



  }).mount('#app')