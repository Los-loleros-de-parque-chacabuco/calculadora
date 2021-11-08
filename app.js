const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const resultado = document.getElementById("resultado")
let numeroSelecionado = 0
let numeroNuevo = 0
let valorANumero

function agregarNumero(boton) {
    primerElemento = parseInt(boton)
    numeroSelecionado = "".concat(numeroSelecionado, primerElemento)
    valorANumero = parseInt(numeroSelecionado)
    numeroNuevo = valorANumero + 0
    console.log(numeroNuevo)
}

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => computar(boton.value))
});

