//🌎 VARIABLES Y DOM 🌎

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
let action = "decimal"

// 🌎AGREGA EL PRIMER VALOR A OPERAR Y EL SEGUNDO VALOR A OPERAR🌎

function agregarNumero(boton) {
    if (terminaPrimerValor) {
        segundoElemento = parseInt(boton)
        segundoNumeroSelecionado = "".concat(segundoNumeroSelecionado, segundoElemento)
        valorASegundoNumero = parseInt(segundoNumeroSelecionado)
        segundoValor = valorASegundoNumero + 0
        console.log(segundoValor)
        resultado.textContent = `${segundoValor}`

    } else {
        primerElemento = parseInt(boton)
        numeroSelecionado = "".concat(numeroSelecionado, primerElemento)
        valorANumero = parseInt(numeroSelecionado)
        primerValor = valorANumero + 0
        console.log(primerValor)
        resultado.textContent = `${primerValor}`

    }
}

// 🌎 OPERACIONES 🌎

function suma() {
    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaSuma = primerValor + segundoValor
        console.log(resultadoDeLaSuma)
        resultado.textContent = `${resultadoDeLaSuma}`

    } else {
        resultadoDeLaSuma = primerValor + 0
        resultado.textContent = `${resultadoDeLaSuma}`

    }

}


function resta() {
    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaResta = primerValor - segundoValor
        console.log(resultadoDeLaResta)
        resultado.textContent = `${resultadoDeLaResta}`
    } else {
        resultadoDeLaResta = primerValor - 0
        resultado.textContent = `${resultadoDeLaResta}`
    }
}

function division() {
    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaDivision = primerValor / segundoValor
        console.log(resultadoDeLaDivision)
        resultado.textContent = `${resultadoDeLaDivision}`
    } else {
        resultadoDeLaDivision = 0
        resultado.textContent = `${resultadoDeLaDivision}`
    }
}

function multiplicacion() {

    if (terminaPrimerValor && segundoValor >= 1) {
        resultadoDeLaMultiplicacion = primerValor * segundoValor
        resultado.textContent = `${resultadoDeLaMultiplicacion}`
    } else {
        resultadoDeLaMultiplicacion = 1
        resultado.textContent = `${resultadoDeLaMultiplicacion}`

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
    resultado.textContent = `${0}`
}

// 🌎CUANDO SE SELECCIONA UNA OPERACIÓN🌎

function computar(boton) {
    terminaPrimerValor = true
    console.log('Este valor es del boton: ', boton)
    if (segundoValor > 0 && boton == "=") {
        if (operacion == "+") {
            suma()
        } else if (operacion == "-") {
            resta()
        } else if (operacion == "x") {
            multiplicacion()
        } else if (operacion == "%") {
            division()
        }
    } else if (boton == ".") {
        // if (action === "decimal") {
        //     if (!primerValor.includes(".")) {
        //       display.textContent = primerValor + ".";
        //     } else if (
        //       previousKeyType === "operator" ||
        //       previousKeyType === "calculate"
        //     ) {
        //       display.textContent = "0.";
        //     }
      
        //     calculator.dataset.previousKeyType = "decimal";
        //   }
      
        const resultadoActual = resultado.innerHTML;

        if (esDecimal) {

            if ( !resultadoActual.includes('.') ) {
                const resultadoNuevo = resultadoActual + '.';
                resultado.innerHTML = resultadoNuevo;
            }

        } else {
            decimal()
            const resultadoNuevo = resultadoActual + '.';
            resultado.innerHTML = resultadoNuevo;
            esDecimal = true
        }


    } else if (boton == "AC") {
        volverACero()
    }
    else {
        operacion = boton
        console.log(operacion)
    }

    console.log('---------------------')

}

// 🌎CLICKS🌎

botonesNumeros.forEach( boton => {
    boton.addEventListener('click', () => agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach( boton => {
    boton.addEventListener('click', () => computar(boton.innerHTML) )
    console.log(boton.innerHTML)

});

