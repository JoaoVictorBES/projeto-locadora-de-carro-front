import { Routes } from '@angular/router';
import { CarroslistComponent } from './components/carroslist/carroslist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

  {path: "dashboard", component: DashboardComponent},
  {path: "", redirectTo: "carros", pathMatch: 'full'},
  {path: "carros", component: CarroslistComponent}

];
