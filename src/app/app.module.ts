import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LenguajesProgramacionComponent } from './components/lenguajes-programacion/lenguajes-programacion.component';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LenguajesProgramacionComponent,
    C1Component,
    C2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
