function palindrome(x) {
    console.log("Número original:", x);
    
    // Devuelve el valor absoluto de x
    let absResult = Math.abs(x);
    console.log("Math.abs:", absResult);

    // Redondea hacia arriba al número entero más cercano
    let ceilResult = Math.ceil(x);
    console.log("Math.ceil:", ceilResult);

    // Redondea hacia abajo al número entero más cercano
    let floorResult = Math.floor(x);
    console.log("Math.floor:", floorResult);

    // Redondea al entero más cercano
    let roundResult = Math.round(x);
    console.log("Math.round:", roundResult);

    // Devuelve el número más grande de los argumentos
    let maxResult = Math.max(x, 10, 20, 30);
    console.log("Math.max:", maxResult);

    // Devuelve el número más pequeño de los argumentos
    let minResult = Math.min(x, 10, 20, 30);
    console.log("Math.min:", minResult);

    // Devuelve un número pseudo-aleatorio entre 0 (inclusive) y 1 (exclusivo)
    let randomResult = Math.random();
    console.log("Math.random:", randomResult);
/*
    // Devuelve true si todos los resultados son iguales, de lo contrario, devuelve false
    return absResult === ceilResult === floorResult === roundResult === maxResult === minResult === randomResult;*/
}

// Ejemplo de uso
console.log(palindrome(6.1)); // Prueba con un número decimal

