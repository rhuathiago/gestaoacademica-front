import { Component, OnInit } from '@angular/core';
import {AdministradorService} from "../administrador.service";
import {ActivatedRoute} from "@angular/router";
import {TipoDeUsuario} from "../../../model/enums/TipoDeUsuario";
import {Usuario} from "../../../model/Usuario";

@Component({
  selector: 'app-visualiza-usuario',
  templateUrl: './visualiza-usuario.component.html',
  styleUrls: ['./visualiza-usuario.component.css']
})
export class VisualizaUsuarioComponent implements OnInit {

  usuario: Usuario = {
    id: 0,
    matricula: 0,
    nome: '',
    login: '',
    senha: '',
    tipoDeUsuario: TipoDeUsuario.ADMINISTRADOR
  };

  constructor(private administradorService: AdministradorService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.administradorService.obterUsuarioPorId(id).subscribe(
          usuario => {
            this.usuario = usuario;
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }

}
