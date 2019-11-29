import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  
  public clicPrueba() {
    console.log('le  has dado click al boton');
    $('body').css('background','blue');
    Swal.fire('Hey usuario!', 'I don\'t like you.', 'warning');
    }



}
