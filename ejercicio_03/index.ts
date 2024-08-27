import Estudiante from './Estudiante';

/* 
!3. Sistema de Gestión de Estudiantes
Crea un sistema para gestionar la información de estudiantes en una universidad. 
Cada estudiante tiene un nombre, matrícula, carrera, y una lista de notas. 
El sistema debe calcular el promedio de notas y determinar si el estudiante 
está aprobado (promedio mayor o igual a 60).
Requisitos:
    ?• Crear una clase Estudiante con propiedades como nombre, matricula, carrera, y un arreglo de notas.
    ?• Implementar un método que calcule el promedio de notas del estudiante.
    ?• Implementar un método que determine si el estudiante está aprobado o no en función del promedio.
*/
let estudiante = new Estudiante(
  'Carlos',
  'M123',
  'Ingenieria de sitemas',
  [8, 7, 6, 7, 10]
);

console.log(`promedio: ${estudiante.promedioNotas()}`);
console.log(`aprobado: ${estudiante.aprobado()}`);
