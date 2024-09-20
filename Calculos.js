function calcular() {
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('n1').value);
    const num2 = parseFloat(document.getElementById('n2').value);
    const operacion = document.getElementById('operacion').value;

    // Realizar la operación
    let resultado;
    switch (operacion) {
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