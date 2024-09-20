function calcular() {
    // Obtener los valores de los inputs
    var num1 = parseFloat(document.getElementById('n1').value);
    var operador = document.getElementById('operador').value;
    var num2 = parseFloat(document.getElementById('n2').value);

    // Realizar la operación
    let resultado;
    //Segun la opcion seleccionado del menu desplegable, hace su operacion asignada
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operación inválida";
    }

    // Mostrar el resultado
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}