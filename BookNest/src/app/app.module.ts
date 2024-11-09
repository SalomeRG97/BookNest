import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppRoutes, AppComponent],
})
export class AppModule {}
