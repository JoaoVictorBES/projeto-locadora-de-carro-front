
import { provideRouter } from '@angular/router';
import { provideHttpClient} from '@angular/common/http';

import {routes} from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), provideHttpClient()]
};


