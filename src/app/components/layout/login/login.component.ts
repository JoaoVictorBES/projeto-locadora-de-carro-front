import { Component, inject } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'
import { PrincipalComponent } from '../principal/principal.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule,CommonModule, FormsModule, RouterOutlet, PrincipalComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})

export class LoginComponent  {

  usuario!: string;
  senha!: string;

  router = inject(Router);

  logar(){

    if (this.usuario == 'admin' && this.senha == 'admin') {
      this.router.navigate(['admin/carros']);
    } else
    alert('Usuário ou senhas estão incorretos!');

  }

}
