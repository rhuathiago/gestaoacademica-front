import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatrizCurricular} from "../../model/matriz-curricular";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlAluno: string;
  token = localStorage.getItem('authToken');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {
    this.urlAluno = `${environment.apiUrl}/aluno`
  }

  visualizarMatrizCurricular(alunoId: number): Observable<MatrizCurricular[]> {
    const url = `${this.urlAluno}/visualizar-matriz-curricular/${alunoId}`;
    const headers = this.headers;

    return this.http.get<MatrizCurricular[]>(url, {headers});
  }

}
