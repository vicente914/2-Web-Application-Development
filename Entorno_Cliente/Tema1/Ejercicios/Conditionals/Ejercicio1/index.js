//Ejercicio 1
//Programa que te pide un numero y te dice si es negativo o positivo

let miNumero = document.getElementById("miNumero");
miNumero.value = 5;

if(miNumero.value > 0){
    console.log("El número es positivo");
}
else{
    console.log("El numero es negativo");
}
