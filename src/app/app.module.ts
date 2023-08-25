import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from './pages/header/header.component';
import {ListaUsuariosComponent} from './pages/administrador/lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CadastraUsuariosComponent } from './pages/administrador/cadastra-usuarios/cadastra-usuarios.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {VisualizaUsuarioComponent} from "./pages/administrador/visualiza-usuario/visualiza-usuario.component";
import {AutenticacaoComponent} from "./pages/autenticacao/autenticacao/autenticacao.component";
import {JwtModule} from "@auth0/angular-jwt";
import {AutenticacaoService} from "./pages/autenticacao/autenticacao/autenticacao.service";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {
  CadastraMatrizCurricularComponent
} from "./pages/coordenador/matriz-curricular/cadastra-matriz-curricular/cadastra-matriz-curricular.component";
import {
  ListaMatrizCurricularComponent
} from "./pages/coordenador/matriz-curricular/lista-matriz-curricular/lista-matriz-curricular.component";
import {
  VisualizaMatrizCurricularComponent
} from "./pages/coordenador/matriz-curricular/visualiza-matriz-curricular/visualiza-matriz-curricular.component";
import {
  CadastraDisciplinaComponent
} from "./pages/coordenador/disciplina/cadastra-disciplina/cadastra-disciplina.component";
import {ListaDisciplinasComponent} from "./pages/coordenador/disciplina/lista-disciplinas/lista-disciplinas.component";
import { VisualizaDisciplinaComponent } from './pages/coordenador/disciplina/visualiza-disciplina/visualiza-disciplina.component';
import {NaoAutorizadoComponent} from "./pages/nao-autorizado/nao-autorizado.component";
import { CadastraCursoComponent } from './pages/coordenador/curso/cadastra-curso/cadastra-curso.component';
import { ListaCursoComponent } from './pages/coordenador/curso/lista-curso/lista-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastraUsuariosComponent,
    ListaUsuariosComponent,
    HeaderComponent,
    VisualizaUsuarioComponent,
    ListaMatrizCurricularComponent,
    CadastraMatrizCurricularComponent,
    VisualizaMatrizCurricularComponent,
    ListaDisciplinasComponent,
    CadastraDisciplinaComponent,
    AutenticacaoComponent,
    VisualizaDisciplinaComponent,
    NaoAutorizadoComponent,
    CadastraCursoComponent,
    ListaCursoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    FormsModule,
    MatSelectModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("authToken"),
      },
    }),
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
