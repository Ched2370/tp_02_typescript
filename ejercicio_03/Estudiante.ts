class Estudiante {
  private nombre: string;
  private matricula: string;
  private carrera: string;
  private notas: number[];

  constructor(
    nombre: string,
    matricula: string,
    carrera: string,
    notas: number[]
  ) {
    this.nombre = nombre;
    this.matricula = matricula;
    this.carrera = carrera;
    this.notas = notas;
  }

  set Nombre(nomb: string) {
    this.nombre = nomb;
  }
  get Nombre() {
    return this.nombre;
  }
  set Matricula(mat: string) {
    this.matricula = mat;
  }
  get Matricula() {
    return this.matricula;
  }
  set Carrera(carre: string) {
    this.carrera = carre;
  }
  get Carrera() {
    return this.carrera;
  }
  set Notas(not: number[]) {
    this.notas = not;
  }
  get Notas() {
    return this.notas;
  }

  public promedioNotas(): number {
    let promedio = this.notas.reduce((acu: number, nota: number) => {
      return acu + nota;
    }, 0);
    return promedio / this.notas.length;
  }

  public aprobado(): boolean {
    return this.promedioNotas() >= 7;
  }
}

export default Estudiante;
