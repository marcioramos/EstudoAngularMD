import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';


const usuariosRoutes: Routes = [
    { path: '', component: UsuarioListaComponent },
    { path: ':id', component: UsuarioDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(usuariosRoutes)],
    exports: [RouterModule]
})
export class UsuariosRoutingModule { }