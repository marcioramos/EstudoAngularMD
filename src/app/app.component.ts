import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // items: string[] = [
  //   'Pepper',
  //   'Salt',
  //   'Paprika'
  // ];

  links: any[] = [
    { Descricao: 'Início', Link: '' },
    { Descricao: 'Login', Link: '/login' },
    { Descricao: 'Perfis', Link: '/perfis' },
    { Descricao: 'Usuários', Link: '/usuarios' },
    { Descricao: 'Produtos', Link: '' },
    { Descricao: 'Movimentações', Link: '' }

  ];

  constructor() { }


}
