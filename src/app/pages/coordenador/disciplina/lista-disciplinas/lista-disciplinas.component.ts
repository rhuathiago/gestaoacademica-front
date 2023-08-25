import { Component, OnInit } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Disciplina} from "../../../../model/disciplina";
import {CoordenadorService} from "../../coordenador.service";
import {AutenticacaoService} from "../../../autenticacao/autenticacao/autenticacao.service";

@Component({
  selector: 'app-lista-disciplinas',
  templateUrl: './lista-disciplinas.component.html',
  styleUrls: ['./lista-disciplinas.component.css']
})
export class ListaDisciplinasComponent implements OnInit {

  pageSlice: Disciplina[] = [];

  disciplinas: Disciplina[] = [
    {
      nome: 'Cálculo',
      horas: 50,
      semestre: 1
    },
    {
      nome: 'Física',
      horas: 120,
      semestre: 1
    },
    {
      nome: 'Química',
      horas: 70,
      semestre: 1
    }
  ]

  constructor(private coordenadorService: CoordenadorService,
              public autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.carregarDisciplinas();
    this.pageSlice = this.disciplinas.slice(0, 10);
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

  deletarDisciplina(id: number) {
    if (confirm('Deseja realmente excluir esta matriz curricular?')) {
      this.coordenadorService.excluirDisciplina(id).subscribe(
        () => {
          alert('Matriz curricular excluída com sucesso!');
          location.reload();
        },
        (error) => {
          console.error(error);
          alert('Erro ao excluir matriz curricular.');
        }
      );
    }
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
