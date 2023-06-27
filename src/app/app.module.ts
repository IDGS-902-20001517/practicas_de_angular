import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Alumno, NameGrupos } from './utl/grupos.componet';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { DistanciaModule } from './utl/formularios/distancia/distancia.module';
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NameGrupos,
    Alumno,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    DistanciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
