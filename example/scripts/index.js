document.addEventListener("DOMContentLoaded", function() {
    //seleccionar una etiqueta del HTML 
/*const selector = document.getElementById("mensaje");

 //escribir dentro de esa etiqueta con JS
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS";*/

//Actividad: Entrada y Salida de datos
/*prompt("Preguntar algo");
console.log("Imprimir algo");*/

//Actividad: Guardando datos en una variable
/*const entrada = prompt("¿Qué producto desea comprar?");
console.log(entrada);
alert(entrada);*/

//Actividad: Dando la bienvenida                        
/*var nombre = "MARCELO";
const mensaje = "Bienvenido " + nombre;
alert(mensaje);*/

//Actividad: Sumando números 
/*const numero1 = Number(prompt("Ingrese primer número"));
const numero2 = Number(prompt("Ingrese segundo número"));
const suma =numero1 +numero2;
const mensajeSuma = "El resultado de la suma es "+ suma;
alert(mensajeSuma);*/

//Actividad: Realizando más operaciones
/*const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;
alert(resultadoMenosDiez);*/

//Actividad: Determinando la longitud de una palabra/frase
/*const frase = prompt("Ingrese una palabra o frase");
console.log(frase)
const cantidad = frase.length;
var mensajeCantidad = "el texto: " + frase+ " tiene: " + cantidad + " caracteres";
alert(mensajeCantidad)*/

//Actividad: Cambio de minúsculas/mayúsculas
const frase = prompt("Ingrese una palabra o frase");
console.log(frase)
const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = fraseMinusculas + " " + fraseMayusculas
alert(minMay)
/**/
});


