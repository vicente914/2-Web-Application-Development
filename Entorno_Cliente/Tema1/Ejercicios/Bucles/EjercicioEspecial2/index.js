//Este programa hace una tabla con document.write. al igual 
//que uno de nuestros programas anteriores, solo cambiaremos que usaremos el bucle while
// en vez del bucle for


let numCol = prompt("Introduce el nº de columnas deseado:");
let anchura = prompt("Introduce la anchura en pixeles de las celdas:");
let altura = prompt("Introduce la altura en pixeles de las celdas:");

document.write(`<table border="0" cellspacing ="2" bgcolor="black" width="200">`);
let i = 0;
while(i < numCol){
    if(i % 2 == 0){
        document.write(`<td width=${anchura} height=${altura} bgcolor="white">&nbsp</td>`);
    }
    else{
        document.write(`<td width=${anchura} height=${altura}>&nbsp</td>`);
    }
    i++;
    
}
document.write(`</table>`);