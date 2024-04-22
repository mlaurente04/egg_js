//Actividad:  Formato de título
function titleFormat(text) {
    if (typeof text === 'string') {
        const firstLetter = text.charAt(0).toUpperCase();
        const restOfTitle = text.slice(1).toLowerCase();
        const formattedTitle = firstLetter + restOfTitle;
        return formattedTitle;
    } else {
        throw new Error("Input must be a string");
    }
}

// Ejemplo de uso
console.log(titleFormat("hello world")); // Salida: "Hello world"
console.log(titleFormat("HELLO world")); // Salida: "Hello world"
console.log(titleFormat("HellO WOrLd")); // Salida: "Hello world"

