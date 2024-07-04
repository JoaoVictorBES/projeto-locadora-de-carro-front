import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'
import { PrincipalComponent } from '../principal/principal.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Login } from 'src/app/auth/login';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule,CommonModule, FormsModule, RouterOutlet, PrincipalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})

export class LoginComponent {
  login: Login = new Login();

  router = inject(Router);
  loginService = inject(LoginService);

  constructor() {
    this.loginService.removerToken();
  }

  logar() {

    this.loginService.logar(this.login).subscribe({
      next: token => {
        if (token) { //o usuário e senha digitados estavam corretos
          this.loginService.addToken(token);
          if (this.loginService.hasPermission("ADMIN"))
            this.router.navigate(['/admin/carros']);
          else if (this.loginService.hasPermission("USER"))
            this.router.navigate(['/admin/marcas']);
        } else { //ou o usuário ou a senha estão incorretos
          alert('usuário ou senha incorretos!');
        }
      },
      error: erro => {
        alert('deu erro');
      }
    });

  }


}
