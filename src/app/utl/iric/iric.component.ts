import { Component } from '@angular/core';
import { IAlumnosIric } from '../alumnos-iric';
@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {
  alumnoTitle!:string;
  imageWidth:number=59;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:IAlumnosIric[]=[
    {
      matricula:1234,
      nombre:'pedro',
      edad:23,
      correo:'pedro@gmail.com',
      foto:'https://cdn.shopify.com/s/files/1/0251/9220/2300/products/PowerRangersUltimatesSuper7MightyMorphinBlueRanger.png?v=1660230031',
      calif:6.7
    },
    {
      matricula:12345,
      nombre:'juan',
      edad:27,
      correo:'juan@gmail.com',
      foto:'https://imgs.casasbahia.com.br/55013231/1xg.jpg',
      calif:7
      },
    {
        matricula:123456,
        nombre:'diego',
        edad:19,
        correo:'diego@gmail.com',
        foto:'https://www-s.mlo.me/upen/v/2020/202010/20201028/202010281044316947262.jpg',
        calif:9
        },

  ]

  onCalificaClick(message:string){
    this.alumnoTitle=`${message}`;
  }

}
