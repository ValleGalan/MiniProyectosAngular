import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PianoComponent } from './componentes/piano/piano.component';
import { DadosComponent } from './componentes/dados/dados.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DragonbzModule } from './dragonBz/dragonbz.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MainPageComponent } from './dragonBz/main-page/main-page.component';
import { MaterialModule } from './material/material.module';
 


@NgModule({
  declarations: [
    AppComponent,
    PianoComponent,
    DadosComponent,
    InicioComponent,  
  ],
  imports: [
    BrowserModule,
    DragonbzModule,
    AppRoutingModule,

    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
