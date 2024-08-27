/*
2. Sistema de Reservas de Hotel
Desarrolla un sistema para gestionar las reservas en un hotel. Cada habitación 
tiene un número, tipo (simple, doble, suite), y disponibilidad. Los clientes 
pueden hacer reservas, y el sistema debe verificar la disponibilidad antes 
de confirmar la reserva.
Requisitos:
    • Crear una clase Habitacion con propiedades como numero, tipo, y disponible.
    • Crear una clase Hotel que tenga un arreglo de habitaciones y métodos para
     hacer reservas y cancelar reservas.
    • Implementar un método que devuelva una lista de habitaciones disponibles.
*/

import Hotel from './Hotel';

let hotel = new Hotel();

hotel.listarHabitacionesDisponibles();
hotel.reservarHabitacion(4);
hotel.listarHabitacionesDisponibles();
hotel.cancelarReserva(3);
hotel.listarHabitacionesDisponibles();
