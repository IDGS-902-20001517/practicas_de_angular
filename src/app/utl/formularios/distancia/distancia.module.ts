import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ditancia2pComponent } from './ditancia2p/ditancia2p.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    Ditancia2pComponent
  ],
  imports: [    
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule
  ],
  exports:[
    Ditancia2pComponent
  ]
})
export class DistanciaModule { }
