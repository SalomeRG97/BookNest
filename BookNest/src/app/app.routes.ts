import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto
  { path: 'home', component: HomeComponent },
  // Otras rutas
  //{ path: '**', component: NotFoundComponent } // Ruta para manejo de 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
