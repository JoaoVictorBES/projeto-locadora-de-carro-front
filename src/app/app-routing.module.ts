import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { MarcasdetailsComponent } from './components/marcas/marcasdetails/marcasdetails.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: PrincipalComponent, children: [
    { path: 'carros', component: CarroslistComponent },
    { path: 'carros/new', component: CarrosdetailsComponent },
    { path: 'carros/edit/:id', component: CarrosdetailsComponent },
    { path: "marcas", component: MarcaslistComponent},
    { path: "marcas/new", component: MarcasdetailsComponent},
    { path: "marcas/edit/:id", component: MarcasdetailsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
