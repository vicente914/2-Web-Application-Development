const carrito = [
  { nombre: "Teclado", precio: 30, aplicarDescuento: false },
  { nombre: "Ratón", precio: 15, aplicarDescuento: true },
  { nombre: "Monitor", precio: 200, aplicarDescuento: true },
  { nombre: "Alfombrilla", precio: 10, aplicarDescuento: false }
];

function calcularTotalCarrito(lista) {
  let total = 0;
  
  for (let i = 0; i < lista.length; i++) {
    let producto = lista[i];
    let precioFinal = producto.precio;

    if (producto.aplicarDescuento) {
      precioFinal = precioFinal - (precioFinal * 0.10); // 10% de descuento
    }

    total = total + precioFinal;
  }

  return total;
}

console.log("Total del carrito:", calcularTotalCarrito(carrito));
// Revisa si el tipo de dato o las operaciones son las correctas.