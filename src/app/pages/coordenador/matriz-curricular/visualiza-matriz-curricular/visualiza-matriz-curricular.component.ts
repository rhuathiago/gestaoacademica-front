import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CoordenadorService} from "../../coordenador.service";
import {Disciplina} from "../../../../model/disciplina";
import {AutenticacaoService} from "../../../autenticacao/autenticacao/autenticacao.service";

@Component({
  selector: 'app-visualiza-matriz-curricular',
  templateUrl: './visualiza-matriz-curricular.component.html',
  styleUrls: ['./visualiza-matriz-curricular.component.css']
})
export class VisualizaMatrizCurricularComponent implements OnInit {

  cursoNome: any;
  cursoToken: any;
  disciplinas: Disciplina[] = [];

  constructor(
    private route: ActivatedRoute,
    private coordenadorService: CoordenadorService,
    public autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit(): void {
    this.buscarCurso();
    this.route.paramMap.subscribe(params => {
      this.cursoNome = params.get('cursoNome');
      const aluno = this.autenticacaoService.temPermissao('ROLE_ALUNO');
      const professor = this.autenticacaoService.temPermissao('ROLE_PROFESSOR');
      if (aluno) {
        this.carregarDisciplinasPorCurso(this.cursoToken);
      } else if (professor) {
        this.carregarDisciplinasPorCurso(this.cursoToken);
      } else {
        this.carregarDisciplinasPorCurso(this.cursoNome);
      }
    });
  }

  carregarDisciplinasPorCurso(curso: any) {
    this.coordenadorService.listarDisciplinasPorCurso(curso)
      .subscribe(
        (disciplinas) => {
          this.disciplinas = disciplinas;
        },
        (error) => {
          console.error('Erro ao obter disciplinas por curso:', error);
        }
      );
  }

  buscarCurso() {
    this.cursoToken = this.autenticacaoService.getCursoAluno();
  }

}
