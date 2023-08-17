import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import { JwtHelperService } from '@auth0/angular-jwt';
import {Route, Router} from "@angular/router";

export interface DadosAutenticacao {
  login: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  urlAutenticacao: string;

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService,
              private router: Router) {
    this.urlAutenticacao = `${environment.apiUrl}/login`
  }

  login(usuario: DadosAutenticacao): Observable<any> {
    const url = `${this.urlAutenticacao}`;
    const headers = new HttpHeaders().append('Content-Type', 'application/json');

    return this.http.post<any>(url, JSON.stringify(usuario), { headers });
  }

  fazerLogout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  temPermissao(requiredRoles: string | string[]): boolean {
    const token = localStorage.getItem('authToken');

    if (token) {
      const roles = this.jwtHelper.decodeToken(token).roles;
      return Array.isArray(requiredRoles) ? requiredRoles.some(role => roles.includes(role)) : roles.includes(requiredRoles);
    }
    return false;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getRolesToken(token: string): string[] {
    const tokenDecodificado: any = this.jwtHelper.decodeToken(token);
    return tokenDecodificado.roles || [];
  }

  redirecionarUsuarios(): any {
    const token = localStorage.getItem('authToken');

    if (token) {
      const usuariosRoles = this.getRolesToken(token);
      if (usuariosRoles.includes('ROLE_ADMINISTRADOR')) {
        return '/lista-usuarios';
      } else if (usuariosRoles.some(role => ['ROLE_COORDENADOR', 'ROLE_PROFESSOR', 'ROLE_ALUNO'].includes(role))) {
        return '/lista-matriz-curricular';
      }
    }

  }


}
