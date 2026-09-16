//Ejercicio 4
//Crea un bucle con dos variables, una let y otra var y explica la diferencia

{
    var x = 10;
    let y = 20;
}
console.log(x);
console.log(y);

//La principal diferencia entre las variables var y let, es su diferencia en su "scope"
//o tambien llamado alcanze, cuando declaras una variable con let, su alcance es local,
//por ende si creamos un bloque, el alcance de la variable y solo estara dentro de ese bloque
//ese problema las variables var no lo tiene.