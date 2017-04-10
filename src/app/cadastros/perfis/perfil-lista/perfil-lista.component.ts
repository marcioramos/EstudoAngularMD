import { Component, OnInit } from '@angular/core';
import { Perfil } from "app/cadastros/perfis/model/perfil";
import { PerfisService } from "app/cadastros/perfis/perfis.service";

@Component({
  selector: 'app-perfil-lista',
  templateUrl: './perfil-lista.component.html',
  styleUrls: ['./perfil-lista.component.css']
})
export class PerfilListaComponent implements OnInit {

  perfis: Perfil[] = [];

  constructor(private perfisService: PerfisService) { }

  ngOnInit() {
    this.perfis = this.perfisService.getPerfis();
  }

}
