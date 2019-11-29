import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplo',
  templateUrl: './formulario-ejemplo.component.html',
  styleUrls: ['./formulario-ejemplo.component.css']
})
export class FormularioEjemploComponent implements OnInit {

usuario:Object ={
  nombre: null,
  apellido: null,
  correo: null
}


  constructor() { }

public guardar(forma: NgForm){
  console.log("ngForm", forma );
  console.log("valor", forma.value );

}



  ngOnInit() {
  }

}
