import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exemplo11Component } from './exemplo11/exemplo11.component';
import { Exemplo12Component } from './exemplo12/exemplo12.component';
import { Exemplo13Component } from './exemplo13/exemplo13.component';
import { AppRoutingModule } from './app-routing.module';
import { PaiComponent } from './event/Pai/Pai.component';
import { FilhoComponent } from './event/Filho/Filho.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';


@NgModule({
   declarations: [
      AppComponent,
      Exemplo11Component,
      Exemplo12Component,
      Exemplo13Component,
      PaiComponent,
      FilhoComponent,  
      StockstatusComponent     
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
