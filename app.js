const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const resultado = document.getElementById("resultado")
let numeroSelecionado = 0
let primerValor = 0
let segundoValor = 0
let segundoNumeroSelecionado = 0
let valorANumero
let valorASegundoNumero
let esDecimal = false
let terminaPrimerValor = false
let operacionValor
let resultadoDeLaSuma = 0
let resultadoDeLaResta = 0
let resultadoDeLaDivision = 0
let resultadoDeLaMultiplicacion = 0
let operacion = ""
function agregarNumero(boton) {
    if (terminaPrimerValor) {
        segundoElemento = parseInt(boton)
        segundoNumeroSelecionado = "".concat(segundoNumeroSelecionado, segundoElemento)
        valorASegundoNumero = parseInt(segundoNumeroSelecionado)
        segundoValor = valorASegundoNumero + 0
        console.log(segundoValor)
    } else {
        primerElemento = parseInt(boton)
        numeroSelecionado = "".concat(numeroSelecionado, primerElemento)
        valorANumero = parseInt(numeroSelecionado)
        primerValor = valorANumero + 0
        console.log(primerValor)
    }
}

function suma() {
    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaSuma = primerValor + segundoValor
        console.log(resultadoDeLaSuma)
    } else {
        console.log("aprende a sumar, rey")
    }
}

function resta() {
    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaResta = primerValor - segundoValor
        console.log(resultadoDeLaResta)
    } else {
        console.log("aprende a restar, rey")
    }
}

function division() {
    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaDivision = primerValor / segundoValor
        console.log(resultadoDeLaDivision)
    } else {
        resultadoDeLaDivision = 0
        console.log("no se puede dividir por cero, rey, compráte unas clases de platzi")
    }
}

function multiplicacion() {

    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaMultiplicacion = primerValor + segundoValor
        console.log(resultadoDeLaMultiplicacion)
    } else {
        resultadoDeLaMultiplicacion = 1
        console.log(resultadoDeLaMultiplicacion)
    }
}

function decimal() {
    if (terminaPrimerValor) {
        segundoValor = segundoValor + "."
        console.log(segundoValor)
    } else {
        primerValor = primerValor + "."
        console.log(primerValor)
    }
}
function volverACero() {
    numeroSelecionado = 0
    primerValor = 0
    segundoValor = 0
    segundoNumeroSelecionado = 0
    valorANumero
    valorASegundoNumero
    esDecimal = false
    terminaPrimerValor = false
    operacionValor
    resultadoDeLaSuma = 0
    resultadoDeLaResta = 0
    resultadoDeLaDivision = 0
    resultadoDeLaMultiplicacion = 0
    operacion = ""
}

function computar(boton) {
    terminaPrimerValor = true
    console.log(boton)
    if (segundoValor > 0 && boton == "=") {
        if (operacion == "+") {
            suma()
        } else if (operacion == "-") {
            resta()
        } else if (operacion == "*") {
            multiplicacion()
        } else if (operacion == "/") {
            division()
        }
    } else if (boton == ".") {
        if (esDecimal) {
            console.log("ya era decimal")
        } else {
            decimal()
            esDecimal = true
        }
    } else if (boton == "AC") {
        volverACero()
    }
    else {
        operacion = boton
        console.log(operacion)

    }
}


botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => computar(boton.innerHTML))
    console.log(boton.innerHTML)

});

