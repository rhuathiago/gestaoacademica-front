import { Component, OnInit } from '@angular/core';
import {Disciplina} from "../../../../model/disciplina";
import {CoordenadorService} from "../../coordenador.service";
import {NotificacaoService} from "../../../../shared/notificacao.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cadastra-disciplina',
  templateUrl: './cadastra-disciplina.component.html',
  styleUrls: ['./cadastra-disciplina.component.css']
})
export class CadastraDisciplinaComponent implements OnInit {

  disciplina: Disciplina = {
    nome: ''
  };

  disciplinaId: any;
  editando: boolean = false;

  constructor(private coordenadorService: CoordenadorService,
              private notificacaoService: NotificacaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.disciplinaId = id;
      if (id) {
        this.editando = true;
        this.coordenadorService.obterDisciplinaPorId(id).subscribe(
          disciplina => {
            this.disciplina = {
              nome: disciplina.nome,
              horas: disciplina.horas,
              semestre: disciplina.semestre
            };
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }

  salvarDisciplina() {
    if (this.disciplinaId) {
      this.coordenadorService.atualizarDisciplina(this.disciplinaId, this.disciplina).subscribe(
        (response) => {
          this.notificacaoService.mostrarMensagemSucesso('Disciplina atualizada com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar atualizar disciplina!');
          console.error(error);
        }
      );
    } else {
      this.coordenadorService.criarDisciplina(this.disciplina).subscribe(
        (response) => {
          this.disciplina = {
            nome: ''
          }
          this.notificacaoService.mostrarMensagemSucesso('Disciplina criada com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar criar disciplina!');
          console.error(error);
        }
      );
    }
  }

}
