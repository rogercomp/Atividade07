import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exemplo11Component } from './exemplo11/exemplo11.component';
import { Exemplo12Component } from './exemplo12/exemplo12.component';
import { Exemplo13Component } from './exemplo13/exemplo13.component';


const routes: Routes = [
    { path: 'exemplo11', component: Exemplo11Component },
    { path: 'exemplo12', component: Exemplo12Component },
    { path: 'exemplo13', component: Exemplo13Component }    
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
