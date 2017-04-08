import { Injectable } from '@angular/core';

import { Perfil } from './model/perfil';

@Injectable()
export class PerfisService {

  private lista: Perfil[] = [
    new Perfil(1, 'Perfil1'),
    new Perfil(2, 'Perfil2'),
    new Perfil(3, 'Perfil3')
  ];

  constructor() { }

  getLista(): Perfil[] {
    return this.lista;
  }

  getUsuario(idPerfil: number) {

    this.lista.forEach(element => {
      if (element.IdPerfil == idPerfil) {
        return element;
      }
    });

    return null;
  }

}
