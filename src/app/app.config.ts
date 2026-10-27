import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    //withInMemoryScrolling zuständig, damit Seite auf Seitenanfang y=0 x=0 springt
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:"enabled"})),
  ]
};
