import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfisRoutingModule } from './perfis.routing.module';
import { PerfisService } from './perfis.service';

import { PerfilListaComponent } from './perfil-lista/perfil-lista.component';
import { PerfilDetalheComponent } from './perfil-detalhe/perfil-detalhe.component';
import { PerfilNovoComponent } from './perfil-novo/perfil-novo.component';
import { PerfilEditComponent } from './perfil-edit/perfil-edit.component';

@NgModule({
  imports: [
    CommonModule,
    PerfisRoutingModule
  ],
  declarations: [
    PerfilListaComponent,
    PerfilDetalheComponent,
    PerfilNovoComponent,
    PerfilEditComponent
  ],
  providers: [
    PerfisService
  ]
})
export class PerfisModule { }
