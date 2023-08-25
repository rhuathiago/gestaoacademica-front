import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../../model/usuario';
import {AdministradorService} from '../administrador.service';
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  pageSlice: Usuario[] = [];

  constructor(private administradorService: AdministradorService) { }

  ngOnInit(): void {
    this.carregarUsuarios();
  }

  carregarUsuarios() {
    this.administradorService.listarUsuarios()
      .subscribe(
        (usuarios) => {
          this.usuarios = usuarios;
          this.pageSlice = this.usuarios.slice(0, 10);
        },
        (error) => {
          console.error('Erro ao obter a lista de usuários:', error);
        }
      );
  }

  deletarUsuario(id: number) {
    if (confirm('Deseja realmente excluir este usuário?')) {
      this.administradorService.excluirUsuario(id).subscribe(
        () => {
          alert('Usuário excluído com sucesso.');
          location.reload();
        },
        (error) => {
          console.error(error);
          alert('Erro ao excluir usuário.');
        }
      );
    }
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.usuarios.length) {
      endIndex = this.usuarios.length;
    }
    this.pageSlice = this.usuarios.slice(startIndex, endIndex);
  }

}
