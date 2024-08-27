import Estado from './Estado';
import Libro from './Libro';

class Biblioteca {
  libros: Libro[] = [
    new Libro(
      'Cien años de soledad',
      'Gabriel García Márquez',
      '978-0307474728',
      Estado.Disponible
    ),
    new Libro('1984', 'George Orwell', '978-0451524935', Estado.Prestado),
    new Libro(
      'Don Quijote de la Mancha',
      'Miguel de Cervantes',
      '978-0060934347',
      Estado.Disponible
    ),
    new Libro(
      'Matar a un ruiseñor',
      'Harper Lee',
      '978-0061120084',
      Estado.Disponible
    ),
    new Libro('La Odisea', 'Homero', '978-0140268867', Estado.Prestado),
    new Libro(
      'Crimen y castigo',
      'Fiódor Dostoyevski',
      '978-0140449136',
      Estado.Disponible
    ),
    new Libro(
      'El gran Gatsby',
      'F. Scott Fitzgerald',
      '978-0743273565',
      Estado.Prestado
    ),
    new Libro(
      'Orgullo y prejuicio',
      'Jane Austen',
      '978-0141439518',
      Estado.Disponible
    ),
    new Libro(
      'La Divina Comedia',
      'Dante Alighieri',
      '978-0140448955',
      Estado.Prestado
    ),
    new Libro(
      'El retrato de Dorian Gray',
      'Oscar Wilde',
      '978-0141439570',
      Estado.Disponible
    ),
  ];

  public buscarLibro(ref: string): void {
    const libroEncontrado = this.libros.find(
      (libro) => libro.Autor === ref || libro.Titulo === ref
    );

    libroEncontrado
      ? console.log(libroEncontrado.Titulo)
      : console.log('no encontrado');
  }

  public prestarLibro(titulo: string) {
    this.libros.forEach((libro) => {
      if (libro.Titulo == titulo && libro.Estado == Estado.Disponible) {
        libro.Estado = Estado.Prestado;
        console.log('prestamo exitoso');
      } else if (libro.Titulo == titulo && libro.Estado == Estado.Prestado) {
        console.log('ya se lo llevaron');
      }
    });
  }

  public devolverLibro(titulo: string) {
    this.libros.forEach((libro) => {
      if (libro.Titulo == titulo && libro.Estado == Estado.Prestado) {
        libro.Estado = Estado.Disponible;
        console.log('devolucion exitoso');
      } else if (libro.Titulo == titulo && libro.Estado == Estado.Disponible) {
        console.log('ya lo devolviste');
      }
    });
  }
}

export default Biblioteca;
