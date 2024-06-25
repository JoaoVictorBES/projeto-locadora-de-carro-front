import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrincipalComponent } from '../../layout/principal/principal.component';

@Component({
  selector: 'app-marcaslist',
  templateUrl: './marcaslist.component.html',
  styleUrls: ['./marcaslist.component.scss'],
  imports: [RouterOutlet, RouterLink],
  standalone: true
})
export class MarcaslistComponent {}
