import Estado from './Estado';

class Libro {
  private titulo: string;
  private autor: string;
  private isbn: string;
  private estado: Estado;

  constructor(titulo: string, autor: string, isbn: string, estado: Estado) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
    this.estado = estado;
  }

  set Titutlo(ti: string) {
    this.titulo = ti;
  }

  get Titulo(): string {
    return this.titulo;
  }

  set Autor(au: string) {
    this.autor = au;
  }

  get Autor(): string {
    return this.autor;
  }

  set Isbn(is: string) {
    this.isbn = is;
  }

  get Isbn(): string {
    return this.isbn;
  }

  set Estado(es: Estado) {
    this.estado = es;
  }

  get Estado(): Estado {
    return this.estado;
  }
}

export default Libro;
