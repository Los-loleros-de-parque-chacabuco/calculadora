
const numeros = document.getElementsByClassName("numero")
const botonSuma = document.getElementById("+")
const botonResta = document.getElementById("-")
const botonMultiplicacion = document.getElementById("x")
const botonDivision = document.getElementById("%")
const resultado = document.getElementById("resultado")
let numeroClickeado

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        resultado.firstChild.nodeValue = "three";      


        // function añadirValor(boton) {
        //     console.log(boton.dataset.id)
        // // switch () {
        // //     case "1":
        // //         console.log("uno")
        // //         break;

        // //     default:
        // //         break;
        // // }
        // }
    }

})