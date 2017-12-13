import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroRecetaComponent } from './registro-receta/registro-receta.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroRecetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
