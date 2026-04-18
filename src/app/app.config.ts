import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthInterceptor, errorInterceptor } from './core/api/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    providePrimeNG({
        theme: {
          preset: Aura,
          options: {
            darkModeSelector: false,
            primaryColor: '#000000'
          }
        }
    }),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([
        AuthInterceptor,
        errorInterceptor
      ])
    )
  ]
};
