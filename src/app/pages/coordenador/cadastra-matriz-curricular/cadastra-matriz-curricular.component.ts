import { Component, OnInit } from '@angular/core';
import { CoordenadorService } from '../coordenador.service';
import {Disciplina, MatrizCurricular} from '../../../model/MatrizCurricular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cadastra-matriz-curricular',
  templateUrl: './cadastra-matriz-curricular.component.html',
  styleUrls: ['./cadastra-matriz-curricular.component.css']
})
export class CadastraMatrizCurricularComponent implements OnInit {

  disciplinas: Disciplina[] = []
  // disciplinas: Disciplina[] = [
  //   {
  //     nome: 'Cálculo',
  //     horas: 120,
  //     semestre: 1
  //   },
  //   {
  //     nome: 'Física',
  //     horas: 80,
  //     semestre: 1
  //   },
  //   {
  //     nome: 'Química',
  //     horas: 100,
  //     semestre: 1
  //   },
  //   {
  //     nome: 'Anatomia',
  //     horas: 200,
  //     semestre: 1
  //   },
  //   {
  //     nome: 'Cardiologia',
  //     horas: 250,
  //     semestre: 1
  //   },
  //   {
  //     nome: 'Biologia',
  //     horas: 180,
  //     semestre: 1
  //   }
  // ]

  cursos: string[] = [
    'Engenharia', 'Medicina'
  ]

  matrizesCurriculares: MatrizCurricular[] = [
    {
      curso: 'Engenharia',
      disciplinaId: 1
    },
    {
      curso: 'Engenharia',
      disciplinaId: 1
    },
    {
      curso: 'Engenharia',
      disciplinaId: 1
    }
  ]

  matrizCurricular: MatrizCurricular = {
    curso: '',
    disciplinaId: 0
  };
  editando: boolean = false;
  matrizCurricularId: any;

  constructor(private coordenadorService: CoordenadorService,
              private route: ActivatedRoute) { }

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
  }

  salvarMatrizCurricular() {
    if (this.matrizCurricularId) {
      this.coordenadorService.atualizarMatrizCurricular(this.matrizCurricularId, this.matrizCurricular).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Erro ao atualizar matriz curricular:', error);
        }
      );
    } else {
      this.coordenadorService.criarMatrizCurricular(this.matrizCurricular).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Erro ao criar nova matriz curricular:', error);
        }
      );
    }
  }

  verificaCurso({curso}: { curso: any }) {
    if (curso == 'Engenharia') {
      this.disciplinas = [
        {
            nome: 'Cálculo',
            horas: 120,
            semestre: 1
          },
          {
            nome: 'Física',
            horas: 80,
            semestre: 1
          },
          {
            nome: 'Química',
            horas: 100,
            semestre: 1
          },
      ]
    } else {
      this.disciplinas = [
        {
            nome: 'Anatomia',
            horas: 200,
            semestre: 1
          },
          {
            nome: 'Cardiologia',
            horas: 250,
            semestre: 1
          },
          {
            nome: 'Biologia',
            horas: 180,
            semestre: 1
          }
      ]
    }
  }
}
