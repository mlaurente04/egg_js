//Actividad: Función de cálculo de velocidad
/*function calcularVelocidad() {
    const distancia = 10
    const tiempo = 2
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    }    
    calcularVelocidad();
    calcularVelocidad();
    calcularVelocidad();*/
    
//Actividad: Función de velocidad dinámica
/*function calcularVelocidad(distancia, tiempo) {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    }
    calcularVelocidad(10,2);
    calcularVelocidad(100,2);
    calcularVelocidad(75,3);*/

//Actividad: Retorno de velocidad
const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    console.log("La velocidad del móvil es " + velocidad);
    return velocidad
    }
    const velocidad1 = calcularVelocidad(10,2);
    console.log("La velocidad de Juana es " + velocidad1);
    const velocidad2 = calcularVelocidad(20,2);
    console.log("La velocidad de X es " + velocidad2);
    const velocidad3 = calcularVelocidad(30,2);
    console.log("La velocidad de Y es " + velocidad3);
        

