export class MatrizCurricular {
  id?: number;
  curso: string;
  disciplinaId: number;

  constructor(id:number, curso: string, disciplinaId: number) {
    this.id = id;
    this.curso = curso;
    this.disciplinaId = disciplinaId;
  }
}

export class Disciplina {
  id?: number;
  nome: string;
  horas: number;
  semestre: number

  constructor(id: number, nome: string, horas: number, semestre: number) {
    this.id = id;
    this.nome = nome;
    this.horas = horas;
    this.semestre = semestre;
  }
}
