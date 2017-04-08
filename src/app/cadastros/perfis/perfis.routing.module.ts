import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { PerfilDetalheComponent } from './perfil-detalhe/perfil-detalhe.component';
import { PerfilNovoComponent } from './perfil-novo/perfil-novo.component';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';

const perfisRoutes: Routes = [
    { path: '', component: PerfilListaComponent },
    { path: ':id', component: PerfilDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(perfisRoutes)],
    exports: [RouterModule]
})
export class PerfisRoutingModule { }