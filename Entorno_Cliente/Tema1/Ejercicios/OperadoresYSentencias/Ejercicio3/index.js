//Ejercicio 3
//Programa que pide al usuario 3 números distintos y determina cual es el mayor
// de los 3

let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));

if(a > b && a > c){
    console.log(`${a} es el número más grande`);
}
else if(b > a && b > c){
    console.log(`${b} es el número más grande`);
}
else{
    console.log(`${c} es el número más grande`);
}