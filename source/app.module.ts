import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { DieComponent }   from './die.component';
import { DiceManComponent }   from './dice-man.component';

// Include Formsmodule to use ngModel directive
@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule
  ],
  declarations: [ 
  	AppComponent, 
  	DieComponent,
  	DiceManComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
