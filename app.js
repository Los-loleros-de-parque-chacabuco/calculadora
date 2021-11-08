const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const resultado = document.getElementById("resultado")
let numeroSelecionado = ""
let primerElemento

function agregarNumero(boton) {
    botonString = boton.toString()
    numeroSelecionado = botonString + numeroSelecionado
    console.log("numero seleccionado" + numeroSelecionado)
    pasarStringANumero(numeroSelecionado)
}

function pasarStringANumero(string){
numeroSelecionado= parseInt(string)
console.log(numeroSelecionado)
}
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => computar(boton.value))
});






