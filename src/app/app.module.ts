import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DistanciaModule } from './utl/formularios/distancia/distancia.module';
import { MenuComponent } from './utl/formularios/menu/menu.component';
import { CinepolisModule } from './utl/formularios/cinepolis/cinepolis.module';
import { ResistenciasModule } from './utl/formularios/resistencias/resistencias.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
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
