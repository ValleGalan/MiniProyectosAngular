import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
 
import { DragonbzModule } from './dragonBz/dragonbz.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { DadosComponent } from './components/inicio/dados/dados.component';
import { InicioComponent } from './components/inicio/inicio.component';
 
 


@NgModule({
  declarations: [
    AppComponent,
 
    DadosComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    DragonbzModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
