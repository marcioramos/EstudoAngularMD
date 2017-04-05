import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioListaComponent, UsuarioEditComponent, UsuarioNovoComponent, UsuarioDetalheComponent]
})
export class UsuariosModule { }
