import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true, // Agregar esta propiedad
  imports: [CommonModule, FormsModule], // Aquí se pueden agregar otros módulos necesarios
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Login exitoso:', response);
        // Aquí puedes guardar el token en el localStorage o manejar la redirección
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Credenciales incorrectas o usuario no encontrado';
      }
    );
  }
}
