import {Component, OnInit} from '@angular/core';
import {AdministradorService} from '../administrador.service';
import {TipoDeUsuario} from '../../../model/enums/TipoDeUsuario';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../../model/Usuario";

@Component({
  selector: 'app-cadastra-usuarios',
  templateUrl: './cadastra-usuarios.component.html',
  styleUrls: ['./cadastra-usuarios.component.css']
})
export class CadastraUsuariosComponent implements OnInit {

  tiposDeUsuario: TipoDeUsuario[] = Object.values(TipoDeUsuario);
  usuario: Usuario = {
    login: '',
    nome: '',
    senha: ''
  };

  editando: boolean = false;
  usuarioId: any;

  constructor(private administradorService: AdministradorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.usuarioId = id;
      if (id) {
        this.editando = true;
        this.administradorService.obterUsuarioPorId(id).subscribe(
          usuario => {
            this.usuario = {
              login: usuario.login,
              nome: usuario.nome,
              senha: usuario.senha,
              tipoDeUsuario: usuario.tipoDeUsuario
            };
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }

  salvarUsuario() {
    if (this.usuarioId) {
      this.administradorService.atualizarUsuario(this.usuarioId, this.usuario).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Erro ao atualizar usuário:', error);
        }
      );
    } else {
      this.administradorService.criarUsuario(this.usuario).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    }
  }

}
