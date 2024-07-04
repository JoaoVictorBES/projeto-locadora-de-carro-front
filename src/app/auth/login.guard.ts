import { CanActivateFn } from '@angular/router';

import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const loginGuard: CanActivateFn = (route, state) => {

  let loginService = inject(LoginService);

  if(loginService.hasPermission("USER") && state.url == '/admin/carros'){
    alert('Você não tem permissão de acesso à essa rota!');
    return false;
  }

  return true;
};
