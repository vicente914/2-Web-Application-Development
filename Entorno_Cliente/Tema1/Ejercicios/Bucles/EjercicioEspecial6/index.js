//Crear tabla con js
//Programa que crea una tabla html mediante javascript
// pide al usuario el nº de columnas y filas y el alto y ancho de
// sus celdas

let numCol = prompt('Nº de columnas para tu tabla');
let numFil = prompt('Nº de filas para tu tabla');
let alto = prompt('Introduce el alto en px para las celdas');
let ancho = prompt('Introduce el ancho en px para las celdas');


document.write(`<table border="0" cellspacing="2" bgcolor="black" width="200">`);
for(let i = 0; i < numFil; i++ ){
    document.write(`<tr bgcolor = "white" height = ${alto}>`);
    for(let j = 0; j < numCol; j++){
        document.write(`<td width = ${ancho}>&nbsp;</td>`);
    }
    document.write(`</tr>`);
}
document.write(`</table>`);