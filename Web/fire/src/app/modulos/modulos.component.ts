import { Component, OnInit } from '@angular/core';
import {Gestor} from '../gestor';
import { GestoresService } from '../gestores.service';
import { ModulosService } from '../modulos.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  filter: string;
  modulosList: String[];
  gestor: Gestor;
  nuevoModulo: boolean;
  modificarModulo: boolean;
  modulo: String;

  constructor(private gestoresService: GestoresService, private modulosService: ModulosService) {
    this.filter = '';
    this.modulosList = [];
    this.getGestorActual();

  }

  ngOnInit() {
  }

  getGestorActual() {
    const self = this;
    this.gestoresService.loadGestor().subscribe( g => {
      self.gestor = JSON.parse(JSON.stringify(g));
      this.getList(self.gestor.curso);
    });
  }

  newModulo( ) {
    if (this.nuevoModulo) {
      this.nuevoModulo = false;
    } else {
      this.nuevoModulo = true;
    }
  }

  getList(curso: string) {
    this.modulosService.loadList(curso);
    this.modulosList = this.modulosService.getList()
  }

}