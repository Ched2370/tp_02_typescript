import Habitacion from './Habitacion';
import Tipo from './Tipo';
class Hotel {
  private habitaciones: Habitacion[] = [
    new Habitacion(1, Tipo.simple, true),
    new Habitacion(2, Tipo.simple, false),
    new Habitacion(3, Tipo.doble, false),
    new Habitacion(4, Tipo.doble, true),
    new Habitacion(5, Tipo.suite, true),
  ];

  constructor() {}

  public reservarHabitacion(num: number): void {
    for (const habitacion of this.habitaciones) {
      if (num == habitacion.Numero && habitacion.Disponibilidad) {
        console.log('-----------------');
        console.log(`reserva realizada. numero: ${habitacion.Numero}`);
        console.log('-----------------');
        habitacion.Disponibilidad = false;
      }
    }
  }

  public cancelarReserva(num: number): void {
    this.habitaciones.forEach((habitacion) => {
      if (num == habitacion.Numero && !habitacion.Disponibilidad) {
        console.log('-----------------');
        console.log(`cancelacion exitosa. numero: ${habitacion.Numero}`);
        console.log('-----------------');
        habitacion.Disponibilidad = true;
      }
    });
  }

  public listarHabitacionesDisponibles() {
    for (const habitacion of this.habitaciones) {
      if (habitacion.Disponibilidad) {
        console.log(`
numero: ${habitacion.Numero},
tipo: ${habitacion.Tipo}`);
      }
    }
  }
}

export default Hotel;
