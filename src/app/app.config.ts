
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors} from '@angular/common/http';

import {routes} from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';
import { meuhttpInterceptor } from './auth/http-interceptor.service';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient(withInterceptors([meuhttpInterceptor]))]
};




