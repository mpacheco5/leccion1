import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { SearchComponent } from './components/search/search.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { FiltroComponent } from './components/filtro/filtro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RutasComponent,
    SearchComponent,
    RutaComponent,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
