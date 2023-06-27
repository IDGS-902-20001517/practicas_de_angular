import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule
  ],
  exports:[
    CinepolisComponent
  ]
})
export class CinepolisModule { }
