import { Component } from '@angular/core';

@Component({
  selector: 'app-ditancia2p',
  templateUrl: './ditancia2p.component.html',
  styleUrls: ['./ditancia2p.component.css']
})
export class Ditancia2pComponent {
  x1!:number;
  y1!:number;
  x2!:number;
  y2!:number;
  resultado!:number;
  
  calcular(){
    this.resultado =Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
  }
  }

