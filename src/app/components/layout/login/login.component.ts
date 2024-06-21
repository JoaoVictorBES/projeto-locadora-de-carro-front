import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms'
import { PrincipalComponent } from '../principal/principal.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, PrincipalComponent, RouterOutlet, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent  {

}
