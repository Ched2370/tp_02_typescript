class Producto {
  private nombre: string;
  private codigo: number;
  private precio: number;
  private cantidad: number;

  constructor(
    nombre: string,
    codigo: number,
    precio: number,
    cantidad: number
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  set Nombre(nombre: string) {
    this.nombre = nombre;
  }
  get Nombre() {
    return this.nombre;
  }

  set Codigo(codigo: number) {
    this.codigo = codigo;
  }
  get Codigo() {
    return this.codigo;
  }

  set Precio(precio: number) {
    this.precio = precio;
  }
  get Precio() {
    return this.precio;
  }

  get Cantidad(): number {
    return this.cantidad;
  }

  set Cantidad(cant: number) {
    this.cantidad = cant;
  }
}

export default Producto;
