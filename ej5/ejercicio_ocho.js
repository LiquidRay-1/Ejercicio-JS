// Funciones para realizar las operaciones aritméticas
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "División por cero no permitida";
    }
    return a / b;
}

// Agregamos un manejador de eventos al botón
document.getElementById('calcularButton').addEventListener('click', function () {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElement.textContent = 'Los campos "Número 1" y "Número 2" deben contener números válidos.';
    } else {
        let resultado;
        switch (operacion) {
            case "suma":
                resultado = suma(numero1, numero2);
                break;
            case "resta":
                resultado = resta(numero1, numero2);
                break;
            case "multiplicacion":
                resultado = multiplicacion(numero1, numero2);
                break;
            case "division":
                resultado = division(numero1, numero2);
                break;
            default:
                resultado = "Operación no válida";
        }
        resultadoElement.textContent = 'Resultado: ' + resultado;
    }
});
