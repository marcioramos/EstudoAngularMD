import { Injectable } from '@angular/core';

import { Usuario } from './model/usuario';

@Injectable()
export class UsuariosService {

  private lista: Usuario[] = [
    new Usuario(1, 'Usuario1', 'usuario1@gmail.com'),
    new Usuario(2, 'Usuario2', 'usuario2@gmail.com'),
    new Usuario(3, 'Usuario3', 'usuario3@gmail.com')
  ];

  constructor() { }

  getLista(): Usuario[] {
    return this.lista;
  }

  getUsuario(idUsuario: number) {

    this.lista.forEach(element => {
      if (element.IdUsuario == idUsuario) {
        return element;
      }
    });

    return null;
  }

}
