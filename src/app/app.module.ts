import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistanciaModule } from './utl/formularios/distancia/distancia.module';
<<<<<<< HEAD
import { MenuComponent } from './utl/formularios/menu/menu.component';
import { CinepolisModule } from './utl/formularios/cinepolis/cinepolis.module';
import { ResistenciasModule } from './utl/formularios/resistencias/resistencias.module';
=======
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';

>>>>>>> 5158bfe01d94b13e6d4a4b5f9260852ae7906167

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent
=======
    NameGrupos,
    Alumno,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
    CalificacionAlumComponent,
    AlumnoFilterPipe
    
>>>>>>> 5158bfe01d94b13e6d4a4b5f9260852ae7906167
  ],
  imports: [
    BrowserModule,
    DistanciaModule,
    CinepolisModule,
    ResistenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
