import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  skin:any;
  constructor() { }

  ngOnInit() {
    this.skin = 1;
  }
  
  public cambiaSkin() {
    this.skin = this.skin == 1 ? 2: 1;
  }
}
