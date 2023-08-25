import { Component, OnInit } from '@angular/core';
import {AutenticacaoService, DadosAutenticacao} from "./autenticacao.service";
import {Router} from "@angular/router";
import {NotificacaoService} from "../../../shared/notificacao.service";

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
  token = this.autenticacaoService.getToken();

  constructor(private autenticacaoService: AutenticacaoService,
              private router: Router,
              private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
  }

  realizarLogin() {
    this.autenticacaoService.login(this.dadosAutenticacao)
      .subscribe(
        (response) => {
          localStorage.setItem('authToken', response.token);
          const redirectRoute = this.autenticacaoService.redirecionarUsuarios();
          this.router.navigate([redirectRoute]);
        },
        error => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar fazer login!');
          console.error(error);
        }
      );
  }

}
