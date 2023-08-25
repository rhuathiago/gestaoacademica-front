import {Component, OnInit} from '@angular/core';
import {AdministradorService} from '../administrador.service';
import {TipoDeUsuario} from '../../../model/enums/tipo-de-usuario';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../../model/usuario";
import {NotificacaoService} from "../../../shared/notificacao.service";
import {CoordenadorService} from "../../coordenador/coordenador.service";
import {Curso} from "../../../model/curso";

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
    senha: '',
  };
  cursos: Curso[] = [];
  cursoHabilitado: boolean = false;

  editando: boolean = false;
  usuarioId: any;

  constructor(private administradorService: AdministradorService,
              private route: ActivatedRoute,
              private notificacaoService: NotificacaoService,
              private coordenadorService: CoordenadorService) { }

  ngOnInit(): void {
    this.carregarCursos();
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
              tipoDeUsuario: usuario.tipoDeUsuario,
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
        () => {
          this.notificacaoService.mostrarMensagemSucesso('Usuário atualizado com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar atualizar usuário!');
          console.error(error);
        }
      );
    } else {
      this.administradorService.criarUsuario(this.usuario).subscribe(
        () => {
          this.usuario = {
            login: '',
            nome: '',
            senha: ''
          }
          this.notificacaoService.mostrarMensagemSucesso('Usuário criado com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar criar usuário!');
          console.error(error);
        }
      );
    }
  }

  carregarCursos() {
    this.coordenadorService.listarCursos()
      .subscribe(
        (cursos) => {
          this.cursos = cursos;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  tipoDeUsuarioSelecionado() {
    this.cursoHabilitado = this.usuario.tipoDeUsuario === TipoDeUsuario.ALUNO || this.usuario.tipoDeUsuario === TipoDeUsuario.PROFESSOR;
    if (!this.cursoHabilitado) {
      this.usuario.curso = '';
    }
  }

}
