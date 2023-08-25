import { Component, OnInit } from '@angular/core';
import { PageEvent } from "@angular/material/paginator";
import {MatrizCurricular} from "../../../../model/matriz-curricular";
import {CoordenadorService} from "../../coordenador.service";
import {AutenticacaoService} from "../../../autenticacao/autenticacao/autenticacao.service";

@Component({
  selector: 'app-lista-matriz-curricular',
  templateUrl: './lista-matriz-curricular.component.html',
  styleUrls: ['./lista-matriz-curricular.component.css']
})
export class ListaMatrizCurricularComponent implements OnInit {
  pageSlice: MatrizCurricular[] = [];

  matrizesCurriculares: any[] = [];

  constructor(private coordenadorService: CoordenadorService,
              public autenticacaoService: AutenticacaoService) { }

  ngOnInit(): void {
    this.carregarMatrizesCurriculares();
    this.pageSlice = this.matrizesCurriculares.slice(0, 10);
  }

  carregarMatrizesCurriculares() {
    this.coordenadorService.listarMatrizesCurriculares()
      .subscribe(
        (matrizesCurriculares) => {
          this.matrizesCurriculares = matrizesCurriculares;
          this.pageSlice = this.matrizesCurriculares.slice(0, 10);
        },
        (error) => {
          console.error('Erro ao obter a lista de matrizes curriculares:', error);
        }
      );
  }

  deletarMatrizCurricular(curso: string) {
    if (confirm(`Deseja realmente excluir a matriz curricular do curso "${curso}"?`)) {
      this.coordenadorService.excluirMatrizCurricularPorCurso(curso).subscribe(
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
    if (endIndex > this.matrizesCurriculares.length) {
      endIndex = this.matrizesCurriculares.length;
    }
    this.pageSlice = this.matrizesCurriculares.slice(startIndex, endIndex);
  }
}
