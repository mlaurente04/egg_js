//Actividad: Cantidad de caracteres
/*const cadena = "Hola como ESTAS?";

//charat
console.log("CHARAT: "+ cadena.charAt(1));  
console.log("CHARAT: "+ cadena.charAt(2));  
console.log("CHARAT: "+ cadena.charAt(2));  
console.log("CHARAT: "+ cadena.charAt(cadena.length -1));

//slice
console.log("SLICE: "+ cadena.slice(0, 4));
console.log("SLICE: "+ cadena.slice(6, 10));
console.log("SLICE: "+ cadena.slice(8, cadena.length));

//split
console.log("SPLIT: "+ cadena.split("o"));
console.log("SPLIT: "+ cadena.split(" ")); //separa por palabras
console.log("SPLIT: "+ cadena.split("")); // separa por caracteres
console.log(typeof cadena.split("o"));

//reverse
console.log("REVERSE: "+ cadena.split (" ").reverse());
console.log("REVERSE: "+ cadena.split ("").reverse());*/

function palindrome(cadena) {
    // Rebane la cadena (método split)
    let spliteada = cadena.split("");
    console.log("Spliteada:", spliteada);
    // Invierta la lista "spliteada" (método reverse)
    let invertida = spliteada.reverse();
    console.log("Invertida:", invertida);
    // Una la lista (método join)
    let unida = invertida.join("");
    console.log("Unida:", unida);
    // Devuelve true si la cadena de entrada es igual a la cadena de salida, de lo contrario, devuelve false
    console.log("Cadena de entrada:", cadena);
    return cadena === unida;
}

// Ejemplo de uso

console.log(palindrome("hello"));// Debe devolver false
console.log(palindrome("hannah"));// Debe devolver true
