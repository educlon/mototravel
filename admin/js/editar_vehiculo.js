
// Procedimiento para traer los datos del registro a editar

let cadena = location.search; // Cadena con los símbolos & y =


let datos = new URLSearchParams(cadena);

// Crear un objeto para almacenar los nombres de las variables y sus valores
let resultado = {};

// Iterar sobre los parámetros y guardar los nombres y valores en el objeto resultado
for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}

// Imprimir el resultado
console.log(resultado); // Esto mostrará un objeto con las variables y sus valores


// Procedimiento para mostrar los datos a editar en el formulario de edición
document.getElementById("id").value = resultado["id"]
document.getElementById("marca").value = resultado["marca"]
document.getElementById("modelo").value = resultado["modelo"]
document.getElementById("anio").value = resultado["anio"]
document.getElementById("detalle").value = resultado["detalle"]
document.getElementById("imagen").value = resultado["imagen"]
document.getElementById("precio").value = resultado["precio"]

if(resultado["renta"]=='true') {
    document.getElementById("renta").checked = true ;
} else {
    document.getElementById("renta").checked = false ;
}


function modificar() {
    let id = document.getElementById("id").value
    let marcaForm = document.getElementById("marca").value
    let modeloForm = document.getElementById("modelo").value
    let anioForm = document.getElementById("anio").value
    let detalleForm = document.getElementById("detalle").value
    let imagenForm = document.getElementById("imagen").value
    let precioForm = document.getElementById("precio").value
    // let rentF = document.getElementById("renta").value
    // let rentaForm = rentF == 'on' ? 1 : 0 ;
    let rentaForm = 0;
    if(document.getElementById("renta").checked == true) {
        rentaForm = 1;
    } else {
        rentaForm = 0;
    }

    let vehiculo = {
        marca: marcaForm,
        modelo: modeloForm,
        anio: anioForm,
        detalle: detalleForm,
        imagen: imagenForm,
        precio: precioForm,
        renta: rentaForm,
    }
    // let url = "http://localhost:5000/update/"+id
    let url = "https://vintagewheels.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(vehiculo),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
       
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            window.location.href = "./vehiculos.html";  
          
        })
        .catch(err => {
           
            console.error(err);
            alert("Error al Modificar")
        })      
}