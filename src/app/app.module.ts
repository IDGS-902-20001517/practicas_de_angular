import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistanciaModule } from './utl/formularios/distancia/distancia.module';

import { MenuComponent } from './utl/formularios/menu/menu.component';
import { CinepolisModule } from './utl/formularios/cinepolis/cinepolis.module';
import { ResistenciasModule } from './utl/formularios/resistencias/resistencias.module';
import { AppRoutingModule } from './app.routing.module';

import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe
  ],
  imports: [
    BrowserModule,
    DistanciaModule,
    CinepolisModule,
    ResistenciasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
