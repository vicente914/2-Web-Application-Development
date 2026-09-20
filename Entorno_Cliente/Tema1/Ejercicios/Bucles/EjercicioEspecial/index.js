//Ejercicio especial
document.title = "Ejercicios con bucles 2"
//Escribiremos un programa que muestre "cabecera h" varias veces seguidas 
// con distintos tipos de titulo(h1, h2, h3, .....)
/*
document.body.style.background = "yellow";
for(let i = 1; i <= 6; i++){
    document.write(`<h${i}>Cabecera h${i}</h${i}>`)
}
*/
//Programa que pide num de columnas, anchura y altura en px
//para pintar un tabla según los datos introducidos

let numCol = prompt("Introduce el nº de columnas deseado:");
let anchura = prompt("Introduce la anchura en pixeles de las celdas:");
let altura = prompt("Introduce la altura en pixeles de las celdas:");

document.write(`<table border="0" cellspacing ="2" bgcolor="black" width="200">`);
for(let i = 0; i < numCol; i++){
    if(i % 2 == 0){
        document.write(`<td width=${anchura} height=${altura} bgcolor="white">&nbsp</td>`);
    }
    else{
        document.write(`<td width=${anchura} height=${altura}>&nbsp</td>`);
    }
    
}
document.write(`</table>`);
