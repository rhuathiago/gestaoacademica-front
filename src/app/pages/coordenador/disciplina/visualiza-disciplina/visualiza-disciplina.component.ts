import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../../model/usuario";
import {TipoDeUsuario} from "../../../../model/enums/tipo-de-usuario";
import {AdministradorService} from "../../../administrador/administrador.service";
import {ActivatedRoute} from "@angular/router";
import {CoordenadorService} from "../../coordenador.service";
import {Disciplina} from "../../../../model/disciplina";

@Component({
  selector: 'app-visualiza-disciplina',
  templateUrl: './visualiza-disciplina.component.html',
  styleUrls: ['./visualiza-disciplina.component.css']
})
export class VisualizaDisciplinaComponent implements OnInit {

  disciplina: Disciplina = {
    nome: '',
    horas: 0,
    semestre: 0
  };

  constructor(private coordenadorService: CoordenadorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.coordenadorService.obterDisciplinaPorId(id).subscribe(
          disciplina => {
            this.disciplina = disciplina;
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }
}
