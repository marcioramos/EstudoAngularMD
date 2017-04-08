import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { UsuariosRoutingModule } from './usuarios.routing.module';
import { UsuariosService } from './usuarios.service';

import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    UsuariosRoutingModule
  ],
  exports: [

  ],
  declarations: [
    UsuarioListaComponent,
    UsuarioEditComponent,
    UsuarioNovoComponent,
    UsuarioDetalheComponent
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
