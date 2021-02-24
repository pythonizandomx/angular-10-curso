import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguajes-programacion',
  templateUrl: './lenguajes-programacion.component.html',
  styleUrls: ['./lenguajes-programacion.component.css']
})
export class LenguajesProgramacionComponent implements OnInit {
  listado;
  constructor() { 

    this.listado = [
      {name : 'Python', descripcion : "Descripcion" },
      

    ]

  }
  ngOnInit(): void {
  }



}
