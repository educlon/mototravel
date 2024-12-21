function guardar() {
    let marca_ingresado = document.getElementById("marca").value
    let modelo_ingresado = document.getElementById("modelo").value
    let anio_ingresado = document.getElementById("anio").value
    let detalle_ingresado = document.getElementById("detalle").value
    let imagen_ingresado = document.getElementById("imagen").value
    let precio_ingresado = document.getElementById("precio").value
    let rent = document.getElementById("renta").value
    let renta_ingresado = rent == 'on' ? 1 : 0 ;

    console.log(marca_ingresado);
    console.log(modelo_ingresado);
    console.log(anio_ingresado);
    console.log(detalle_ingresado);
    console.log(imagen_ingresado);
    console.log(precio_ingresado);
    console.log(renta_ingresado);

    let enviar_data = {
        marca: marca_ingresado,
        modelo: modelo_ingresado,
        anio: anio_ingresado,
        detalle: detalle_ingresado,
        imagen: imagen_ingresado,
        precio: precio_ingresado,
        renta: renta_ingresado,
    }
    console.log(enviar_data);
    
    // let url = "http://localhost:5500/registro"
    let url = "https://vintagewheels.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(enviar_data),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "./vehiculos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}