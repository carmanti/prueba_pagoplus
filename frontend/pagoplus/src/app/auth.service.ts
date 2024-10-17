import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient

@Injectable({
  providedIn: 'root', // Asegúrate de que el servicio esté disponible en toda la aplicación
})
export class AuthService {
  constructor(private http: HttpClient) {} // Asegúrate de inyectar HttpClient aquí

  login(email: string, password: string) {
    return this.http.post('http://localhost:3008/api/v1/login', {
      email,
      password,
    });
  }
}
