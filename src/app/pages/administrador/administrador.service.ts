import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  urlUsuarios: string;

  constructor(private http: HttpClient) {
    this.urlUsuarios = `${environment.apiUrl}/administrador`
  }

  listarUsuarios(): Observable<Usuario[]> {
    const url = `${this.urlUsuarios}/listar-usuarios`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.get<Usuario[]>(url, { headers });
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.urlUsuarios}/criar-usuario`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.post<Usuario>(url, usuario, { headers });
  }

  atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    const url = `${this.urlUsuarios}/atualizar-usuario/${id}`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.put<Usuario>(url, usuario, { headers });
  }

  obterUsuarioPorId(id: number): Observable<Usuario> {
    const url = `${this.urlUsuarios}/visualizar-usuario/${id}`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.get<Usuario>(url, { headers });
  }

  excluirUsuario(id: number): Observable<void> {
    const url = `${this.urlUsuarios}/excluir-usuario/${id}`;
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);

    return this.http.delete<void>(url, { headers });
  }

}
