import { Component, OnInit } from '@angular/core';
import {AdministradorService} from "../administrador.service";
import {ActivatedRoute} from "@angular/router";
import {TipoDeUsuario} from "../../../model/enums/tipo-de-usuario";
import {Usuario} from "../../../model/usuario";

@Component({
  selector: 'app-visualiza-usuario',
  templateUrl: './visualiza-usuario.component.html',
  styleUrls: ['./visualiza-usuario.component.css']
})
export class VisualizaUsuarioComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    login: '',
    senha: '',
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
