import {
  provideHttpClient,
  withFetch,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  ExtraOptions,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { starapiInterceptor } from './core/interceptors/starapi.interceptor';
// import { provideMarkdown } from 'ngx-markdown';
// import { routes } from './app.routes';
// import { loadingInterceptor } from './core/interceptors/loading.interceptor';
import { routes } from './app.routes';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideHttpClient(
      withInterceptorsFromDi(),
      withFetch(),
      withInterceptors([starapiInterceptor, loadingInterceptor])
    ),
    provideAnimationsAsync(),
    // provideMarkdown({
    //   // markedExtensions: [gfmHeadingId()],
    // }),
  ],
};
