import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exemplo11Component } from './exemplo11/exemplo11.component';
import { Exemplo12Component } from './exemplo12/exemplo12.component';
import { Exemplo13Component } from './exemplo13/exemplo13.component';
import { Exemplo14Component } from './exemplo14/exemplo14.component';

@NgModule({
   declarations: [
      AppComponent,
      Exemplo11Component,
      Exemplo12Component,
      Exemplo13Component,
      Exemplo14Component
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
