import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './components/carros/carrosdetails/carrosdetails.component';
import { MarcaslistComponent } from './components/marcas/marcaslist/marcaslist.component';
import { MarcasdetailsComponent } from './components/marcas/marcasdetails/marcasdetails.component';


export const routes: Routes = [

  // essa rotas renderizam apenas o component declarado //
  {path: " ", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},

  // rotas filhas renderizam o conteúdo declarando como "pai" e o delas proprias junto //
  {path: "admin", component: PrincipalComponent, children:[

    {path: "carros", component: CarroslistComponent},
    {path: "carros/new", component: CarrosdetailsComponent},
    // variáveis de rota sempre começam com ':' //
    {path: "carros/edit/:id", component: CarrosdetailsComponent},
    {path: "marcas", component: MarcaslistComponent},
    {path: "marcas/new", component: MarcasdetailsComponent},
    {path: "marcas/edit/:id", component: MarcasdetailsComponent},

  ]}

];
