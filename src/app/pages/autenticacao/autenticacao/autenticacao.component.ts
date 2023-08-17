import { Component, OnInit } from '@angular/core';
import {AutenticacaoService, DadosAutenticacao} from "./autenticacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent implements OnInit {

  dadosAutenticacao: DadosAutenticacao = {
    login: '',
    senha: ''
  };

  constructor(private autenticacaoService: AutenticacaoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  realizarLogin() {
    this.autenticacaoService.login(this.dadosAutenticacao)
      .subscribe(
        (response) => {
          localStorage.setItem('authToken', response.token);
          const redirectRoute = this.autenticacaoService.redirecionarUsuarios();
          console.log(redirectRoute);
          this.router.navigate([redirectRoute]);
        },
        error => {
          console.error('Erro ao efetuar login:', error);
        }
      );
  }

}
