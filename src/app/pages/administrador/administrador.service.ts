import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../../model/usuario";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  urlUsuarios: string;
  token = localStorage.getItem('authToken');
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient) {
    this.urlUsuarios = `${environment.apiUrl}/administrador`
  }

  listarUsuarios(): Observable<Usuario[]> {
    const url = `${this.urlUsuarios}/listar-usuarios`;
    const headers = this.headers;

    return this.http.get<Usuario[]>(url, { headers });
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    const url = `${this.urlUsuarios}/criar-usuario`;
    const headers = this.headers;

    return this.http.post<Usuario>(url, usuario, { headers });
  }

  atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    const url = `${this.urlUsuarios}/atualizar-usuario/${id}`;
    const headers = this.headers;

    return this.http.put<Usuario>(url, usuario, { headers });
  }

  obterUsuarioPorId(id: number): Observable<Usuario> {
    const url = `${this.urlUsuarios}/visualizar-usuario/${id}`;
    const headers = this.headers;

    return this.http.get<Usuario>(url, { headers });
  }

  excluirUsuario(id: number): Observable<void> {
    const url = `${this.urlUsuarios}/excluir-usuario/${id}`;
    const headers = this.headers;

    return this.http.delete<void>(url, { headers });
  }

}
