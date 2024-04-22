function stringIncludes(substring, string) {
    if (typeof substring === 'string' && typeof string === 'string') {
        return string.includes(substring);
    } else {
        throw new Error("Both inputs must be strings");
    }
}

// Ejemplos de uso
console.log(stringIncludes("world", "hello world")); // Salida: true
console.log(stringIncludes("Hello", "hello world")); // Salida: false
console.log(stringIncludes("JavaScript", "I love JavaScript")); // Salida: true
