import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  b1: number = 0;
  b2: number = 0;
  b3: number = 0;
  lista: string[] = [];
  tolerancia: string = "";
  resultadox: string = "";
  resultadoFMin: number = 0;
  resultadoFMax: number = 0;
  successMessage: string = 'Cálculo realizado con éxito';

  calculaResistencia() {

    this.resultadox =""+this.b1+this.b2* Math.pow(10,this.b3);

    if (this.tolerancia == "Gold") {
      this.resultadoFMin = parseInt(this.resultadox) - (parseInt(this.resultadox)* 0.05);
      this.resultadoFMax = parseInt(this.resultadox)+ (parseInt(this.resultadox) * 0.05);
    } else if (this.tolerancia == "Silver") {
      this.resultadoFMin = parseInt(this.resultadox) - (parseInt(this.resultadox) * 0.1);
      this.resultadoFMax = parseInt(this.resultadox) + (parseInt(this.resultadox)* 0.1);
    }
  }
  lista1=[
    'Black',
    'Brown',
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Violet',
    'Gray',
    'White'
  ]
  tipoTolerancia=[
    'Gold',
    'Silver'
  ]
}
  
