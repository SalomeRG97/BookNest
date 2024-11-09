import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  searchTerm: string = '';

  onSearch() {
    // Lógica para manejar la búsqueda
    console.log('Buscando:', this.searchTerm);
    // Aquí puedes implementar una llamada a un servicio para obtener los libros
  }
}
