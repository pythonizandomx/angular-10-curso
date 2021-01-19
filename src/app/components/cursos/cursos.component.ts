import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor() { }
  newCourse;
  cursos = [
    {id: 1, curso: "CURSO DE PYTHON 3"},
    {id: 2, curso: "CURSO DE BASE DE DATOS"},
    {id: 3, curso: "CURSO DE ANGULAR 10"},
  ]
  ngOnInit(): void {
  }

  add(){  
    if(this.newCourse){
      this.cursos.push({id : this.cursos.length + 1, curso: this.newCourse })
      this.newCourse = null;
    }
    else{
      alert("ingresa un curso")
    }
    
  }

 

}
