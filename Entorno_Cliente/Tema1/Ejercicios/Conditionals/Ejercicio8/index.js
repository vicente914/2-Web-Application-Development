//Ejercicio 8
//Escribimos una variable que guarde un color en una variable(amarillo, verde, rojo)
//y segun el color mostramos(alto, pase con preacucion...) simulando un semaforo

let semaforo = "rojo";

switch(semaforo){
    case "rojo":
        console.log("Alto");
        break;
    case "amarillo":
        console.log("Pase con preación");
        break;
    case "verde":
        console.log("Avanza");
        break;
    default:
        console.log("Ese color no existe");

}