import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { pianoComponent } from './components/inicio/piano/piano.component';
 
const routes: Routes = [
  
  {path:'',redirectTo:"/inicio",pathMatch:'full'},//si esta vacio voy a inicio
  
  {path:'inicio',component:InicioComponent,children:[
    {path: '',component: InicioComponent },
    {path:'piano',component:pianoComponent},
   
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
