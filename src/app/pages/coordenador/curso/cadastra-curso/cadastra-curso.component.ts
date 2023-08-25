import { Component, OnInit } from '@angular/core';
import {Disciplina} from "../../../../model/disciplina";
import {CoordenadorService} from "../../coordenador.service";
import {NotificacaoService} from "../../../../shared/notificacao.service";
import {ActivatedRoute} from "@angular/router";
import {Curso} from "../../../../model/curso";

@Component({
  selector: 'app-cadastra-curso',
  templateUrl: './cadastra-curso.component.html',
  styleUrls: ['./cadastra-curso.component.css']
})
export class CadastraCursoComponent implements OnInit {

  curso: Curso = {
    nome: ''
  };

  cursoId: any;
  editando: boolean = false;

  constructor(private coordenadorService: CoordenadorService,
              private notificacaoService: NotificacaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.cursoId = id;
      if (id) {
        this.editando = true;
        this.coordenadorService.obterCursoPorId(id).subscribe(
          curso => {
            this.curso = {
              nome: curso.nome,
            };
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }

  salvarCurso() {
    if (this.cursoId) {
      this.coordenadorService.atualizarCurso(this.cursoId, this.curso).subscribe(
        (response) => {
          this.notificacaoService.mostrarMensagemSucesso('Curso atualizado com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar atualizar curso!');
          console.error(error);
        }
      );
    } else {
      this.coordenadorService.criarCurso(this.curso).subscribe(
        (response) => {
          this.curso = {
            nome: ''
          }
          this.notificacaoService.mostrarMensagemSucesso('Curso criado com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar criar curso!');
          console.error(error);
        }
      );
    }
  }

}
