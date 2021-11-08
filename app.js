
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const resultado = document.getElementById("resultado")

function agregarNumero(boton){
    console.log(boton)
}

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => agregarNumero(boton.innerHTML));
});

// botonesOperadores.forEach(boton => {
//     boton.addEventListener('click', () => computar(boton.value))
// });






