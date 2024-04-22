//Actividad: Conteo de caracteres
function lengthOf(text) {
    if (typeof text === 'string') {
        if (text.length > 0) {
            return text.length;
        } else {
            return "Invalid input";
        }
    } else {
        throw new Error("Input must be a string");
    }
}

// Ejemplos de uso
console.log(lengthOf("hello")); // Salida: 5
console.log(lengthOf("")); // Salida: "Invalid input"
console.log(lengthOf(123)); // Error: Input must be a string
