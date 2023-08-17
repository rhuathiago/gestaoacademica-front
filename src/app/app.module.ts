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
import { CadastraMatrizCurricularComponent } from './pages/coordenador/cadastra-matriz-curricular/cadastra-matriz-curricular.component';
import {
  ListaMatrizCurricularComponent
} from "./pages/coordenador/lista-matriz-curricular/lista-matriz-curricular.component";
import {
  VisualizaMatrizCurricularComponent
} from "./pages/coordenador/visualiza-matriz-curricular/visualiza-matriz-curricular.component";
import {AutenticacaoComponent} from "./pages/autenticacao/autenticacao/autenticacao.component";
import {JwtModule} from "@auth0/angular-jwt";
import {AutenticacaoService} from "./pages/autenticacao/autenticacao/autenticacao.service";

@NgModule({
  declarations: [
    AppComponent,
    CadastraUsuariosComponent,
    ListaUsuariosComponent,
    HeaderComponent,
    VisualizaUsuarioComponent,
    CadastraMatrizCurricularComponent,
    ListaMatrizCurricularComponent,
    VisualizaMatrizCurricularComponent,
    AutenticacaoComponent
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
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
