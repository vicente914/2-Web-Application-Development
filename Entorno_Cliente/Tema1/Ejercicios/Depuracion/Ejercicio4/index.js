function procesarRegistro(nombre, edadNum, esEstudiante) {
  // Conversión y validación de edad
  let edad = edadNum;
  let mensajeAcceso;
  if (edad >= 18) {
    mensajeAcceso = "Acceso concedido a mayores de edad";
    
    console.log(mensajeAcceso);

    // Verificación de descuento por estudiante
    if (esEstudiante == true) {
        console.log("Se ha aplicado el descuento de estudiante.");
    }

    // Recorrido de verificación de historial
    const historialIntentos = [1, 2, 3];
    for (let i = 0; i < historialIntentos.length; i++) {
        console.log("Verificando intento número: " + historialIntentos[i]);
    }
}
   else {
    mensajeAcceso = "Acceso restringido a menores";
    console.log(mensajeAcceso);
  }

}
// Caso de prueba
procesarRegistro("Ana", 17, true);