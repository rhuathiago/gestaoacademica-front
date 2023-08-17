import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AutenticacaoService} from "./autenticacao/autenticacao.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.autenticacaoService.getToken();

    if (token) {
      const rolesPermitidas = route.data.allowedRoles as string[];
      const usuarioRoles = this.autenticacaoService.getRolesToken(token);
      const temPermissao = usuarioRoles.some(role => rolesPermitidas.includes(role));

      if (temPermissao) {
        return true;
      }
    }

    this.router.navigate(['/nao-autorizado']);
    return false;
  }



}
