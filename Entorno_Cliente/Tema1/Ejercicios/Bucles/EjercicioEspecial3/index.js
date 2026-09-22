//Adivina el número
//Programa que consiste en:
//Existen jugador 1 y jugador 2, jugado 1 introduce un número y jugador 2 debe adivinar
//dicho número, también, el programa dará pistas al jugador dos sobre si el número que busca es mas 
// o menos grande

const num_adivinar = prompt("Jugador 1, introduce un número: ");
var num = parseInt(prompt("Jugador 2, adivina el número: "));

while(num != num_adivinar){
    if(num > num_adivinar){
        alert("El número que buscar es menor");
    }
    else if(num < num_adivinar){
        alert("El número que buscas es mayor");
    }
    num = parseInt(prompt("Adivina el número"));
}