import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatrizCurricular} from "../../model/matriz-curricular";
import {Disciplina} from "../../model/disciplina";
import {Curso} from "../../model/curso";

@Injectable({
  providedIn: 'root'
})
export class CoordenadorService {

  urlCoordenador: string;
  token = localStorage.getItem('authToken');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {
    this.urlCoordenador = `${environment.apiUrl}/coordenador`
  }

  criarMatrizCurricular(matrizCurricular: MatrizCurricular): Observable<MatrizCurricular> {
    const url = `${this.urlCoordenador}/criar-matriz-curricular`;
    const headers = this.headers;

    return this.http.post<MatrizCurricular>(url, matrizCurricular, { headers });
  }

  listarMatrizesCurriculares(): Observable<String[]> {
    const url = `${this.urlCoordenador}/listar-matrizes-curriculares`;
    const headers = this.headers;

    return this.http.get<String[]>(url, { headers });
  }

  atualizarMatrizCurricular(id: number, matrizCurricular: MatrizCurricular): Observable<MatrizCurricular> {
    const url = `${this.urlCoordenador}/atualizar-matriz-curricular/${id}`;
    const headers = this.headers;

    return this.http.put<MatrizCurricular>(url, matrizCurricular, { headers });
  }

  excluirMatrizCurricularPorCurso(curso: string): Observable<void> {
    const url = `${this.urlCoordenador}/excluir-matriz-curricular/${curso}`;
    const headers = this.headers;

    return this.http.delete<void>(url, { headers });
  }

  visualizarMatrizCurricular(id: number): Observable<MatrizCurricular> {
    const url = `${this.urlCoordenador}/visualizar-matriz-curricular/${id}`;
    const headers = this.headers;

    return this.http.get<MatrizCurricular>(url, { headers });
  }

  criarDisciplina(disciplina: Disciplina): Observable<Disciplina> {
    const url = `${this.urlCoordenador}/criar-disciplina`;
    const headers = this.headers;

    return this.http.post<Disciplina>(url, disciplina, { headers });
  }

  listarDisciplinas(): Observable<Disciplina[]> {
    const url = `${this.urlCoordenador}/listar-disciplinas`;
    const headers = this.headers;

    return this.http.get<Disciplina[]>(url, { headers });
  }

  atualizarDisciplina(id: number, usuario: Disciplina): Observable<Disciplina> {
    const url = `${this.urlCoordenador}/atualizar-disciplina/${id}`;
    const headers = this.headers;

    return this.http.put<Disciplina>(url, usuario, { headers });
  }

  obterDisciplinaPorId(id: number): Observable<Disciplina> {
    const url = `${this.urlCoordenador}/visualizar-disciplina/${id}`;
    const headers = this.headers;

    return this.http.get<Disciplina>(url, { headers });
  }

  excluirDisciplina(id: number): Observable<void> {
    const url = `${this.urlCoordenador}/excluir-disciplina/${id}`;
    const headers = this.headers;

    return this.http.delete<void>(url, { headers });
  }

  criarCurso(curso: Curso): Observable<Curso> {
    const url = `${this.urlCoordenador}/criar-curso`;
    const headers = this.headers;

    return this.http.post<Curso>(url, curso, { headers });
  }

  listarCursos(): Observable<Curso[]> {
    const url = `${this.urlCoordenador}/listar-cursos`;
    const headers = this.headers;

    return this.http.get<Curso[]>(url, { headers });
  }

  atualizarCurso(id: number, usuario: Curso): Observable<Disciplina> {
    const url = `${this.urlCoordenador}/atualizar-curso/${id}`;
    const headers = this.headers;

    return this.http.put<Disciplina>(url, usuario, { headers });
  }

  obterCursoPorId(id: number): Observable<Curso> {
    const url = `${this.urlCoordenador}/visualizar-curso/${id}`;
    const headers = this.headers;

    return this.http.get<Disciplina>(url, { headers });
  }

  excluirCurso(id: number): Observable<void> {
    const url = `${this.urlCoordenador}/excluir-curso/${id}`;
    const headers = this.headers;

    return this.http.delete<void>(url, { headers });
  }

  listarDisciplinasPorCurso(curso: any): Observable<Disciplina[]> {
    const url = `${this.urlCoordenador}/detalhes-disciplinas/${curso}`;
    const headers = this.headers;

    return this.http.get<Disciplina[]>(url, { headers });
  }

}
