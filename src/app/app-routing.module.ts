import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './pages/autenticacao/autenticacao/autenticacao.component';
import {ListaUsuariosComponent} from "./pages/administrador/lista-usuarios/lista-usuarios.component";
import {CadastraUsuariosComponent} from "./pages/administrador/cadastra-usuarios/cadastra-usuarios.component";
import {VisualizaUsuarioComponent} from "./pages/administrador/visualiza-usuario/visualiza-usuario.component";
import {RoleGuard} from "./pages/autenticacao/role.guard";
import {
  ListaMatrizCurricularComponent
} from "./pages/coordenador/matriz-curricular/lista-matriz-curricular/lista-matriz-curricular.component";
import {
  CadastraMatrizCurricularComponent
} from "./pages/coordenador/matriz-curricular/cadastra-matriz-curricular/cadastra-matriz-curricular.component";
import {
  VisualizaMatrizCurricularComponent
} from "./pages/coordenador/matriz-curricular/visualiza-matriz-curricular/visualiza-matriz-curricular.component";
import {
  CadastraDisciplinaComponent
} from "./pages/coordenador/disciplina/cadastra-disciplina/cadastra-disciplina.component";
import {ListaDisciplinasComponent} from "./pages/coordenador/disciplina/lista-disciplinas/lista-disciplinas.component";
import {
  VisualizaDisciplinaComponent
} from "./pages/coordenador/disciplina/visualiza-disciplina/visualiza-disciplina.component";
import {NaoAutorizadoComponent} from "./pages/nao-autorizado/nao-autorizado.component";
import {ListaCursoComponent} from "./pages/coordenador/curso/lista-curso/lista-curso.component";
import {CadastraCursoComponent} from "./pages/coordenador/curso/cadastra-curso/cadastra-curso.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AutenticacaoComponent
  },
  {
    path: 'lista-usuarios',
    component: ListaUsuariosComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_ADMINISTRADOR' }
  },
  {
    path: 'cadastra-usuarios',
    component: CadastraUsuariosComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_ADMINISTRADOR' }
  },
  {
    path: 'atualizar-usuario/:id',
    component: CadastraUsuariosComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_ADMINISTRADOR' }
  },
  {
    path: 'visualizar-usuario/:id',
    component: VisualizaUsuarioComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_ADMINISTRADOR' }
  },
  {
    path: 'lista-matriz-curricular',
    component: ListaMatrizCurricularComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'cadastra-matriz-curricular',
    component: CadastraMatrizCurricularComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'atualizar-matriz-curricular/:id',
    component: CadastraMatrizCurricularComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'visualizar-matriz-curricular/:cursoNome',
    component: VisualizaMatrizCurricularComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'matriz-curricular',
    component: VisualizaMatrizCurricularComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: ['ROLE_ALUNO', 'ROLE_PROFESSOR'] }
  },
  {
    path: 'cadastra-disciplina',
    component: CadastraDisciplinaComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'lista-disciplina',
    component: ListaDisciplinasComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'atualizar-disciplina/:id',
    component: CadastraDisciplinaComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'visualizar-disciplina/:id',
    component: VisualizaDisciplinaComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'lista-cursos',
    component: ListaCursoComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'cadastra-curso',
    component: CadastraCursoComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'atualizar-curso/:id',
    component: CadastraCursoComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: 'ROLE_COORDENADOR' }
  },
  {
    path: 'nao-autorizado',
    component: NaoAutorizadoComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' }),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
