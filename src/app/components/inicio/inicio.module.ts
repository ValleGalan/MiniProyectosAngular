import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { pianoComponent } from './piano/piano.component';
import { DadosComponent } from './dados/dados.component';



@NgModule({
  declarations: [
    InicioComponent,
    pianoComponent,
    DadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
