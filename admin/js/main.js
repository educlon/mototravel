const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)




/**/
    if(username.value=='admin' && password.value=='123456') {
        alert("Bienvenido!");
        window.location.href = "http://127.0.0.1:5500/admin/templates/vehiculos.html";
        //window.location.href = "https://vintage-wheels.netlify.app/admin/templates/vehiculos.html";
    } else {
        alert("Error: Datos incorrectos...");
        console.error(err);
        window.location.href = "http://127.0.0.1:5500/admin/index.html";
        //window.location.href = "https://vintage-wheels.netlify.app/admin/index.html";
    }


})

