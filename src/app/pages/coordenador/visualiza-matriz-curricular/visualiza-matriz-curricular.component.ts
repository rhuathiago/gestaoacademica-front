import { Component, OnInit } from '@angular/core';
import { CoordenadorService } from '../coordenador.service';
import { MatrizCurricular } from '../../../model/MatrizCurricular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualiza-matriz-curricular',
  templateUrl: './visualiza-matriz-curricular.component.html',
  styleUrls: ['./visualiza-matriz-curricular.component.css']
})
export class VisualizaMatrizCurricularComponent implements OnInit {

  matrizCurricular: MatrizCurricular = {
    curso: '',
    disciplinaId: 0
  };

  constructor(private coordenadorService: CoordenadorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
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
}
