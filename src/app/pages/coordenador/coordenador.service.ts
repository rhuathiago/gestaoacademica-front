import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatrizCurricular} from "../../model/MatrizCurricular";

@Injectable({
  providedIn: 'root'
})
export class CoordenadorService {

  urlCoordenador: string;

  constructor(private http: HttpClient) {
    this.urlCoordenador = `${environment.apiUrl}/coordenador`
  }

  criarMatrizCurricular(matrizCurricular: MatrizCurricular): Observable<MatrizCurricular> {
    const url = `${this.urlCoordenador}/listar-matrizes-curriculares`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.post<MatrizCurricular>(url, matrizCurricular, { headers });
  }

  listarMatrizesCurriculares(): Observable<MatrizCurricular[]> {
    const url = `${this.urlCoordenador}/listar-matrizes-curriculares`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<MatrizCurricular[]>(url, { headers });
  }

  atualizarMatrizCurricular(id: number, matrizCurricular: MatrizCurricular): Observable<MatrizCurricular> {
    const url = `${this.urlCoordenador}/listar-matrizes-curriculares/${id}`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.put<MatrizCurricular>(url, matrizCurricular, { headers });
  }

  excluirMatrizCurricular(id: number): Observable<void> {
    const url = `${this.urlCoordenador}/excluir-matriz-curricular/${id}`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.delete<void>(url, { headers });
  }

  visualizarMatrizCurricular(id: number): Observable<MatrizCurricular> {
    const url = `${this.urlCoordenador}/excluir-matriz-curricular/${id}`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.get<MatrizCurricular>(url, { headers });
  }

}
