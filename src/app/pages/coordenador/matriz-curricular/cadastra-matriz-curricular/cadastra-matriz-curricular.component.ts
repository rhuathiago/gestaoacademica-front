import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Disciplina} from "../../../../model/disciplina";
import {MatrizCurricular} from "../../../../model/matriz-curricular";
import {CoordenadorService} from "../../coordenador.service";
import {NotificacaoService} from "../../../../shared/notificacao.service";
import {Curso} from "../../../../model/curso";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-cadastra-matriz-curricular',
  templateUrl: './cadastra-matriz-curricular.component.html',
  styleUrls: ['./cadastra-matriz-curricular.component.css']
})
export class CadastraMatrizCurricularComponent implements OnInit {

  pageSlice: Disciplina[] = [];
  disciplinas: Disciplina[] = []
  cursos: Curso[] = [];
  editando: boolean = false;
  matrizCurricularId: any;
  disciplinasSelecionadas: number[] = [];
  matrizCurricular: MatrizCurricular = {
    curso: '',
    disciplinaId: 0
  };

  constructor(private coordenadorService: CoordenadorService,
              private route: ActivatedRoute,
              private notificacaoService: NotificacaoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.matrizCurricularId = id;
      if (id) {
        this.editando = true;
        this.coordenadorService.visualizarMatrizCurricular(id).subscribe(
          matrizCurricular => {
            this.matrizCurricular = matrizCurricular;
          },
          error => {
            console.error(error);
          }
        );
      }
    });
    this.disciplinas.forEach(disciplina => {
      disciplina.selecionada = false;
    });
    this.carregarCursos();
    this.carregarDisciplinas();
    this.pageSlice = this.disciplinas.slice(0, 10);
  }

  salvarMatrizCurricular() {
    if (this.matrizCurricularId) {
      this.coordenadorService.atualizarMatrizCurricular(this.matrizCurricularId, this.matrizCurricular).subscribe(
        (response) => {
          this.notificacaoService.mostrarMensagemSucesso('Matriz curricular atualizada com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar atualizar matriz curricular!');
          console.error(error);
        }
      );
    } else {
      this.coordenadorService.criarMatrizCurricular(this.matrizCurricular).subscribe(
        (response) => {
          this.notificacaoService.mostrarMensagemSucesso('Matriz curricular criada com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar criar matriz curricular!');
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

  carregarDisciplinas() {
    this.coordenadorService.listarDisciplinas()
      .subscribe(
        (disciplinas) => {
          this.disciplinas = disciplinas;
          this.pageSlice = this.disciplinas.slice(0, 10);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  criarMatrizCurricular() {
    const cursoSelecionado = this.cursos.find(curso => curso.id === this.matrizCurricular.disciplinaId);
    const disciplinasSelecionadas = this.disciplinas.filter(d => d.selecionada);

    disciplinasSelecionadas.forEach(disciplina => {
      const novaMatrizCurricular: MatrizCurricular = {
        curso: cursoSelecionado!.nome,
        disciplinaId: disciplina.id!
      };

      this.coordenadorService.criarMatrizCurricular(novaMatrizCurricular).subscribe(
        (response) => {
          this.notificacaoService.mostrarMensagemSucesso('Matriz curricular criada com sucesso!');
        },
        (error) => {
          this.notificacaoService.mostrarMensagemErro('Erro ao tentar criar matriz curricular!');
          console.error(error);
        }
      );
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;

    if (endIndex > this.disciplinas.length) {
      endIndex = this.disciplinas.length;
    }

    this.pageSlice = this.disciplinas.slice(startIndex, endIndex);
  }

}
