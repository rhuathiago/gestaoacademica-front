import { Component, OnInit } from '@angular/core';
import {Disciplina} from "../../../../model/disciplina";
import {CoordenadorService} from "../../coordenador.service";
import {AutenticacaoService} from "../../../autenticacao/autenticacao/autenticacao.service";
import {PageEvent} from "@angular/material/paginator";
import {Curso} from "../../../../model/curso";

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  pageSlice: Curso[] = [];

  cursos: Curso[] = [
    {
      nome: 'Engenharia de Software'
    },
    {
      nome: 'Medicina'
    },
    {
      nome: 'Enfermagem'
    }
  ]

  constructor(private coordenadorService: CoordenadorService,
              public autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.carregarCursos();
    this.pageSlice = this.cursos.slice(0, 10);
  }

  carregarCursos() {
    this.coordenadorService.listarCursos()
      .subscribe(
        (cursos) => {
          this.cursos = cursos;
          this.pageSlice = this.cursos.slice(0, 10);
        },
        (error) => {
          console.error(error);
        }
      );
  }

  deletarCurso(id: number) {
    if (confirm('Deseja realmente excluir este curso?')) {
      this.coordenadorService.excluirCurso(id).subscribe(
        () => {
          alert('Curso excluído com sucesso!');
          location.reload();
        },
        (error) => {
          console.error(error);
          alert('Erro ao excluir curso.');
        }
      );
    }
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.cursos.length) {
      endIndex = this.cursos.length;
    }
    this.pageSlice = this.cursos.slice(startIndex, endIndex);
  }

}
