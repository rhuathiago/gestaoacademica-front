import {TipoDeUsuario} from "./enums/tipo-de-usuario";

export class Usuario {
  id?: number;
  nome: string;
  matricula?: number;
  login: string;
  senha: string;
  tipoDeUsuario?: TipoDeUsuario;
  curso?: string;

  constructor(id:number, nome: string, matricula: number, login: string,
              senha: string, tipoDeUsuario: TipoDeUsuario) {
    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.login = login;
    this.senha = senha;
    this.tipoDeUsuario = tipoDeUsuario;
  }
}
