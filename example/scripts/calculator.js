class Calculadora {
    suma(a,b){
        return a +b;      
    }
    resta(a,b){
        return a-b;
    }
    multiplicacion(a,b){
        return a*b;
    }
    division(a,b){
      if (b !== 0) {
        return a / b;
    } else {
        return "Error: No se puede dividir por cero.";
    }
    }    
    potencia(a,b){
        return Math.pow(a, b);
    }
    raiz_cuadrada(a){
        return Math.sqrt(a);
    }
    raiz_cubica(a){
        return Math.cbrt(a);
    }
}
function inicioCalculadora(){
    const calculadora = new Calculadora();
    const operation = prompt('elige la operación: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia)').toLowerCase();
    if (operation === 'sumar') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.suma(num1, num2);
        alert(`El resultado es: ${result}`);
        
    }
    else if (operation === 'restar') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.resta(num1, num2);
        alert(`El resultado es: ${result}`);
        
    }
    else if (operation === 'multiplicar') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.multiplicacion(num1, num2);
        alert(`El resultado es: ${result}`);
        
    }
    else if (operation === 'dividir') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.division(num1, num2);
        alert(`El resultado es: ${result}`);
        
    }
    else if (operation === 'raiz cuadrada') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.raiz_cuadrada(num1);
        alert(`El resultado es: ${result}`);
        
    }
    else if (operation === 'raiz cubica') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.raiz_cubica(num1);
        alert(`El resultado es: ${result}`);
        
    }
    else if (operation === 'potencia') {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const result = calculadora.potencia(num1, num2);
        alert(`El resultado es: ${result}`);
        
    }
    else {
        alert('Operación inválida. Por favor, elige una operación válida.');
    }
}
inicioCalculadora();
  
/*// esto es con ChatGPT
class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return a / b;
    }
  
    squareRoot(a) {
      return Math.sqrt(a);
    }
  
    cubeRoot(a) {
      return Math.cbrt(a);
    }
  
    power(a, b) {
      return Math.pow(a, b);
    }
  }
  
  function startCalculator() {
    const calculator = new Calculator();
    const operations = ['sumar', 'restar', 'multiplicar', 'dividir', 'raiz cuadrada', 'raiz cubica', 'potencia'];

    let operation;
    while (!operations.includes(operation)) {
      operation = prompt('Elige la operación: (sumar, restar, multiplicar, dividir, raiz cuadrada, raiz cubica, potencia)').toLowerCase();
    }

    let num1, num2;
    if (operation !== 'raiz cuadrada' && operation !== 'raiz cubica') {
      num1 = parseFloat(prompt('Ingresa el primer número:'));
      num2 = parseFloat(prompt('Ingresa el segundo número:'));
    } else {
      num1 = parseFloat(prompt('Ingresa el número:'));
    }

    let result;
    try {
      switch(operation) {
        case 'sumar':
          result = calculator.add(num1, num2);
          break;
        case 'restar':
          result = calculator.subtract(num1, num2);
          break;
        case 'multiplicar':
          result = calculator.multiply(num1, num2);
          break;
        case 'dividir':
          result = calculator.divide(num1, num2);
          break;
        case 'raiz cuadrada':
          result = calculator.squareRoot(num1);
          break;
        case 'raiz cubica':
          result = calculator.cubeRoot(num1);
          break;
        case 'potencia':
          const exponent = parseFloat(prompt('Ingresa el exponente:'));
          result = calculator.power(num1, exponent);
          break;
      }
      alert(`El resultado es: ${result}`);
    } catch(error) {
      alert(`Error: ${error.message}`);
    }
  }
  
  startCalculator();*/

