//Ejercicio 4
//Programa que pide un número y muestra su tabla de multiplicar
// del 1 al 10

let num = Number(prompt("Ingrese un número"));

for(let i = 1; i <= 10; i++){
    console.log(`Multiplicado por ${i}: `,num*i);
}
num = 0;