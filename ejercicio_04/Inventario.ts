import Producto from './Producto.';

class Inventario {
  private productos: Producto[] = [
    new Producto('arina', 1, 10.5, 10),
    new Producto('yerba', 2, 15.3, 20),
  ];

  añadirProducto(prod: Producto): void {
    this.productos.push(prod);
    console.log('Producto añarido correctamente.');
  }

  venderProductos(id: number): void {
    this.productos.forEach((producto) => {
      if (id == producto.Codigo) {
        producto.Cantidad--;
        console.log(`compra: ${producto.Nombre}, precio: ${producto.Precio}`);
      }
    });
  }

  verificarStock() {
    console.log('Stock: ');
    this.productos.forEach((producto) => {
      console.log(`${producto.Nombre}: ${producto.Cantidad}`);
    });
  }
}

export default Inventario;
