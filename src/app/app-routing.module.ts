import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { pianoComponent } from './components/inicio/piano/piano.component';
import { DadosComponent } from './components/inicio/dados/dados.component';

const routes: Routes = [
  
  {path:'',redirectTo:"/inicio",pathMatch:'full'},//si esta vacio voy a inicio
  
  {path:'inicio',component:InicioComponent,children:[
    {path: '',component: InicioComponent },
    
   
  ]},
  {path:'piano',component:pianoComponent},
    {path:'dados',component: DadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
