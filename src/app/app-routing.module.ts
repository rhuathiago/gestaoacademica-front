import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './pages/autenticacao/autenticacao/autenticacao.component';
import {ListaUsuariosComponent} from "./pages/administrador/lista-usuarios/lista-usuarios.component";
import {CadastraUsuariosComponent} from "./pages/administrador/cadastra-usuarios/cadastra-usuarios.component";
import {VisualizaUsuarioComponent} from "./pages/administrador/visualiza-usuario/visualiza-usuario.component";
import {
  CadastraMatrizCurricularComponent
} from "./pages/coordenador/cadastra-matriz-curricular/cadastra-matriz-curricular.component";
import {
  ListaMatrizCurricularComponent
} from "./pages/coordenador/lista-matriz-curricular/lista-matriz-curricular.component";
import {
  VisualizaMatrizCurricularComponent
} from "./pages/coordenador/visualiza-matriz-curricular/visualiza-matriz-curricular.component";
import {RoleGuard} from "./pages/autenticacao/role.guard";

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
    data: { allowedRoles: ['ROLE_COORDENADOR', 'ROLE_ALUNO', 'ROLE_PROFESSOR'] }
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
    path: 'visualizar-matriz-curricular/:id',
    component: VisualizaMatrizCurricularComponent,
    canActivate: [RoleGuard],
    data: { allowedRoles: ['ROLE_COORDENADOR', 'ROLE_ALUNO', 'ROLE_PROFESSOR'] }
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
