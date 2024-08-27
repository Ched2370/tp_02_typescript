/*
!4. Sistema de Inventario de Tienda
Desarrolla un sistema para gestionar el inventario de una tienda. 
Cada producto tiene un nombre, código, precio, y cantidad en stock. 
La tienda debe poder añadir productos al inventario, vender productos, 
y verificar el stock disponible.
Requisitos:
    *• Crear una clase Producto con propiedades como nombre, codigo, precio, y cantidad.
    *• Crear una clase Inventario que tenga un arreglo de productos y métodos para añadir productos, vender productos, y verificar stock.
    *• Implementar un método que muestre la lista de productos con cantidades menores a un umbral dado (para reordenar).
*/
import inventario from './Inventario';
import producto from './Producto.';
let prod = new producto('azuca', 3, 10.5, 10);
let invet = new inventario();

invet.verificarStock();
console.log('------------------');
invet.añadirProducto(prod);
console.log('------------------');
invet.verificarStock();
console.log('------------------');
invet.venderProductos(1);
invet.venderProductos(1);
invet.venderProductos(2);
invet.venderProductos(2);
invet.venderProductos(2);
invet.venderProductos(2);
invet.venderProductos(3);
console.log('------------------');
invet.verificarStock();
