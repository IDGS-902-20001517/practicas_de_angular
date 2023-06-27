import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!:string;
  compradores!:number;
  cineco!:string;
  entradas!:number;
  datos!:string;
  
  calcular(){
    var total = 0.0;
            var totalADesc = 0.0;
            var totalADesc1 = 0.0;
            var desc = 0.0;
            var desc1 = 0.0;
            this.datos = "No se permite que un usuario compre mas de 7 boletas";
            if (this.entradas <= (this.compradores * 7))
            {
                if (this.entradas > 5) { desc += 0.15; }
                else if (this.entradas >= 3) { desc += 0.1; }
                total = this.entradas * 12.0;
                totalADesc = total * desc;
                if (this.cineco == "Si")
                {
                    desc1 += 0.1;
                    totalADesc1 = (total - totalADesc) * desc1;
                }
                this.datos = "El usuario " + this.nombre + " debera pagar: $" + (total - totalADesc - totalADesc1) + " de " + this.compradores + " compradores con un descuento de " + ((desc + desc1) * 100) + "%";
            }
  }
}
