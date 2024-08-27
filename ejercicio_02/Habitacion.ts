import Tipo from './Tipo';

class Habitacion {
  private numero: number;
  private tipo: Tipo;
  private disponibilidad: boolean;

  constructor(numero: number, tipo: Tipo, disponibilidad: boolean) {
    this.numero = numero;
    this.tipo = tipo;
    this.disponibilidad = disponibilidad;
  }

  set Numero(num: number) {
    this.numero = num;
  }
  get Numero() {
    return this.numero;
  }
  set Tipo(tip: Tipo) {
    this.tipo = tip;
  }
  get Tipo() {
    return this.tipo;
  }
  set Disponibilidad(disp: boolean) {
    this.disponibilidad = disp;
  }
  get Disponibilidad() {
    return this.disponibilidad;
  }
}

export default Habitacion;
