import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule, MatToolbarModule, MatTableModule, MatInputModule} from '@angular/material';
import { ContatoComponentComponent } from './contato-component/contato-component.component';
import { RouterModule } from '@angular/router';
import { ContatoComponentModule } from './contato-component/contato-component.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponentComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    ContatoComponentModule,
    FormsModule,
    HttpClientModule 
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
