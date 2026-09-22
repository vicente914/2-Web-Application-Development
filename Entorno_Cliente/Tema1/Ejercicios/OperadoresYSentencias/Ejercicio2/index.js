//Ejercicio 2
//Programa que pide un número y dice si es par o impar
Document.title = "Par o impar";
let numero = Number(prompt(`Ingrese un número`));

if(numero % 2 === 0){
    console.log("El número es par");
}
else{
    console.log("El número es impar");
}