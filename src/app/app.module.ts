import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navigacao/navecagao.module';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacaoModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
