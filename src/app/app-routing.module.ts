import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RutasComponent } from './components/rutas/rutas.component';
import { RutaComponent } from './components/ruta/ruta.component';
import { SearchComponent } from './components/search/search.component';
import { FiltroComponent } from './components/filtro/filtro.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'rutas', component:RutasComponent},
  {path: 'ruta/:id', component:RutaComponent},
  {path: 'search/:dato', component:SearchComponent},
  {path: 'filtro/:tipo', component:FiltroComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
