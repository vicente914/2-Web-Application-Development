//Adivina el número
//Programa que consiste en:
//Existen jugador 1 y jugador 2, jugado 1 introduce un número y jugador 2 debe adivinar
//dicho número, también, el programa dará pistas al jugador dos sobre si el número que busca es mas 
// o menos grande
//Este programa es identico a otro programa que hicimos anteriormente, la diferencia 
//consiste en que aquí usaremos un bucle do while en vez de while

const num_adivinar = prompt("Jugador 1, introduce un número: ");
var num;

do{
    num = parseInt(prompt("Jugador 2, adivina el número"));
    if(num > num_adivinar){
        alert("El número que buscas es menor");
    }
    else if(num < num_adivinar){
        alert("El número que buscas es mayor");
    }
}while(num != num_adivinar)