//Tablero de ajedrez 8x8


let ancho = prompt(`Introduce el ancho de las celdas en px: `);

document.write(`<table border="0" bgcolor="black">`);
for(let i = 0; i < 8; i++){
    document.write(`<tr height = "${ancho}">`);
    for(let j = 0; j < 8; j++){
        if((i+j) % 2 == 0){
            document.write(`<td bgcolor = "white" width = "${ancho}"></td>`);
        }
        else{
            document.write(`<td bgcolor = "black" width = "${ancho}"></td>`);
        }
        
    }
    document.write(`</tr>`);
}
document.write(`</table>`);